import {
    UseMutateAsyncFunction,
    UseSignAndExecuteTransactionError,
    UseSignAndExecuteTransactionArgs,
    NETWORK,
    PACKAGE_ID,
    WORLD_ID,
    loadMetadata,
    Obelisk,
    Transaction,
    SuiTransactionBlockResponse,
    PRIVATEKEY,
    ThunkDispatch,
    initialStateType,
    UnknownAction,
    reduxDispatch as Dispatch
} from "./type"
import { setCongratulation } from "../store/modules/suikemon"

type SuikemonInfo = {
    suikemon_id: string,
    shiny: boolean,
    number: string,
    trainer: string
}

type Props = {
    cancel_index: number,
    cancel_number: string,
    coin_value: number,
    signAndExecuteTransaction: UseMutateAsyncFunction<SuiTransactionBlockResponse, UseSignAndExecuteTransactionError, UseSignAndExecuteTransactionArgs, unknown>,
    dispatch: ThunkDispatch<{
        suikemon: initialStateType;
    }, undefined, UnknownAction> & Dispatch<UnknownAction>
}

export default async function cancel({ cancel_index, cancel_number, coin_value, signAndExecuteTransaction, dispatch }: Props) {
    const metadata = await loadMetadata(NETWORK, PACKAGE_ID)
    const obelisk = new Obelisk({
        networkType: NETWORK,
        packageId: PACKAGE_ID,
        metadata: metadata,
        secretKey: PRIVATEKEY
    })
    const tx = new Transaction()

    const fee = tx.splitCoins(tx.gas, [coin_value])
    tx.transferObjects([fee], obelisk.currentAddress())

    const world = tx.object(WORLD_ID)
    const params = [world, tx.pure.u64(cancel_index), tx.pure.u64(cancel_number)]
    await obelisk.tx.suikemon_system.cancel(tx, params, undefined, true)

    await signAndExecuteTransaction(
        {
            transaction: tx,
            chain: `sui:${NETWORK}`
        },
        {
            onSuccess: (e) => {
                if (e.effects.status.status === "failure") {
                    console.log("Please check if you have enough money to purchase!")
                    return
                }
                const suikemonEvent = e.events.filter((event: { type: string }) => event.type === `${PACKAGE_ID}::suikemon_system::GetSuikemonEvent`)[0]
                const suikemonInfo = suikemonEvent.parsedJson as SuikemonInfo
                const suikemon = suikemonInfo.suikemon_id
                const shiny = suikemonInfo.shiny
                // console.log(suikemon, shiny)
                dispatch(setCongratulation({
                    suikemonID: suikemon,
                    shiny,
                }))
            }
        }
    )
}
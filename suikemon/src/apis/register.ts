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
    SuiSignAndExecuteTransactionOutput
} from "./type"

type Props = {
    signAndExecuteTransaction: UseMutateAsyncFunction<SuiSignAndExecuteTransactionOutput, UseSignAndExecuteTransactionError, UseSignAndExecuteTransactionArgs, unknown>,
}

export default async function register({ signAndExecuteTransaction }: Props): Promise<boolean> {
    const metadata = await loadMetadata(NETWORK, PACKAGE_ID)
    const obelisk = new Obelisk({
        networkType: NETWORK,
        packageId: PACKAGE_ID,
        metadata: metadata,
    })
    const tx = new Transaction()
    const world = tx.object(WORLD_ID)
    const params = [world]
    await obelisk.tx.suikemon_system.register(tx, params, undefined, true)
    await signAndExecuteTransaction(
        {
            transaction: tx,
            chain: `sui:${NETWORK}`
        },
        {
            onSuccess: () => {
                return true
            }
        }
    )
    return false
}
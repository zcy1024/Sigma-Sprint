"use client"
import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { useCurrentAccount, useSignAndExecuteTransaction } from "@mysten/dapp-kit";
import { checkNewUser, register } from "@/apis";
import { IsLoading } from "@/app/layout";
import Loading from "@/components/loading";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { refreshAll } from "@/store/modules/suikemon";
import { WalletAccount } from "@mysten/wallet-standard";
import { ThunkDispatch, UnknownAction, Dispatch } from "@reduxjs/toolkit";
import { initialStateType } from "@/store/modules/suikemon";

type Props = {
    account: WalletAccount,
    dispatch: ThunkDispatch<{
        suikemon: initialStateType;
    }, undefined, UnknownAction> & Dispatch<UnknownAction>
}

const Register = () => {
    const router = useRouter()
    const account = useCurrentAccount()
    const dispatch = useDispatch<AppDispatch>()

    async function _checkNewUser({ account, dispatch }: Props) {
        const to = await checkNewUser({ account, dispatch })
        router.push(to)
    }

    useEffect(() => {
        if (!account)
            router.push("/")
        if (account) {
            _checkNewUser({ account, dispatch })
        }
    }, [router, account])

    const [isLoading, setIsLoading] = useContext(IsLoading)
    const { mutateAsync: signAndExecuteTransaction } = useSignAndExecuteTransaction()
    const handlerClick = async () => {
        setIsLoading(true)
        const ok = await register({ signAndExecuteTransaction })
        if (ok) {
            dispatch(refreshAll(account!))
            setIsLoading(false)
            router.push("/")
        }
    }

    return (
        <div>
            <div className="fixed w-screen h-screen bg-transparent z-40"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-widest z-50">
                <div className="animate-bounce text-slate-600">
                    <span className="sprite-icon sprite-icon-000" title="tips"></span>
                    Please <span className="text-orange-500 cursor-pointer font-mono font-bold" onClick={handlerClick}>Click</span> To Register First!
                </div>
            </div>
            {isLoading && <Loading />}
        </div>
    );
};

export default Register;
"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCurrentAccount } from "@mysten/dapp-kit";
import { checkNewUser } from "@/apis";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { WalletAccount } from "@mysten/wallet-standard";
import { ThunkDispatch, UnknownAction, Dispatch } from "@reduxjs/toolkit";
import { initialStateType } from "@/store/modules/suikemon";

type Props = {
    account: WalletAccount,
    dispatch: ThunkDispatch<{
        suikemon: initialStateType;
    }, undefined, UnknownAction> & Dispatch<UnknownAction>
}

const NotConnect = () => {
    const router = useRouter()
    const account = useCurrentAccount()
    const dispatch = useDispatch<AppDispatch>()

    async function _checkNewUser({ account, dispatch }: Props) {
        const to = await checkNewUser({ account, dispatch })
        router.push(to)
    }

    useEffect(() => {
        if (account)
            _checkNewUser({ account, dispatch })
    }, [account])
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-widest">
            <div className="animate-bounce text-slate-600">
                <span className="sprite-icon sprite-icon-000" title="tips"></span>
                Please Connect Wallet First!
            </div>
        </div>
    );
};

export default NotConnect;
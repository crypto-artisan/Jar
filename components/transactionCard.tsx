"use client"

import React from "react";
import { useDisclosure } from "@nextui-org/react";
import TransactionModal from "./transactionModal";
import { ITransaction } from "@/types";

const TransactionCard = ({ transaction }: { transaction: ITransaction }) => {

    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const [modalPlacement, setModalPlacement] = React.useState("auto");

    return (
        <div onClick={onOpen} className="Outline-Card p-4 cursor-pointer">
            <div className="flex flex-row items-center justify-between">
                <h3>{transaction?.id}</h3>
                <p className="text-right">
                    Jar Name:{transaction?.name}<br />
                    {transaction?.date}
                </p>
            </div>
            <div className="flex flex-row items-center justify-between">
                < button className="px-4 py-2 bg-theme rounded-xl" >
                    {transaction?.result}
                </button >
                <h3>{transaction?.value} HBAR</h3>
            </div>
            <TransactionModal transaction={transaction} isOpen={isOpen} modalPlacement={modalPlacement} onClose={onClose} onOpenChange={onOpenChange} />
        </div >
    )
}

export default TransactionCard;
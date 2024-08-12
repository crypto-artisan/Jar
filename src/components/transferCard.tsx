"use client"

import React from "react";
import { useDisclosure } from "@nextui-org/react";
import TransferModal from "./transferModal";
import { ITransfer } from "@/types";
import { format } from 'date-fns';
interface TransferCardProps {
    transfer: ITransfer;
}

const TransferCard: React.FC<TransferCardProps> = ({ transfer }) => {

    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const [modalPlacement, setModalPlacement] = React.useState("auto");

    return (
        <div onClick={onOpen} className="Outline-Card p-4 cursor-pointer">
            <div className="flex flex-col w-full items-center justify-between">
                <div className="flex flex-row w-full items-center justify-between">
                    <h3>#{transfer?.id}</h3>
                    Jar Name:{transfer?.name}<br />
                </div>
                <p className="w-full text-right">
                    Created on {format(transfer?.enrolled_date, 'dd MMMM yyyy')}
                </p>
            </div>
            <div className="flex flex-row items-center justify-between">
                < button className="px-4 py-2 bg-theme rounded-xl w-[120px]" >
                    {transfer?.result}
                </button >
                <h3>{transfer?.assets} HBAR</h3>
            </div>
            <TransferModal transfer={transfer} isOpen={isOpen} modalPlacement={modalPlacement} onClose={onClose} onOpenChange={onOpenChange} />
        </div >
    )
}

export default TransferCard;
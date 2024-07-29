import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";
import { CheckIcon } from "./icons";
import { ITransaction } from "@/types";
import Image from "next/image";

interface ITransactionModal {
    isOpen: boolean;
    onOpenChange: () => void;
    modalPlacement: string;
    onClose: () => void;
    transaction: ITransaction
}

const TransactionModal: React.FC<ITransactionModal> = ({ isOpen, modalPlacement, onClose, onOpenChange, transaction }) => {
    function legacyCopy(value: string) {
        const ta = document.createElement('textarea')
        ta.value = value ?? ''
        ta.style.position = 'absolute'
        ta.style.opacity = '0'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        ta.remove()
    }
    const handleClipBoardCopy = async (value: string) => {
        await navigator.clipboard.writeText(value);
        legacyCopy(value);
    }
    return (
        <Modal
            isOpen={isOpen}
            placement={modalPlacement}
            onOpenChange={onOpenChange}
            classNames={{
                body: "py-8",
                backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                base: "customModal px-2 md:px-4",
                header: "border-b-[1px] border-[#292f46]",
                footer: "border-t-[1px] border-[#292f46]",
                closeButton: "hover:bg-white/5 active:bg-white/10",
            }}
        >
            <ModalContent>
                {(onClose: boolean) => (
                    <>
                        <ModalHeader className="flex flex-row items-center justify-between pt-12 border-0">
                            <h3>{transaction?.id}</h3>
                            < button className="px-4 py-1 bg-theme rounded-xl w-[120px]" >
                                {transaction?.result}
                            </button >
                        </ModalHeader>
                        <ModalBody>
                            <div className="flex flex-col gap-4 overflow-y-auto h-[380px]">
                                <section className="flex flex-col gap-2">
                                    <h4>{transaction?.date}</h4>
                                    <h4>Jar Name: {transaction?.name}</h4>
                                    <h4>Sent to {transaction?.address}</h4>
                                    <div className="flex flex-row gap-2">
                                        <h4>Transaction Hash {transaction?.hash}</h4>
                                        <Image onClick={() => handleClipBoardCopy(transaction?.hash)} src="/copy.svg" alt="copy" width={20} height={20} className="cursor-pointer hover:opacity-60" />
                                    </div>
                                    <h4>Approval Signatures - {transaction?.signatures} out of {transaction?.approvers} approver(s)</h4>
                                </section>
                                <section className="flex flex-col gap-2 w-3/4">
                                    <div className="flex flex-row items-center justify-between px-2 py-1 rounded-xl border-1 bg-[#292f46] border-[#D9D9D9] cursor-pointer">
                                        <h4>0x4Df...Ef859</h4>
                                        <CheckIcon />
                                    </div>
                                    <div className="flex flex-row items-center justify-between px-2 py-1 rounded-xl border-1 bg-[#292f46] border-[#D9D9D9] cursor-pointer">
                                        <h4>0x4Df...Ef859</h4>
                                        <CheckIcon />
                                    </div>
                                    <div className="flex flex-row items-center justify-between px-2 py-1 rounded-xl border-1 bg-[#292f46] border-[#D9D9D9] cursor-pointer">
                                        <h4>0x4Df...Ef859</h4>
                                        <CheckIcon />
                                    </div>
                                </section>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <h3>{transaction?.value} HBAR</h3>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default TransactionModal;
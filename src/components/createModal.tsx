"use client"

import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Select, SelectItem } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { toast } from "react-hot-toast";
import Image from "next/image";

import { v4 as uuidv4 } from 'uuid';

import { reviewerOptions } from "@/config/mockData";
import { ITransfer, Review } from "@/types";
import { addTransfer } from "@/redux/store/slices/transferSlice";
import { AppDispatch } from "@/redux/store";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { UserContext } from "@/providers/userContext";


interface ITransactionModal {
    isOpen: boolean;
    onOpenChange: () => void;
    modalPlacement: string;
    onClose: () => void;
}

const CreateModal: React.FC<ITransactionModal> = ({ isOpen, modalPlacement, onClose, onOpenChange }) => {
    const { address } = useWeb3ModalAccount();
    const { userName } = useContext(UserContext);
    const dispatch: AppDispatch = useDispatch();
    const [tab, setTab] = useState<string>('create');
    const [numReviewers, setNumReviewers] = useState<number>(1);

    const [name, setName] = useState<string>("");
    const [senderAddress, setSenderAddress] = useState<string>("");
    const [senderUserName, setSenderUserName] = useState<string>(userName || "");
    const [receiverUserName, setReceiverUserName] = useState<string>("");
    const [assets, setAssets] = useState<number>(0);
    const [reviewers, setReviewers] = useState<Review[]>([]);

    const handleSelectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = e.target.value;
        setNumReviewers(parseInt(selectedValue, 10) + 1);
    };

    const validateInputs = () => {
        if (!name || !senderAddress || !senderUserName || !receiverUserName || assets <= 0) {
            toast.error("Please fill out all required fields.")
            return false;
        }
        for (let i = 0; i < reviewers.length; i++) {
            if (!reviewers[i].addr || !reviewers[i].userName) {
                toast.error("Please fill out all reviewer fields.")
                return false;
            }
        }
        return true;
    };

    const handleCreate = () => {
        if (!validateInputs()) return;
        const newTransfer: ITransfer = {
            id: uuidv4(),
            name,
            hash: "",
            receiver: {
                addr: "",
                userName: receiverUserName,
            },
            assets,
            reviews: reviewers,
            result: "Pending",
            enrolled_date: new Date(),
        };
        dispatch(addTransfer({ transfer: newTransfer, address }));
        onClose();
    };

    useEffect(() => {
        setTab('create');
    }, [isOpen])

    useEffect(() => {
        if (address) setSenderAddress(address);
    }, [address])

    const renderReviewerFields = () => {
        return Array.from({ length: numReviewers }).map((_, index) => (
            <div key={index} className="flex flex-col gap-2">
                <section className="flex flex-col gap-2">
                    <h4>{index + 1}. Reviewer’s address</h4>
                    <Input
                        classNames={{
                            inputWrapper: "customInput",
                            input: "text-[12px] text-white",
                        }}
                        labelPlacement="outside"
                        placeholder=""
                        type="input"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            const updatedReviewers = [...reviewers];
                            if (!updatedReviewers[index]) updatedReviewers[index] = { id: new Date().toISOString(), addr: "", userName: "", result: "Pending" };
                            updatedReviewers[index].addr = e.target.value;
                            setReviewers(updatedReviewers);
                        }}
                    />
                </section>
                <section className="flex flex-col gap-2 w-1/2">
                    <h4>{index + 1}. Reviewer’s Telegram ID</h4>
                    <Input
                        classNames={{
                            inputWrapper: "customInput",
                            input: "text-[12px] text-white",
                        }}
                        labelPlacement="outside"
                        placeholder=""
                        type="input"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            const updatedReviewers = [...reviewers];
                            if (!updatedReviewers[index]) updatedReviewers[index] = { id: new Date().toISOString(), addr: "", userName: "", result: "Pending" };
                            updatedReviewers[index].userName = e.target.value;
                            setReviewers(updatedReviewers);
                        }}
                    />
                </section>
            </div>
        ));
    };

    return (
        <Modal
            isOpen={isOpen}
            placement={modalPlacement}
            onOpenChange={onOpenChange}
            classNames={{
                body: "p-4",
                backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                base: "customModal px-2 md:px-4",
                header: "border-none",
                footer: "border-none",
                closeButton: "hover:bg-white/5 active:bg-white/10",
            }}
        >
            <ModalContent>
                {(onClose: () => void) => (
                    <>
                        <ModalHeader className="w-full flex flex-col items-center justify-between pt-12 gap-4">
                            <h3>Create, Invite and Pay Assets</h3>
                            <div className="w-full flex flex-row md:px-12">
                                < button className={`w-[45%] flex flex-row items-center justify-center gap-1 px-4 py-1 bg-[#292f46] border-1 border-theme rounded-xl shadow-theme`} >
                                    <h4 className="flex items-center justify-center rounded-full border-1 border-theme w-[24px] h-[24px]">1</h4>
                                    Create
                                </button >
                                <div className="border-b-1 border-white h-1 self-center w-[10%]" />
                                < button className={`w-[45%] flex flex-row items-center justify-center gap-1 px-4 py-1 bg-[#292f46] rounded-xl ${tab == 'review' && 'border-1 border-theme shadow-theme'}`} >
                                    <h4 className="flex items-center justify-center rounded-full border-1 border-theme w-[24px] h-[24px]">2</h4>
                                    Review
                                </button >
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <div className="flex flex-col gap-2 overflow-y-auto h-[400px] px-2">
                                {
                                    tab == 'create' && (
                                        <>
                                            <section className="flex flex-col gap-2">
                                                <h4>Name of your Jar</h4>
                                                <Input
                                                    classNames={{
                                                        inputWrapper: "customInput",
                                                        input: "text-[12px] text-white",
                                                    }}
                                                    labelPlacement="outside"
                                                    placeholder="Name your jar"
                                                    type="input"
                                                    value={name}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                                                />
                                            </section>
                                            <section className="flex flex-col gap-2">
                                                <h4>Sender’s address</h4>
                                                <Input
                                                    classNames={{
                                                        inputWrapper: "customInput",
                                                        input: "text-[12px] text-white",
                                                    }}
                                                    labelPlacement="outside"
                                                    placeholder=""
                                                    type="input"
                                                    value={senderAddress}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSenderAddress(e.target.value)}
                                                />
                                            </section>
                                            <section className="flex flex-col gap-2 w-2/3 md:w-1/2">
                                                <h4>Sender’s Telegram ID</h4>
                                                <Input
                                                    classNames={{
                                                        inputWrapper: "customInput",
                                                        input: "text-[12px] text-white",
                                                    }}
                                                    labelPlacement="outside"
                                                    placeholder=""
                                                    type="input"
                                                    value={senderUserName}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSenderUserName(e.target.value)}
                                                />
                                            </section>
                                            <section className="flex flex-col gap-2 w-2/3 md:w-1/2">
                                                <h4>Recipient’s Telegram ID</h4>
                                                <Input
                                                    classNames={{
                                                        inputWrapper: "customInput",
                                                        input: "text-[12px] text-white",
                                                    }}
                                                    labelPlacement="outside"
                                                    placeholder=""
                                                    type="input"
                                                    value={receiverUserName}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReceiverUserName(e.target.value)}
                                                />
                                            </section>
                                            <section className="flex flex-col gap-2 w-2/3 md:w-1/2">
                                                <h4>Total Amount of Assets</h4>
                                                <Input
                                                    classNames={{
                                                        inputWrapper: "customInput",
                                                        input: "text-[12px] text-white",
                                                    }}
                                                    labelPlacement="outside"
                                                    placeholder=""
                                                    endContent={
                                                        <div className="flex flex-row items-center justify-center px-2 gap-1">
                                                            <Image src="/HDollar.svg" alt="hdollor" width={30} height={30} className="text-white pointer-events-none flex-shrink-0" />
                                                            <h4>
                                                                HBAR
                                                            </h4>
                                                        </div>
                                                    }
                                                    type="input"
                                                    value={assets}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAssets(Number(e.target.value))}
                                                />
                                            </section>

                                        </>
                                    )
                                }
                                {
                                    tab == 'review' && (
                                        <>
                                            <section className="flex flex-col gap-2">
                                                <h4>Number of Reviewers</h4>
                                                <Select
                                                    variant="bordered"
                                                    placeholder="Select an animal"
                                                    selectedKeys={[(numReviewers - 1).toString()]}
                                                    className="w-[100px]"
                                                    onChange={handleSelectionChange}
                                                    classNames={{
                                                        label: "group-data-[filled=true]:-translate-y-5",
                                                        trigger: "min-h-8 data-[focus=true]:border-white data-[open=true]:border-white border-small",
                                                        listboxWrapper: "max-h-[200px]",
                                                    }}
                                                    listboxProps={{
                                                        itemClasses: {
                                                            base: [
                                                                "rounded-xl",
                                                                "text-default-500",
                                                                "transition-opacity",
                                                                "data-[hover=true]:text-foreground",
                                                                "data-[hover=true]:bg-default-100",
                                                                "dark:data-[hover=true]:bg-default-50",
                                                                "data-[selectable=true]:focus:bg-default-50",
                                                                "data-[pressed=true]:opacity-70",
                                                                "data-[pressed=true]:border-white",
                                                                "data-[focus-visible=true]:border-white",
                                                                "focus:border:white",

                                                            ],
                                                        },
                                                    }}
                                                    popoverProps={{
                                                        classNames: {
                                                            base: "before:bg-default-200",
                                                            content: "p-0 border-small border-divider bg-[#292f46]",
                                                        },
                                                    }}
                                                >
                                                    {reviewerOptions.map((option, index) => (
                                                        <SelectItem key={index} value={option.value}>
                                                            {option.label}
                                                        </SelectItem>
                                                    ))}
                                                </Select>
                                            </section>
                                            {renderReviewerFields()}
                                        </>
                                    )
                                }

                            </div>
                        </ModalBody>
                        <ModalFooter>
                            {
                                tab == 'create' && (
                                    < button onClick={() => setTab('review')} className="px-4 py-1 bg-theme rounded-xl" >
                                        Continue
                                    </button >
                                )
                            }
                            {
                                tab == 'review' && (
                                    <>
                                        < button onClick={() => setTab('create')} className="px-4 py-1 bg-theme rounded-xl" >
                                            Back
                                        </button >
                                        < button onClick={handleCreate} className="px-4 py-1 bg-theme rounded-xl" >
                                            Create
                                        </button >
                                    </>
                                )
                            }
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default CreateModal;
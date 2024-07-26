"use client"

import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Select, SelectItem } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import Image from "next/image";

import { reviewerOptions } from "@/config/mockData";
interface ITransactionModal {
    isOpen: boolean;
    onOpenChange: () => void;
    modalPlacement: string;
    onClose: () => void;
}

const CreateModal: React.FC<ITransactionModal> = ({ isOpen, modalPlacement, onClose, onOpenChange }) => {

    const [tab, setTab] = useState<string>('create');
    // const [tab, setTab] = useState<string>('review');

    const [value, setValue] = React.useState("1");

    const handleSelectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        console.log("=>>>>change event", e.target.value);
    };

    useEffect(() => {
        setTab('create');
    }, [isOpen])

    return (
        <Modal
            isOpen={isOpen}
            placement={modalPlacement}
            onOpenChange={onOpenChange}
            classNames={{
                body: "p-4",
                backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                base: "border-[#292f46] bg-[#19172c] px-2 md:px-4",
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
                                < button className={`w-[45%] flex flex-row items-center justify-between gap-1 px-4 py-1 bg-[#292f46] border-1 border-theme rounded-xl shadow-theme`} >
                                    <h4 className="flex items-center justify-center rounded-full border-1 border-theme w-[24px] h-[24px]">1</h4>
                                    Create
                                </button >
                                <div className="border-b-1 border-white h-1 self-center w-[10%]" />
                                < button className={`w-[45%] flex flex-row items-center justify-between gap-1 px-4 py-1 bg-[#292f46] rounded-xl ${tab == 'review' && 'border-1 border-theme shadow-theme'}`} >
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
                                                        input: "text-md text-white",
                                                    }}
                                                    labelPlacement="outside"
                                                    placeholder="Name your jar"
                                                    type="input"
                                                />
                                            </section>
                                            <section className="flex flex-col gap-2">
                                                <h4>Sender’s address</h4>
                                                <Input
                                                    classNames={{
                                                        inputWrapper: "customInput",
                                                        input: "text-md text-white",
                                                    }}
                                                    labelPlacement="outside"
                                                    placeholder="0x4DfB2F6d16A8CB217b391ce2A731433d769Ef859"
                                                    type="input"
                                                />
                                            </section>
                                            <section className="flex flex-col gap-2 w-1/2">
                                                <h4>Sender’s Telegram ID</h4>
                                                <Input
                                                    classNames={{
                                                        inputWrapper: "customInput",
                                                        input: "text-md text-white",
                                                    }}
                                                    labelPlacement="outside"
                                                    placeholder="@abc123"
                                                    type="input"
                                                />
                                            </section>
                                            <section className="flex flex-col gap-2 w-1/2">
                                                <h4>Recipient’s Telegram ID</h4>
                                                <Input
                                                    classNames={{
                                                        inputWrapper: "customInput",
                                                        input: "text-md text-white",
                                                    }}
                                                    labelPlacement="outside"
                                                    placeholder="@abc123"
                                                    type="input"
                                                />
                                            </section>
                                            <section className="flex flex-col gap-2 w-1/2">
                                                <h4>Total Amount of Assets</h4>
                                                <Input
                                                    classNames={{
                                                        inputWrapper: "customInput",
                                                        input: "text-md text-white",
                                                    }}
                                                    labelPlacement="outside"
                                                    placeholder="900"
                                                    endContent={
                                                        <div className="flex flex-row items-center justify-center px-2 gap-1">
                                                            <Image src="/HDollar.svg" alt="hdollor" width={30} height={30} className="text-white pointer-events-none flex-shrink-0" />
                                                            <h4>
                                                                HBAR
                                                            </h4>
                                                        </div>
                                                    }
                                                    type="input"
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
                                                    selectedKeys={[value]}
                                                    className="w-[100px]"
                                                    onChange={handleSelectionChange}
                                                    classNames={{
                                                        label: "group-data-[filled=true]:-translate-y-5",
                                                        trigger: "min-h-8",
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
                                                                "data-[focus-visible=true]:ring-default-500",
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
                                                        <SelectItem key={index}>
                                                            {option.label}
                                                        </SelectItem>
                                                    ))}
                                                </Select>
                                            </section>

                                            <section className="flex flex-col gap-2">
                                                <h4>1. Reviewer’s address</h4>
                                                <Input
                                                    classNames={{
                                                        inputWrapper: "customInput",
                                                        input: "text-md text-white",
                                                    }}
                                                    labelPlacement="outside"
                                                    placeholder="0x4DfB2F6d16A8CB217b391ce2A731433d769Ef859"
                                                    type="input"
                                                />
                                            </section>
                                            <section className="flex flex-col gap-2 w-1/2">
                                                <h4>1.Reviewer’s Telegram ID</h4>
                                                <Input
                                                    classNames={{
                                                        inputWrapper: "customInput",
                                                        input: "text-md text-white",
                                                    }}
                                                    labelPlacement="outside"
                                                    placeholder="@abc123"
                                                    type="input"
                                                />
                                            </section>
                                            <section className="flex flex-col gap-2">
                                                <h4>2. Reviewer’s address</h4>
                                                <Input
                                                    classNames={{
                                                        inputWrapper: "customInput",
                                                        input: "text-md text-white",
                                                    }}
                                                    labelPlacement="outside"
                                                    placeholder="0x4DfB2F6d16A8CB217b391ce2A731433d769Ef859"
                                                    type="input"
                                                />
                                            </section>
                                            <section className="flex flex-col gap-2 w-1/2">
                                                <h4>2.Reviewer’s Telegram ID</h4>
                                                <Input
                                                    classNames={{
                                                        inputWrapper: "customInput",
                                                        input: "text-md text-white",
                                                    }}
                                                    labelPlacement="outside"
                                                    placeholder="@abc123"
                                                    type="input"
                                                />
                                            </section>
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
                                        < button onClick={onClose} className="px-4 py-1 bg-theme rounded-xl" >
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
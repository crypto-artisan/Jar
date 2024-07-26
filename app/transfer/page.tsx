"use client"
import React from "react";
import { useDisclosure } from "@nextui-org/react";
import CreateModal from "@/components/createModal";
import TabBar from "@/components/tabBar";
import TransactionCard from "@/components/transactionCard";
import { exampleTransactions } from "@/config/mockData";
import { ITransaction } from "@/types";
import { PlusIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";

export default function TransferPage() {

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");

  return (
    <div className="relative">
      <TabBar />
      <div className="w-full py-8 h-[70vh] overflow-y-auto">
        <section className="w-full md:w-[800px] mx-auto px-4 space-y-2">
          {
            exampleTransactions.map((transaction: ITransaction, index: number) => (
              <TransactionCard key={index} transaction={transaction} />
            ))
          }
        </section>
      </div>
      < button onClick={onOpen} className="hidden md:flex absolute bottom-0 right-1/2 translate-x-[500px] px-4 py-2 bg-theme rounded-xl" >
        + Create
      </button >
      <Button onClick={onOpen} isIconOnly color="bg-[#23094F]" className="flex md:hidden absolute right-0 w-[60px] h-[60px] border-1 border-theme bg-[#23094F] rounded-full">
        <PlusIcon />
      </Button>
      <CreateModal isOpen={isOpen} modalPlacement={modalPlacement} onClose={onClose} onOpenChange={onOpenChange} />
    </div>
  );
}

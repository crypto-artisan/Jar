"use client"
import React, { useContext } from "react";
// import { useDisclosure } from "@nextui-org/react";
// import CreateModal from "@/components/createModal";
// import { PlusIcon } from "@/components/icons";
// import { Button } from "@nextui-org/button";
import TabBar from "@/components/tabBar";
import TransactionCard from "@/components/transactionCard";
import { exampleTransactions } from "@/config/mockData";
import { ITransaction } from "@/types";

import { SearchContext } from "../contexts/searchContext";

export default function TransferPage() {

  // const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  // const [modalPlacement, setModalPlacement] = React.useState("auto");
  const { keyWord, setKeyWord } = useContext(SearchContext);
  const filteredTransactions = keyWord
    ? exampleTransactions.filter((transaction) =>
      Object.values(transaction).some((value) =>
        String(value).toLowerCase().includes(keyWord.toLowerCase())
      )
    )
    : exampleTransactions;
  return (
    <>
      <div className="flex flex-col">
        <TabBar />
        <div className="flex-1 w-full mt-[60px] overflow-y-auto">
          <section className="w-full md:w-[700px] mx-auto px-4 space-y-2 overflow-y-auto">
            {
              filteredTransactions.map((transaction: ITransaction, index: number) => (
                <TransactionCard key={index} transaction={transaction} />
              ))
            }
          </section>
        </div>
      </div>
      {/* < button onClick={onOpen} className="hidden md:flex absolute bottom-0 right-1/2 translate-x-[500px] px-4 py-2 bg-theme rounded-xl" >
        + Create
      </button >
      <Button onClick={onOpen} isIconOnly color="bg-[#23094F]" className="flex md:hidden absolute right-0 w-[60px] h-[60px] border-1 border-theme bg-[#23094F] rounded-full">
        <PlusIcon />
      </Button>
      <CreateModal isOpen={isOpen} modalPlacement={modalPlacement} onClose={onClose} onOpenChange={onOpenChange} /> */}
    </>
  );
}

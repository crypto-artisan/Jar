"use client"
import React from "react";
import { useDisclosure } from "@nextui-org/react";
import CreateModal from "@/components/createModal";
import { PlusIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";

import { Navbar } from "@/components/navbar";

export default function TransferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");
  return (
    <div className="relative">
      <Navbar />
      <section className="h-full flex flex-col items-center justify-center gap-4 py-8 md:py-[80px]">
        <div className="w-full text-center justify-center  h-screen overflow-y-auto pb-[100px]">
          {children}
        </div>
      </section>
      < button onClick={onOpen} className="hidden md:flex absolute bottom-[200px] right-1/2 md:translate-x-[360px] lg:translate-x-[500px] px-4 py-2 bg-theme rounded-xl" >
        + Create
      </button >
      <Button onClick={onOpen} isIconOnly color="bg-[#23094F]" className="flex md:hidden absolute bottom-[100px] right-[10px] w-[50px] h-[50px] border-1 border-theme bg-[#23094F] rounded-full">
        <PlusIcon />
      </Button>
      <CreateModal isOpen={isOpen} modalPlacement={modalPlacement} onClose={onClose} onOpenChange={onOpenChange} />
    </div>
  );
}

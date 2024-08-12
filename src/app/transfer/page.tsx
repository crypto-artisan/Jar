"use client"
import React, { useContext } from "react";
import { useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchTransfers } from "@/redux/store/slices/transferSlice";
import { RootState, AppDispatch } from "@/redux/store";

import TabBar from "@/components/tabBar";
import TransferCard from "@/components/transferCard";
// import { exampleTransactions } from "@/config/mockData";
import { ITransfer } from "@/types";

import { SearchContext } from "@/providers/searchContext";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { Loading } from "@/components/Loading";
export default function TransferPage() {

  const hasShownWarningRef = useRef(false);
  const { transfers, loading } = useSelector((state: RootState) => state.transfers);
  const dispatch = useDispatch<AppDispatch>();
  const { address } = useWeb3ModalAccount();

  useEffect(() => {
    if (!hasShownWarningRef.current) {
      hasShownWarningRef.current = true;
      dispatch(fetchTransfers({ address }));
    }
  }, [dispatch]);


  const { keyWord } = useContext(SearchContext);
  const filteredTransfers = keyWord
    ? transfers.filter((transfer) =>
      Object.values(transfer).some((value) =>
        typeof value === "string" && value.toLowerCase().includes(keyWord.toLowerCase())
      )
    )
    : transfers;
  return (
    <>
      <div className="flex flex-col">
        <TabBar />
        <div className="flex-1 w-full mt-[60px] overflow-y-auto">
          <section className="w-full md:w-[700px] mx-auto px-4 space-y-2 overflow-y-auto">
            {loading ? (
              <Loading />
            ) : (
              filteredTransfers.map((transfer: ITransfer) => (
                <TransferCard key={transfer.id} transfer={transfer} />
              ))
            )}
          </section>
        </div>
      </div>
    </>
  );
}

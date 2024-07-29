"use client"
import React, { useState } from "react";
import { exampleJoinData } from "@/config/mockData";

export default function AcceptPage() {

  const [tab, setTab] = useState<string>('sign');

  return (
    <div className="flex flex-col w-full h-full items-center justify-start md:justify-center gap-2 md:gap-8">
      <div className="flex flex-col items-center w-full h-[80vh] md:h-[70vh] overflow-y-auto px-8">
        <p className="text-[32px] md:text-[48px] text-gradient leading-snug md:leading-10 md:pb-6 pb-2">
          Click, Join and<br /> Get Assets
        </p>
        {
          tab == 'sign' ? (
            <div onClick={() => setTab('accept')} className="Outline-Card flex items-center justify-center bg-[#210F3D] h-[300px] md:w-[500px] p-4 px-6 my-16 rounded-[16px] cursor-pointer">
              <h1 className="text-gradient text-[32px] md:text-[48px]">
                Please hold on until the
                recipient joins the jar.
              </h1>
            </div>
          ) : (
            <div className="customModal md:py-10 py-4 px-6 md:w-[400px] mx-auto space-y-4 rounded-[16px]">
              <header className="flex flex-row items-center justify-start border-0">
                <h3>{exampleJoinData[0].id}</h3>
              </header>
              <section className="flex flex-col gap-2 md:gap-4 overflow-y-auto">
                <section className="flex flex-col text-left gap-2">
                  <h4>Name of your Jar</h4>
                  <div className="flex flex-row items-center justify-between px-2 py-1 rounded-md border-1 bg-[#292f46] border-[#D9D9D9] cursor-pointer">
                    <h5 className="text-[10px] md:text-[12px]">{exampleJoinData[0].name}</h5>
                  </div>
                </section>

                <section className="flex flex-col text-left gap-2">
                  <h4>Sender’s address</h4>
                  <div className="flex flex-row items-center justify-between px-2 py-1 rounded-md border-1 bg-[#292f46] border-[#D9D9D9] cursor-pointer">
                    <h5 className="text-[10px] md:text-[12px]">{exampleJoinData[0].sender}</h5>
                  </div>
                </section>

                <section className="flex flex-col text-left gap-2">
                  <h4>Recipient’s address</h4>
                  <div className="flex flex-row items-center justify-between px-2 py-1 rounded-md border-1 bg-[#292f46] border-[#D9D9D9] cursor-pointer">
                    <h5 className="text-[10px] md:text-[12px]">{exampleJoinData[0].recipient}</h5>
                  </div>
                </section>

                <section className="flex flex-col text-left gap-2">
                  <h4>Reviewed by</h4>

                  {
                    exampleJoinData[0].reviews.map((reviewer, index) => (
                      <div key={index} className="flex flex-row items-center justify-between px-2 py-1 rounded-md border-1 bg-[#292f46] border-[#D9D9D9] cursor-pointer">
                        <h5 className="text-[10px] md:text-[12px]">{reviewer}</h5>
                      </div>
                    ))
                  }
                </section>

              </section>
              <footer className="flex flex-row items-center justify-between pt-4 border-t-1 border-[#292f46]">
                <h3>Total Assets:</h3>
                <h3>{exampleJoinData[0].totalAssets} HBAR</h3>
              </footer>
            </div >
          )
        }
      </div >
      {
        tab == 'accept' && (
          <div className="w-full md:w-[400px] px-12">
            < button onClick={() => setTab('sign')} className="w-full px-4 py-2 bg-theme rounded-[16px] text-[24px]" >
              Deposit Assets
            </button >
          </div>
        )
      }
    </div >
  );
}

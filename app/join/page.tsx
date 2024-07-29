"use client"
import React, { useState } from "react";
import { exampleJoinData } from "@/config/mockData";

export default function JoinPage() {

  const [tab, setTab] = useState<string>('join');

  const gradientStyle = {
    background: '-webkit-linear-gradient(30deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0.6) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <div className="flex flex-col w-full h-full items-center justify-start md:justify-center gap-2 md:gap-8">
      <div className="w-full h-[80vh] md:h-[70vh] overflow-y-auto px-8">
        {
          tab == 'join' ? (
            <p className="text-[48px] text-gradient leading-10 pb-6">
              Click, Join and<br /> Get Assets
            </p>
          ) : (
            <p className="text-[48px] text-gradient leading-10 pb-6">
              Click, Join and<br /> Review Jars
            </p>
          )
        }

        <div className="customModal md:py-10 py-4 px-6 md:w-[400px] mx-auto space-y-4 rounded-[16px]">
          <header className="flex flex-row items-center justify-start border-0">
            <h3 className="text-[22px] font-semibold">{exampleJoinData[0].id}</h3>
          </header>
          <section className="flex flex-col gap-2 md:gap-4 overflow-y-auto">
            <section className="flex flex-col text-left gap-2">
              <h4 className="text-[16px]">Name of your Jar</h4>
              <div className="flex flex-row items-center justify-between px-2 py-1 rounded-md border-1 bg-[#292f46] border-[#D9D9D9] cursor-pointer">
                <h5 className="text-[10px] md:text-[12px]">{exampleJoinData[0].name}</h5>
              </div>
            </section>

            <section className="flex flex-col text-left gap-2">
              <h4 className="text-[16px]">Sender’s address</h4>
              <div className="flex flex-row items-center justify-between px-2 py-1 rounded-md border-1 bg-[#292f46] border-[#D9D9D9] cursor-pointer">
                <h5 className="text-[10px] md:text-[12px]">{exampleJoinData[0].sender}</h5>
              </div>
            </section>

            <section className="flex flex-col text-left gap-2">
              <h4 className="text-[16px]">Recipient’s address</h4>
              <div className="flex flex-row items-center justify-between px-2 py-1 rounded-md border-1 bg-[#292f46] border-[#D9D9D9] cursor-pointer">
                <h5 className="text-[10px] md:text-[12px]">{exampleJoinData[0].recipient}</h5>
              </div>
            </section>

            <section className="flex flex-col text-left gap-2">
              <h4 className="text-[16px]">Reviewed by</h4>

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
            <h3 className="text-[22px] font-semibold">Total Assets:</h3>
            <h3 className="text-[22px] font-semibold">{exampleJoinData[0].totalAssets} HBAR</h3>
          </footer>
        </div >
      </div>
      {
        tab == 'join' && (
          <div className="w-full md:w-[400px] px-8 md:px-12">
            < button onClick={() => setTab('sign')} className="w-full px-4 py-2 bg-theme rounded-[16px] text-[24px]" >
              Click to Join
            </button >
          </div>
        )
      }
      {
        tab == 'sign' && (
          <div className="w-full md:w-[400px] md:px-0 grid grid-cols-2 px-8 space-x-2">
            < button className="px-4 py-2 bg-theme rounded-[16px] text-[24px]" >
              Sign
            </button >
            < button className="px-4 py-2 bg-white text-theme rounded-[16px] text-[24px]" >
              Reject
            </button >
          </div>
        )
      }
    </div>
  );
}

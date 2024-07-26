"use client"
import React, { useState } from "react";
import { exampleJoinData } from "@/config/mockData";

export default function AcceptPage() {

  const [tab, setTab] = useState<string>('sign');

  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-8">
      <div className="w-full h-[70vh] overflow-y-auto px-4">
        {
          tab == 'sign' && (
            <div className="flex flex-col gap-4">
              <h2>
                Click, Join and<br />
                Get Assets
              </h2>
              <div onClick={() => setTab('accept')} className="flex items-center justify-center bg-[#210F3D] border-1 border-theme h-[300px] md:w-[500px] mx-8 p-4 md:mx-auto rounded-xl cursor-pointer">
                <h2>
                  Please hold on until the
                  recipient joins the jar.
                </h2>
              </div>
            </div>
          )
        }
        {
          tab == 'accept' && (
            <div className="rounded-xl border-[#292f46] bg-[#19172c] p-4 md:w-[500px] mx-auto space-y-4">
              <header className="flex flex-row items-center justify-start border-0">
                <h3>{exampleJoinData[0].id}</h3>
              </header>
              <section className="flex flex-col gap-4 overflow-y-auto h-[380px]">
                <section className="flex flex-col text-left gap-2">
                  <h4>Name of your Jar</h4>
                  <div className="flex flex-row items-center justify-between px-2 py-1 rounded-xl border-2 bg-[#292f46] border-[#8259EF2f] cursor-pointer">
                    <h4>{exampleJoinData[0].name}</h4>
                  </div>
                </section>

                <section className="flex flex-col text-left gap-2">
                  <h4>Sender’s address</h4>
                  <div className="flex flex-row items-center justify-between px-2 py-1 rounded-xl border-2 bg-[#292f46] border-[#8259EF2f] cursor-pointer">
                    <h4>{exampleJoinData[0].sender}</h4>
                  </div>
                </section>

                <section className="flex flex-col text-left gap-2">
                  <h4>Recipient’s address</h4>
                  <div className="flex flex-row items-center justify-between px-2 py-1 rounded-xl border-2 bg-[#292f46] border-[#8259EF2f] cursor-pointer">
                    <h4>{exampleJoinData[0].recipient}</h4>
                  </div>
                </section>

                <section className="flex flex-col text-left gap-2">
                  <h4>Reviewed by</h4>

                  {
                    exampleJoinData[0].reviews.map((reviewer, index) => (
                      <div key={index} className="flex flex-row items-center justify-between px-2 py-1 rounded-xl border-2 bg-[#292f46] border-[#8259EF2f] cursor-pointer">
                        <h4>{reviewer}</h4>
                      </div>
                    ))
                  }
                </section>

              </section>
              <footer className="flex flex-row items-center justify-between pt-4 border-t-1 border-theme">
                <h3>Total Assets:</h3>
                <h3>{exampleJoinData[0].totalAssets} HBAR</h3>
              </footer>
            </div>
          )
        }
      </div>
      {
        tab == 'accept' && (
          <div className="w-full px-4">
            < button onClick={() => setTab('sign')} className="w-full px-4 py-2 bg-theme rounded-xl" >
              Deposit Assets
            </button >
          </div>
        )
      }
    </div>
  );
}

"use client"
import React, { useEffect, useState } from "react";
import { exampleJoinData } from "@/config/mockData";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Config } from "@/config/site";
import { Loading } from "@/components/Loading";
import { ITransfer } from "@/types";
export default function Page({ params }: { params: { slug: string[] } }) {

    const [loading, setLoading] = useState<boolean>(true);
    const [transfer, setTransfer] = useState<ITransfer>();
    const { address } = useWeb3ModalAccount();
    const router = useRouter();

    useEffect(() => {
        //params.slug[0] => sender addr, params.slug[1] => tranfer id
        console.log("params", params.slug[0], params.slug[1])
        axios.get(`${Config.apiBaseUrl}/user/transfer/one/${params.slug[0]}`, {
            params: {
                transferId: params.slug[1]
            }
        })
            .then(res => {
                setTransfer(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
            })
    }, [params])

    return (
        <div className="flex flex-col w-full h-full items-center justify-start md:justify-center gap-2 md:gap-8">
            {
                loading ? (
                    <Loading />
                ) : (
                    <>
                        <div className="flex flex-col items-center w-full h-[80vh] md:h-[70vh] overflow-y-auto px-8">
                            <p className="text-[32px] md:text-[48px] text-gradient leading-snug md:leading-10 md:pb-6 pb-2">
                                Click, Join and<br /> Get Assets
                            </p>

                            <div className="customModal md:py-10 py-4 px-6 md:w-[400px] mx-auto space-y-4 rounded-[16px]">
                                <header className="flex flex-row items-center justify-start border-0">
                                    <h3>{transfer?.id}</h3>
                                </header>
                                <section className="flex flex-col gap-2 md:gap-4 overflow-y-auto">
                                    <section className="flex flex-col text-left gap-2">
                                        <h4>Name of your Jar</h4>
                                        <div className="flex flex-row items-center justify-between px-2 py-1 rounded-md border-1 bg-[#292f46] border-[#D9D9D950] cursor-pointer">
                                            <h5 className="text-[10px] md:text-[12px]">{transfer?.name}</h5>
                                        </div>
                                    </section>

                                    <section className="flex flex-col text-left gap-2">
                                        <h4>Sender’s address</h4>
                                        <div className="flex flex-row items-center justify-between px-2 py-1 rounded-md border-1 bg-[#292f46] border-[#D9D9D950] cursor-pointer">
                                            <h5 className="text-[10px] md:text-[12px]">{params.slug[0]}</h5>
                                        </div>
                                    </section>

                                    <section className="flex flex-col text-left gap-2">
                                        <h4>Recipient’s address</h4>
                                        <div className="flex flex-row items-center justify-between px-2 py-1 rounded-md border-1 bg-[#292f46] border-[#D9D9D950] cursor-pointer">
                                            <h5 className="text-[10px] md:text-[12px]">{address}</h5>
                                        </div>
                                    </section>

                                    <section className="flex flex-col text-left gap-2">
                                        <h4>Reviewed by</h4>

                                        {
                                            transfer?.reviews.map((reviewe, index) => (
                                                <div key={index} className="flex flex-row items-center justify-between px-2 py-1 rounded-md border-1 bg-[#292f46] border-[#D9D9D950] cursor-pointer">
                                                    <h5 className="text-[10px] md:text-[12px]">{reviewe.addr}</h5>
                                                </div>
                                            ))
                                        }
                                    </section>

                                </section>
                                <footer className="flex flex-row items-center justify-between pt-4 border-t-1 border-[#292f46]">
                                    <h3>Total Assets:</h3>
                                    <h3>{transfer?.assets} HBAR</h3>
                                </footer>
                            </div >

                        </div >

                        <div className="w-full md:w-[400px] px-14 md:px-12 mb-32 md:mb-0">
                            < button className="w-full px-4 py-2 bg-theme rounded-[16px] text-[24px]" >
                                Click to Join
                            </button >
                        </div>
                    </>

                )
            }
        </div >
    );
}

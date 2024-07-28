"use client"

import { useState } from "react"

const tabs = [
    {
        value: 'transfer',
        label: 'Transfer'
    },
    {
        value: 'review',
        label: 'Review'
    }
]
export default function TabBar() {
    const [tab, setTab] = useState<string>('transfer');
    return (
        <div className="fixed grid grid-cols-2 w-full h-[60px]">
            {
                tabs.map((item, index) => (
                    <div onClick={() => setTab(item.value)} key={index}>
                        <button className={`px-4 py-2 bg-transparent rounded-sm hover:opacity-80 transition-all duration-75 ${item.value == tab ? 'border-b-3 border-theme' : ''}`}>
                            {item.label}
                        </button>
                    </div>
                ))
            }
        </div>
    )
}
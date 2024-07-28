"use client"

import { createContext } from "react"
export const SearchContext = createContext({
    keyWord: '',
    setKeyWord: function (value: any) { return value }
})
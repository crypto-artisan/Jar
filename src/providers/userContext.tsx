"use client"

import { createContext } from "react"
export const UserContext = createContext({
    userName: '',
    setUserName: function (value: any) { return value }
})
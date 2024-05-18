"use client"
import { createContext, useEffect, useState } from "react";

type MessagesListContextType = {
    userMessages: string[],
    setUserMessages: React.Dispatch<React.SetStateAction<string[]>>
}

type MessageListContextProviderProps = {
    children: React.ReactNode
}

export const MessagesListContext = createContext({} as MessagesListContextType)

export const MessageListContextProvider = ({ children } : MessageListContextProviderProps) => {

    const [userMessages, setUserMessages] = useState<string[]>([])

    useEffect(() => {
        if (localStorage.getItem("Messages") !== null) {
            setUserMessages(JSON.parse(localStorage.getItem('Messages')))
        }
    }, [])
    
    return (
        <MessagesListContext.Provider value={{ userMessages, setUserMessages}}>
            { children }
        </MessagesListContext.Provider>
    )
}
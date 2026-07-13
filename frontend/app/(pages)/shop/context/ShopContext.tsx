"use client"
import { useState, createContext, useContext, ReactNode } from "react"
import {ShopContextType} from "../hooks/useShop"
const ShopContext = createContext<ShopContextType | undefined>(undefined)
export default function ShopProvider({children}: {children: React.ReactNode}) {
    const [click, setClick] = useState(false) 
    
    return (
        <ShopContext.Provider value={{click, setClick}}>
            {children}
        </ShopContext.Provider>
    );
}
export const useShopContext = () => {
    const context = useContext(ShopContext)
    if(!context) {
        throw new Error("useShopContext must be used within a ShopProvider")
    }
    return context
}

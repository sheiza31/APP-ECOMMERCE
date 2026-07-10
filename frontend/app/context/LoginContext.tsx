"use client"
import { createContext, useState,useContext } from "react";
import { Visibility } from "../hooks/useLogin";
export const LoginContext = createContext<Visibility | null>(null)

export default function LoginProvider({children}: {children: React.ReactNode}) {
    const [click,setClick] = useState<boolean>(false);
    return (
        <LoginContext.Provider value={{click,setClick}}>
            {children}
        </LoginContext.Provider>
    );
}

export function useLoginContext() {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error("useLoginContext must be used within LoginProvider");
    }
    return context;
}
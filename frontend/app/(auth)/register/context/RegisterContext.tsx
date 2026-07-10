"use client"
import {createContext,useContext,useState} from "react"
import {Visibility} from "../hooks/useRegister";

const RegisterContext = createContext<Visibility | undefined> (undefined);

export  const useRegisterContext = () => {
    const context = useContext(RegisterContext);
    if (!context) throw new Error("useRegisterContext must be used within a RegisterProvider");
    return context;
}

export default function RegisterProvider({ children }: { children: React.ReactNode }) {
    const [click,setClick] = useState(false);
    const value = {click,setClick};
    return <RegisterContext.Provider value={value}>{children}</RegisterContext.Provider>;
}
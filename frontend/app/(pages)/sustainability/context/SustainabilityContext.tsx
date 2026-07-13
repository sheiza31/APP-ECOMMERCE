"use client"
import {createContext,useContext,useState} from "react"
import { SustainAbilityContextType } from "../hooks/SustainAbility";
const SustainabilityContext = createContext<SustainAbilityContextType | null>(null)

export default function SustainabilityProvider({children}: {children: React.ReactNode}) {
    const [click,setClick] = useState(false)
    return (
        <SustainabilityContext.Provider value={{click, setClick}}>
            {children}
        </SustainabilityContext.Provider>
    );

}

export function useSustainabilityContext() {
    const context = useContext(SustainabilityContext)
    if (!context) {
        throw new Error("useSustainabilityContext must be used within a SustainabilityProvider")
    }
    return context
}
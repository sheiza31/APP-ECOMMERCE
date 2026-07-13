import {createContext,useContext,useState} from "react";
import { DashboardContextType } from "../hooks/useDashboard";
   
const DashboardContext = createContext<DashboardContextType | null>(null)

export default function DashboardProvider({children}: {children: React.ReactNode}) {
    const [click,setClick] = useState(false)
    return (
        <DashboardContext.Provider value={{click, setClick}}>
            {children}
        </DashboardContext.Provider>
    );

}

export function useDashboardContext() {
    const context = useContext(DashboardContext)
    if (!context) {
        throw new Error("useDashboardContext must be used within a DashboardProvider")
    }
    return context
}
"use client"
import { createContext, useContext, useState } from "react";
import { DashboardContextType, DateRange } from "../hooks/useDashboard";

const DashboardContext = createContext<DashboardContextType | null>(null)

export default function DashboardProvider({ children }: { children: React.ReactNode }) {
    const [click, setClick] = useState(false)
    const [dateRange, setDateRange] = useState<DateRange>({
        startDate: null,
        endDate: null,
    })

    return (
        <DashboardContext.Provider value={{ click, setClick, dateRange, setDateRange }}>
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
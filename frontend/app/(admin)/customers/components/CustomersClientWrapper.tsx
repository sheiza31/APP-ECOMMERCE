"use client"
import { useState } from "react"
import StatsRow from "./StatsRow"
import MainContent from "./MainContent"

const CustomersClientWrapper = () => {
    const [refreshTrigger, setRefreshTrigger] = useState<number>(0)

    const handleUserCreated = () => {
        setRefreshTrigger(prev => prev + 1)
    }

    return (
        <>
            <StatsRow onUserCreated={handleUserCreated} />
            <MainContent refreshTrigger={refreshTrigger} />
        </>
    )
}

export default CustomersClientWrapper

"use client"
import { useState, useCallback } from "react"
import StatsRow from "./StatsRow"
import MainContent from "./MainContent"

const UserSection = () => {
    const [refreshKey, setRefreshKey] = useState(0)

    const handleRefresh = useCallback(() => {
        setRefreshKey(prev => prev + 1)
    }, [])

    return (
        <>
            <StatsRow onRefresh={handleRefresh} />
            <MainContent key={refreshKey} />
        </>
    )
}

export default UserSection

"use client"
import DashboardProvider from "../context/DashboardContext"

export default function DashboardClientWrapper({ children }: { children: React.ReactNode }) {
    return <DashboardProvider>{children}</DashboardProvider>
}

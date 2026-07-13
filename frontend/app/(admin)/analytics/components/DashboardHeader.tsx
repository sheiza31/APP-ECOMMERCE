"use client"
import { Calendar,ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
const DashboardHeader = () => {
    const router = useRouter();
    return (
        <>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                    <nav className="flex items-center space-x-2 text-secondary mb-2">
                        <span onClick={()=>{
                            router.push("/dashboard")
                        }} className="font-body-sm text-body-sm cursor-pointer border-b border-outline-variant">Dashboard</span>
                        <span className="text-body-sm" style={{fontSize: "16px;"}}><ChevronRight /></span>
                        <span className="font-body-sm text-body-sm font-semibold text-primary">Analytics</span>
                    </nav>
                    <h2 className="font-headline-md text-headline-md text-primary">Performance Overview</h2>
                    <p className="font-body-md text-body-md text-secondary">Monitoring growth and engagement metrics across all channels.</p>
                </div>
                <div className="flex items-center bg-surface-container-lowest border border-outline-variant p-1 rounded-xl shadow-sm">
                    <button className="px-4 py-2 font-label-md text-label-md text-secondary hover:bg-surface-container-low rounded-lg transition-all">Last 7 Days</button>
                    <button className="px-4 py-2 font-label-md text-label-md bg-primary text-on-primary rounded-lg shadow-md transition-all">Last 30 Days</button>
                    <button className="px-4 py-2 font-label-md text-label-md text-secondary hover:bg-surface-container-low rounded-lg transition-all">Last 90 Days</button>
                    <div className="w-px h-6 bg-outline-variant mx-1"></div>
                    <button className="flex items-center px-4 py-2 font-label-md text-label-md text-primary hover:bg-surface-container-low rounded-lg transition-all">
                        <Calendar className="mr-2" />
                        Custom Range
                    </button>
                </div>
            </div>
        </>
    )
}
export default DashboardHeader
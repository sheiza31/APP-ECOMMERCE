"use client"
import { useState, useEffect } from "react"

const ChartsSection = () => {
    const [trends, setTrends] = useState<{ date: string; revenue: number }[]>([])
    const [acquisition, setAcquisition] = useState<{ channel: string; percentage: number }[]>([])

    useEffect(() => {
        const fetchAnalytics = async () => {
            const token = localStorage.getItem("token")
            if (!token) return
            try {
                const res = await fetch("http://localhost:8080/api/v1/analytics/dashboard", {
                    headers: { "Authorization": `Bearer ${token}` }
                })
                const data = await res.json()
                if (data.data) {
                    if (data.data.revenueTrends) setTrends(data.data.revenueTrends)
                    if (data.data.customerAcquisition) setAcquisition(data.data.customerAcquisition)
                }
            } catch (error) {
                console.error("Failed to fetch analytics", error)
            }
        }
        fetchAnalytics()
    }, [])

    // SVG Path calculation based on data
    const maxRevenue = trends.length > 0 ? Math.max(...trends.map(t => t.revenue), 1000) : 1000
    const generatePath = () => {
        if (trends.length === 0) return ""
        const width = 800
        const height = 160 // Using max height of 160 to give padding from top 200
        const step = width / (trends.length - 1 || 1)
        
        return trends.map((t, i) => {
            const x = i * step
            // Invert y since SVG 0 is top
            const y = 180 - (t.revenue / maxRevenue) * height
            return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
        }).join(" ")
    }

    const pathD = generatePath()
    const pathFill = pathD ? `${pathD} V 200 H 0 Z` : ""

    const getBarColor = (index: number) => {
        const colors = [
            "bg-primary",
            "bg-on-primary-container",
            "bg-surface-tint",
            "bg-outline"
        ]
        return colors[index % colors.length]
    }

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 shadow-sm">
                    <div className="flex justify-between items-center mb-10">
                        <div>
                            <h3 className="font-headline-sm text-headline-sm text-primary">Revenue Trends</h3>
                            <p className="font-body-sm text-body-sm text-secondary">Daily revenue over last 7 days</p>
                        </div>
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center">
                                <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                                <span className="font-label-sm text-label-sm text-secondary">Gross Revenue</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-72 chart-grid rounded-lg border border-outline-variant/10 overflow-hidden">
                        <svg className="absolute inset-0 w-full h-full preserve-3d" viewBox="0 0 800 200">
                            {pathD && (
                                <>
                                    <path className="text-primary" d={pathD} fill="none" stroke="currentColor" strokeWidth="3"></path>
                                    <path className="opacity-10" d={pathFill} fill="url(#chartGradient)"></path>
                                </>
                            )}
                            <defs>
                                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop className="text-primary" offset="0%" stopColor="currentColor"></stop>
                                    <stop offset="100%" stopColor="white" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        {trends.length > 0 && (
                            <div className="absolute left-[85%] top-[20%] group hidden md:block">
                                <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg cursor-pointer transform -translate-x-1/2 -translate-y-1/2"></div>
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-primary-container text-on-primary-container text-[11px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                    {trends[trends.length - 1].date}: ${trends[trends.length - 1].revenue.toLocaleString("id-ID")}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex justify-between mt-6 text-label-sm text-label-sm text-secondary font-medium">
                        {trends.map((t, i) => (
                            <span key={i}>{t.date}</span>
                        ))}
                    </div>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col">
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Customer Acquisition</h3>
                    <p className="font-body-sm text-body-sm text-secondary mb-8">Channel performance</p>
                    <div className="space-y-6 flex-1">
                        {acquisition.map((acq, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex justify-between font-label-md text-label-md">
                                    <span className="text-primary">{acq.channel}</span>
                                    <span className="font-bold">{acq.percentage}%</span>
                                </div>
                                <div className="h-2 bg-surface-container-low rounded-full overflow-hidden">
                                    <div className={`h-full ${getBarColor(index)} rounded-full`} style={{ width: `${acq.percentage}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="mt-8 w-full py-3 border border-outline-variant text-primary rounded-xl font-label-md text-label-md hover:bg-surface-container-low transition-all">
                        Generate Full Report
                    </button>
                </div>
            </div>
        </>
    )
}
export default ChartsSection 
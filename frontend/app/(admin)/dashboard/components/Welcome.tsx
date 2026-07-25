"use client"
import { useState, useEffect } from "react"
import { Calendar, X } from "lucide-react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useDashboardContext } from "../context/DashboardContext"

const Welcome = () => {
    const [name, setName] = useState("Admin")
    const { dateRange, setDateRange } = useDashboardContext()

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token")
            if (!token) return
            try {
                const res = await fetch("http://localhost:8080/api/v1/auth/me", {
                    headers: { "Authorization": `Bearer ${token}` }
                })
                const data = await res.json()
                if (data.data && data.data.name) {
                    setName(data.data.name)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchUser()
    }, [])

    const isFiltering = dateRange.startDate !== null || dateRange.endDate !== null

    const handleClearFilter = () => {
        setDateRange({ startDate: null, endDate: null })
    }

    const formatLabel = () => {
        const fmt = (d: Date) => d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
        if (dateRange.startDate && dateRange.endDate) return `${fmt(dateRange.startDate)} – ${fmt(dateRange.endDate)}`
        if (dateRange.startDate) return `From ${fmt(dateRange.startDate)}`
        return "Filter by date"
    }

    return (
        <>
            <section className="flex flex-col md:flex-row justify-between items-start md:items-center mb-stack-lg gap-4">
                <div>
                    <h2 className="font-headline-md text-headline-md text-on-background">Welcome Back, {name}</h2>
                    <p className="text-secondary font-body-sm mt-1">Here's what's happening with your store today.</p>
                </div>

                <div className="flex items-center gap-2">
                    {/* Date range filter pill */}
                    <div className="flex items-center gap-1 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm px-3 py-2">
                        <Calendar size={15} className="text-outline shrink-0" />
                        <div className="flex items-center gap-1 text-sm text-secondary font-medium">
                            <DatePicker
                                selected={dateRange.startDate}
                                onChange={(date) => setDateRange({ ...dateRange, startDate: date })}
                                selectsStart
                                startDate={dateRange.startDate}
                                endDate={dateRange.endDate}
                                placeholderText="Start date"
                                dateFormat="dd MMM yyyy"
                                className="w-[100px] bg-transparent outline-none text-sm text-primary font-medium cursor-pointer placeholder:text-outline"
                            />
                            <span className="text-outline">–</span>
                            <DatePicker
                                selected={dateRange.endDate}
                                onChange={(date) => setDateRange({ ...dateRange, endDate: date })}
                                selectsEnd
                                startDate={dateRange.startDate}
                                endDate={dateRange.endDate}
                                minDate={dateRange.startDate ?? undefined}
                                placeholderText="End date"
                                dateFormat="dd MMM yyyy"
                                className="w-[100px] bg-transparent outline-none text-sm text-primary font-medium cursor-pointer placeholder:text-outline"
                            />
                        </div>
                        {isFiltering && (
                            <button
                                onClick={handleClearFilter}
                                title="Clear filter"
                                className="ml-1 p-0.5 rounded-full text-outline hover:text-primary hover:bg-surface-container transition-colors"
                            >
                                <X size={14} />
                            </button>
                        )}
                    </div>

                    {/* Active filter badge */}
                    {isFiltering && (
                        <span className="text-xs font-semibold bg-primary text-white px-2.5 py-1 rounded-full">
                            {formatLabel()}
                        </span>
                    )}
                </div>
            </section>
        </>
    )
}

export default Welcome
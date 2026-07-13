"use client"
import { useEffect, useState } from "react"
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react"

interface DailyRevenue {
    date: string
    total: number
}

interface ProductVariant {
    image: string
}

interface Product {
    ID: number
    name: string
    stock: number
    ProductsVariants?: ProductVariant[]
}

const getStockStatus = (stock: number) => {
    if (stock === 0) return { label: "Sold Out", cls: "bg-outline-variant text-on-surface-variant", icon: <XCircle size={13} /> }
    if (stock <= 5) return { label: "Alert", cls: "bg-error-container text-on-error-container", icon: <AlertTriangle size={13} /> }
    return { label: "Good", cls: "bg-emerald-100 text-emerald-800", icon: <CheckCircle2 size={13} /> }
}

const SalesChart = () => {
    const [dailyData, setDailyData] = useState<DailyRevenue[]>([])
    const [products, setProducts] = useState<Product[]>([])
    const [period, setPeriod] = useState<"30" | "90" | "365">("30")
    const [maxRevenue, setMaxRevenue] = useState(1)

    useEffect(() => {
        const fetchOrders = async () => {
            const token = localStorage.getItem("token")
            if (!token) return
            try {
                const res = await fetch("http://localhost:8080/api/v1/order", {
                    headers: { "Authorization": `Bearer ${token}` }
                })
                const data = await res.json()
                if (data.data) {
                    const orders = data.data
                    const days = parseInt(period)
                    const now = new Date()
                    const cutoff = new Date(now)
                    cutoff.setDate(cutoff.getDate() - days)

                    const map: Record<string, number> = {}
                    orders.forEach((o: any) => {
                        const d = new Date(o.CreatedAt)
                        if (d >= cutoff) {
                            const key = d.toISOString().slice(0, 10)
                            map[key] = (map[key] || 0) + (o.TotalPrice || 0)
                        }
                    })

                    const result: DailyRevenue[] = []
                    for (let i = days - 1; i >= 0; i--) {
                        const d = new Date(now)
                        d.setDate(d.getDate() - i)
                        const key = d.toISOString().slice(0, 10)
                        result.push({ date: key, total: map[key] || 0 })
                    }

                    setDailyData(result)
                    setMaxRevenue(Math.max(...result.map(r => r.total), 1))
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetchOrders()
    }, [period])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("http://localhost:8080/api/v1/product")
                const data = await res.json()
                if (data.data) {
                    setProducts(data.data.slice(0, 5))
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetchProducts()
    }, [])

    const barData = period === "30" ? dailyData
        : period === "90" ? dailyData.filter((_, i) => i % 3 === 0)
        : dailyData.filter((_, i) => i % 15 === 0)

    const labelCount = 4
    const labelIndices = barData.length > 0
        ? Array.from({ length: labelCount }, (_, i) => Math.floor(i * (barData.length - 1) / (labelCount - 1)))
        : []

    const formatDate = (dateStr: string) => {
        const d = new Date(dateStr)
        return d.toLocaleDateString("en-US", { month: "short", day: "numeric" })
    }

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
                {/* Sales Overview Chart */}
                <div className="lg:col-span-2 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="font-headline-sm text-headline-sm text-primary">Sales Overview</h3>
                            <p className="text-secondary font-body-sm">Revenue trend over the last {period} days</p>
                        </div>
                        <div className="flex gap-2">
                            {(["30", "90", "365"] as const).map(p => (
                                <button
                                    key={p}
                                    onClick={() => setPeriod(p)}
                                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${period === p ? "bg-primary text-white" : "text-secondary hover:bg-surface-container"}`}
                                >
                                    {p === "365" ? "1Y" : p + "D"}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[300px] w-full flex items-end justify-between gap-[2px] border-b border-outline-variant">
                        {barData.map((d, i) => {
                            const pct = maxRevenue > 0 ? (d.total / maxRevenue) * 100 : 0
                            return (
                                <div
                                    key={i}
                                    className="chart-bar group relative w-full bg-primary-fixed-dim hover:bg-primary transition-colors cursor-pointer rounded-t"
                                    style={{ height: `${Math.max(pct, 1)}%` }}
                                    title={`${formatDate(d.date)}: Rp ${d.total.toLocaleString("id-ID")}`}
                                >
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col items-center z-10 pointer-events-none whitespace-nowrap">
                                        <div className="bg-primary text-white text-[10px] font-semibold px-2 py-1 rounded shadow">
                                            Rp {d.total.toLocaleString("id-ID")}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex justify-between mt-4 text-[10px] text-outline font-semibold uppercase tracking-widest px-2">
                        {labelIndices.map(i => (
                            <span key={i}>{barData[i] ? formatDate(barData[i].date) : ""}</span>
                        ))}
                    </div>
                </div>

                {/* Inventory Status */}
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant">
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-6">Inventory Status</h3>
                    <div className="space-y-5">
                        {products.length === 0 ? (
                            <p className="text-secondary font-body-sm text-center py-8">No products found</p>
                        ) : products.map((p) => {
                            const status = getStockStatus(p.stock)
                            const imgSrc = p.ProductsVariants?.find(v => v.image && v.image !== "")?.image ?? null
                            return (
                                <div key={p.ID} className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden shrink-0">
                                        {imgSrc ? (
                                            <img
                                                src={imgSrc}
                                                alt={p.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-primary-fixed text-primary font-bold text-sm">
                                                {p.name?.charAt(0)?.toUpperCase() || "?"}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-label-md font-semibold text-primary truncate">{p.name}</p>
                                        <p className="text-xs text-outline">
                                            {p.stock === 0 ? "Out of Stock" : `Stock: ${p.stock} units`}
                                        </p>
                                    </div>
                                    <div className="shrink-0">
                                        <span className={`text-xs px-2 py-0.5 rounded font-bold flex items-center gap-1 ${status.cls}`}>
                                            {status.icon}
                                            {status.label}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <button className="w-full mt-8 py-3 border border-outline-variant rounded-lg text-label-md text-primary font-bold hover:bg-surface-container transition-colors">
                        Manage Inventory
                    </button>
                </div>
            </div>
        </>
    )
}

export default SalesChart
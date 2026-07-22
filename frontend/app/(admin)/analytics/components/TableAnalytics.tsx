"use client"
import { useState, useEffect } from "react"

interface TopProduct {
    id: number;
    productName: string;
    image: string;
    category: string;
    price: number;
    stock: number;
    unitsSold: number;
    totalRevenue: number;
    status: string;
}

const TableAnalytics = () => {
    const [products, setProducts] = useState<TopProduct[]>([])

    useEffect(() => {
        const fetchAnalytics = async () => {
            const token = localStorage.getItem("token")
            if (!token) return
            try {
                const res = await fetch("http://localhost:8080/api/v1/analytics/dashboard", {
                    headers: { "Authorization": `Bearer ${token}` }
                })
                const data = await res.json()
                if (data.data && data.data.topProducts) {
                    setProducts(data.data.topProducts)
                }
            } catch (error) {
                console.error("Failed to fetch analytics", error)
            }
        }
        fetchAnalytics()
    }, [])

    const getStatusStyle = (status: string) => {
        if (status === "In Stock") return "bg-green-50 text-green-700"
        if (status === "Low Stock") return "bg-yellow-50 text-yellow-700"
        if (status === "Critical Stock") return "bg-orange-50 text-orange-700"
        if (status === "Out of Stock") return "bg-red-50 text-red-600"
        return "bg-surface-container-low text-secondary"
    }

    const PLACEHOLDER_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%23e8eaf6'/%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-size='20' fill='%239fa8da'%3E📦%3C/text%3E%3C/svg%3E"

    return (
        <>
            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden">
                <div className="px-8 py-6 border-b border-outline-variant/20 flex justify-between items-center">
                    <h3 className="font-headline-sm text-headline-sm text-primary">Top Performing Products</h3>
                    <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-surface-container-low rounded-lg border border-outline-variant/40">
                            <span className="material-symbols-outlined text-[20px]" data-icon="filter_list">filter_list</span>
                        </button>
                        <button className="p-2 hover:bg-surface-container-low rounded-lg border border-outline-variant/40">
                            <span className="material-symbols-outlined text-[20px]" data-icon="download">download</span>
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-surface-container-low/50 font-label-md text-label-md text-secondary border-b border-outline-variant/10">
                            <tr>
                                <th className="px-8 py-4 font-semibold">PRODUCT DETAILS</th>
                                <th className="px-8 py-4 font-semibold">CATEGORY</th>
                                <th className="px-8 py-4 font-semibold">PRICE</th>
                                <th className="px-8 py-4 font-semibold text-center">UNITS SOLD</th>
                                <th className="px-8 py-4 font-semibold text-right">REVENUE</th>
                                <th className="px-8 py-4 font-semibold text-right">STATUS</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/10">
                            {products.length > 0 ? (
                                products.map((product) => (
                                    <tr key={product.id} className="hover:bg-surface-container-low/30 transition-colors group">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center space-x-4">
                                                <div className="h-12 w-12 rounded-lg bg-surface-container-highest overflow-hidden border border-outline-variant/20 flex-shrink-0">
                                                    <img 
                                                        className="w-full h-full object-cover" 
                                                        alt={product.productName} 
                                                        src={product.image || PLACEHOLDER_IMG}
                                                        onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMG }}
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-label-md text-label-md text-primary group-hover:text-surface-tint">{product.productName}</p>
                                                    <p className="font-label-sm text-label-sm text-secondary opacity-70">ID: PRD-{product.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <span className="px-3 py-1 bg-surface-container-low rounded-full font-label-sm text-label-sm text-secondary">
                                                {product.category || "Uncategorized"}
                                            </span>
                                        </td>
                                        <td className="px-8 py-5 font-body-sm text-body-sm text-primary">
                                            ${product.price.toLocaleString("id-ID")}
                                        </td>
                                        <td className="px-8 py-5 text-center font-body-sm text-body-sm text-primary">
                                            {product.unitsSold.toLocaleString("id-ID")}
                                        </td>
                                        <td className="px-8 py-5 text-right font-body-sm text-body-sm text-primary font-bold">
                                            ${product.totalRevenue.toLocaleString("id-ID")}
                                        </td>
                                        <td className="px-8 py-5 text-right">
                                            <span className={`px-3 py-1 rounded-full font-label-sm text-label-sm ${getStatusStyle(product.status)}`}>
                                                {product.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="px-8 py-10 text-center text-secondary font-label-md">
                                        No top products found. Wait for some orders!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="px-8 py-4 bg-surface-container-low/20 flex justify-between items-center font-label-sm text-label-sm text-secondary">
                    <span>Showing 1-{products.length} of {products.length} top products</span>
                    <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 rounded border border-outline-variant/50 hover:bg-surface-container-low">Prev</button>
                        <button className="px-3 py-1 rounded border border-outline-variant/50 bg-primary text-on-primary">1</button>
                        <button className="px-3 py-1 rounded border border-outline-variant/50 hover:bg-surface-container-low">Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TableAnalytics
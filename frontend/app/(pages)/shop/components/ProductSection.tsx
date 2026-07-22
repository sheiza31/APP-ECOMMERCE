"use client"
import { useEffect, useState } from "react"
import { Package } from "lucide-react"
import Link from "next/link"

interface ProductVariant {
    image: string
}

interface Product {
    ID: number
    name: string
    price: number
    stock: number
    ProductsVariants?: ProductVariant[]
}

interface BestSeller extends Product {
    soldCount: number
}

function getProductImage(product: Product): string {
    const image = product.ProductsVariants?.find(v => v.image && v.image !== "")?.image ?? ""
    if (image && !image.startsWith("http")) {
        return `http://localhost:8080${image}`
    }
    return image
}

const ProductSection = () => {
    const [bestSellers, setBestSellers] = useState<BestSeller[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchBestSellers = async () => {
            try {
                // Hitung best seller dari order items — produk yang paling banyak dipesan
                const token = localStorage.getItem("token")
                const headers: HeadersInit = {}
                if (token) headers["Authorization"] = `Bearer ${token}`

                const [ordersRes, productsRes] = await Promise.all([
                    fetch("http://localhost:8080/api/v1/order", { headers }).catch(() => null),
                    fetch("http://localhost:8080/api/v1/product")
                ])

                const productsData = await productsRes.json()
                const allProducts: Product[] = Array.isArray(productsData.data) ? productsData.data : []

                // Hitung frekuensi setiap produk di order items
                const soldMap: Record<number, number> = {}

                if (ordersRes && ordersRes.ok) {
                    const ordersData = await ordersRes.json()
                    const orders = Array.isArray(ordersData.data) ? ordersData.data : []
                    orders.forEach((order: any) => {
                        const items = order.OrderItems || []
                        items.forEach((item: any) => {
                            const pid = item.ProductID || item.product_id
                            if (pid) soldMap[pid] = (soldMap[pid] || 0) + (item.Quantity || item.quantity || 1)
                        })
                    })
                }

                // Sort produk berdasarkan sold count, ambil top 4
                const ranked: BestSeller[] = allProducts
                    .map(p => ({ ...p, soldCount: soldMap[p.ID] || 0 }))
                    .sort((a, b) => b.soldCount - a.soldCount)
                    .slice(0, 4)

                setBestSellers(ranked)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }

        fetchBestSellers()
    }, [])

    return (
        <>
            <section className="py-section-gap bg-surface-container-low w-full">
                <div className="px-margin-desktop max-w-container-max mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-display-lg text-display-lg text-primary mb-4">Best Sellers</h2>
                        <p className="font-body-md text-body-md text-secondary max-w-lg mx-auto">Our most-loved pieces, chosen by you. Minimalist staples for the discerning eye.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
                        {loading ? (
                            Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="flex flex-col gap-3 animate-pulse">
                                    <div className="aspect-square rounded-lg bg-surface-container" />
                                    <div className="h-4 bg-surface-container rounded w-3/4" />
                                    <div className="h-3 bg-surface-container rounded w-1/3" />
                                </div>
                            ))
                        ) : bestSellers.length === 0 ? (
                            <div className="col-span-4 flex flex-col items-center justify-center py-20 text-center">
                                <Package className="text-outline-variant mb-4" size={64} strokeWidth={1} />
                                <p className="font-body-md text-secondary">No products available yet.</p>
                            </div>
                        ) : bestSellers.map((product) => {
                            const image = getProductImage(product)
                            return (
                                <Link href="/collections" key={product.ID} className="group relative flex flex-col">
                                    <div className="aspect-square rounded-lg overflow-hidden mb-stack-md bg-surface-container-lowest shadow-sm relative">
                                        {image ? (
                                            <img
                                                src={image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-surface-container">
                                                <Package className="text-outline-variant" size={48} strokeWidth={1} />
                                            </div>
                                        )}
                                        <button className="absolute inset-x-stack-md bottom-stack-md py-3 bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-md text-label-md rounded shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                            Quick View
                                        </button>
                                        {product.soldCount > 0 && (
                                            <span className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                                {product.soldCount} sold
                                            </span>
                                        )}
                                    </div>
                                    <h4 className="font-headline-sm text-headline-sm text-primary line-clamp-1">{product.name}</h4>
                                    <p className="font-label-md text-label-md text-secondary">${product.price?.toFixed(2)}</p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductSection
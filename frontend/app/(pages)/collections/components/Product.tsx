"use client"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Heart, Package } from "lucide-react"
import { useFilter } from "../context/FilterContext"

interface ProductVariant {
    id: number
    color: string
    size: string
    price: number
    stock: number
    image: string
    sku: string
}

interface Product {
    ID: number
    name: string
    slug: string
    description: string
    price: number
    category_id: number
    ProductsVariants: ProductVariant[]
}

const ITEMS_PER_PAGE = 6

// Resolve a product image: prefer variant images, fallback to placeholder
function getProductImage(product: Product): string {
    const variantWithImage = product.ProductsVariants?.find(v => v.image && v.image !== "")
    return variantWithImage?.image ?? ""
}

// Get unique colors for a product from its variants
function getProductColors(product: Product): string[] {
    const colors = product.ProductsVariants?.map(v => v.color).filter(Boolean) ?? []
    return [...new Set(colors)]
}

// Map color name → hex
const COLOR_HEX: Record<string, string> = {
    black: "#131b2e",
    white: "#f2f3ff",
    slate: "#545f73",
    stone: "#8d9092",
    charcoal: "#26292b",
    navy: "#1e2d5a",
    beige: "#c8b99a",
    grey: "#9e9e9e",
    red: "#c0392b",
    green: "#27ae60",
}

const Product = () => {
    const { selectedColors, selectedCategoryIDs, sortOrder } = useFilter()
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            setCurrentPage(1)
            try {
                const params = new URLSearchParams()

                // Category filter — send first selected category (API supports single category_id)
                if (selectedCategoryIDs.length > 0) {
                    params.set("category_id", String(selectedCategoryIDs[0]))
                }

                // Color filter — send first selected color; multi-color is filtered client-side below
                if (selectedColors.length > 0) {
                    params.set("color", selectedColors[0])
                }

                if (sortOrder !== "default") {
                    params.set("sort", sortOrder)
                }


                const url = `http://localhost:8080/api/v1/product${params.toString() ? "?" + params.toString() : ""}`
                const res = await fetch(url, {
                    headers: { "Authorization": `Bearer ${token}` },
                })
                const data = await res.json()
                let fetched: Product[] = data.data ?? []

                // Client-side: filter additional selected colors (if > 1 color selected)
                if (selectedColors.length > 1) {
                    fetched = fetched.filter(p =>
                        p.ProductsVariants?.some(v =>
                            selectedColors.includes(v.color?.toLowerCase() ?? "")
                        )
                    )
                }

                // Client-side: filter additional selected categories (if > 1 selected)
                if (selectedCategoryIDs.length > 1) {
                    fetched = fetched.filter(p => selectedCategoryIDs.includes(p.category_id))
                }

                setProducts(fetched)
            } catch (err) {
                console.error("Failed to fetch products", err)
                setProducts([])
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [selectedColors, selectedCategoryIDs, sortOrder])

    const totalPages = Math.max(1, Math.ceil(products.length / ITEMS_PER_PAGE))
    const paginated = products.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page)
    }

    // Loading skeleton
    if (loading) {
        return (
            <div className="flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="bg-white overflow-hidden rounded-lg animate-pulse">
                            <div className="aspect-[4/5] bg-surface-container-low" />
                            <div className="pt-stack-md space-y-2 px-2 pb-4">
                                <div className="h-4 bg-surface-container-low rounded w-3/4" />
                                <div className="h-4 bg-surface-container-low rounded w-1/3" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    // Empty state
    if (products.length === 0) {
        return (
            <div className="flex-grow flex flex-col items-center justify-center py-20 text-center">
                <Package className="text-outline-variant mb-4" size={64} strokeWidth={1} />
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">No products found</h3>
                <p className="font-body-md text-body-md text-secondary max-w-xs">
                    Coba ubah filter atau hapus beberapa filter untuk melihat lebih banyak produk.
                </p>
            </div>
        )
    }

    return (
        <>
            <div className="flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
                    {paginated.map((product) => {
                        const image = getProductImage(product)
                        const colors = getProductColors(product)
                        const displayPrice = product.price

                        return (
                            <div key={product.ID} className="product-card group cursor-pointer bg-white overflow-hidden rounded-lg">
                                <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low">
                                    {image ? (
                                        <img
                                            className="product-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            src={image}
                                            alt={product.name}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-surface-container">
                                            <Package className="text-outline-variant" size={48} strokeWidth={1} />
                                        </div>
                                    )}
                                    <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm hover:bg-white">
                                        <Heart color="black" size={20} />
                                    </button>
                                </div>
                                <div className="pt-stack-md px-1 pb-2">
                                    <h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors line-clamp-1">
                                        {product.name}
                                    </h4>
                                    <div className="flex justify-between items-center mt-2">
                                        <p className="font-body-md text-body-md font-semibold text-primary">
                                            ${displayPrice.toFixed(2)}
                                        </p>
                                        <div className="flex gap-1">
                                            {colors.map((color) => {
                                                const hex = COLOR_HEX[color.toLowerCase()] ?? color
                                                return (
                                                    <div
                                                        key={color}
                                                        title={color}
                                                        className="w-3 h-3 rounded-full border border-outline-variant/30"
                                                        style={{ backgroundColor: hex }}
                                                    />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-section-gap flex justify-center items-center gap-4">
                    <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-lg text-secondary hover:text-primary hover:border-primary transition-all">
                        <span className="material-symbols-outlined"><ChevronLeft /></span>
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-lg font-label-md text-label-md">1</button>
                    <button className="w-10 h-10 flex items-center justify-center border border-
                    outline-variant rounded-lg text-secondary hover:text-primary hover:border-primary transition-all font-label-md text-label-md">2</button>
                    <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-lg text-secondary hover:text-primary hover:border-primary transition-all font-label-md text-label-md">3</button>
                    <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-lg text-secondary hover:text-primary hover:border-primary transition-all">
                        <span className="material-symbols-outlined"><ChevronRight /></span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Product
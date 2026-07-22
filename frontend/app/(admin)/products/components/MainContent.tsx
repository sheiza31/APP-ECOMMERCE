"use client"
import { ChevronRight, ChevronLeft, Trash, Edit2, X, Plus, Upload, Image as ImageIcon } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

interface Category {
    ID: number
    name: string
    slug: string
    description: string
}

interface ProductVariant {
    id?: number
    name: string
    sku: string
    price: number
    stock: number
    image: string
    color: string
    size: string
    imageFile?: File | null
    imagePreview?: string
    isNew?: boolean
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

const PRESET_COLORS = ["Black", "White", "Slate", "Stone", "Charcoal", "Navy", "Beige", "Grey", "Red", "Green"]
const PRESET_SIZES = ["XS", "S", "M", "L", "XL", "XXL"]

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

const MainContent = () => {
    const searchParams = useSearchParams()
    const search = searchParams?.get("search") || ""
    const [loading, isLoading] = useState<boolean>(false)
    const [products, setProducts] = useState<Product[]>([])
    const [categories, setCategories] = useState<Category[]>([])

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingProduct, setEditingProduct] = useState<Product | null>(null)

    // Form fields - Product details
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [categoryId, setCategoryId] = useState("")

    const [variants, setVariants] = useState<ProductVariant[]>([])
    const [deletedVariantIds, setDeletedVariantIds] = useState<number[]>([])

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5

    // Fetch products and categories
    const fetchData = async () => {
        const token = localStorage.getItem("token")
        isLoading(true)
        try {
            // Fetch categories first to map category IDs to names
            const catRes = await fetch("http://localhost:8080/api/v1/category", {
                headers: { "Authorization": `Bearer ${token}` }
            })
            const catData = await catRes.json()
            setCategories(catData.data || [])

            // Fetch products
            const prodRes = await fetch("http://localhost:8080/api/v1/product", {
                headers: { "Authorization": `Bearer ${token}` }
            })
            const prodData = await prodRes.json()
            setProducts(prodData.data || [])
        } catch (error) {
            console.error("Error fetching data:", error)
        } finally {
            isLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    // Open modal for creating a new product
    const handleAddProduct = () => {
        setEditingProduct(null)
        setName("")
        setDescription("")
        setPrice("")
        setCategoryId(categories[0]?.ID ? String(categories[0].ID) : "")
        setVariants([])
        setDeletedVariantIds([])
        setIsModalOpen(true)
    }

    // Open modal for editing an existing product
    const handleEditProduct = (product: Product) => {
        setEditingProduct(product)
        setName(product.name)
        setDescription(product.description)
        setPrice(String(product.price))
        setCategoryId(String(product.category_id))
        setDeletedVariantIds([])

        // Load existing variants, transforming the image path to preview URLs
        const mappedVariants = (product.ProductsVariants || []).map(v => ({
            ...v,
            imagePreview: v.image ? (v.image.startsWith("http") ? v.image : `http://localhost:8080${v.image}`) : "",
            isNew: false
        }))
        setVariants(mappedVariants)
        setIsModalOpen(true)
    }

    // Add empty variant row
    const handleAddVariantRow = () => {
        const newVariant: ProductVariant = {
            name: "",
            sku: `SKU-${Date.now()}-${variants.length + 1}`,
            price: price ? parseFloat(price) : 0,
            stock: 10,
            image: "",
            color: "White",
            size: "M",
            isNew: true,
            imagePreview: "",
            imageFile: null
        }
        setVariants([...variants, newVariant])
    }

    // Remove variant row
    const handleRemoveVariantRow = (index: number) => {
        const variantToRemove = variants[index]
        if (variantToRemove.id && !variantToRemove.isNew) {
            setDeletedVariantIds([...deletedVariantIds, variantToRemove.id])
        }
        setVariants(variants.filter((_, i) => i !== index))
    }

    // Update variant field state
    const handleVariantChange = (index: number, field: keyof ProductVariant, value: any) => {
        const updated = [...variants]
        updated[index] = {
            ...updated[index],
            [field]: value
        }
        setVariants(updated)
    }

    // Handle variant image file selection
    const handleFileChange = (index: number, file: File | null) => {
        if (!file) return
        const updated = [...variants]
        updated[index].imageFile = file
        updated[index].imagePreview = URL.createObjectURL(file)
        setVariants(updated)
    }

    // Delete product action
    const handleDeleteProduct = async (id: number) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "This will delete the product, all of its variants, and associated images!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })

        if (result.isConfirmed) {
            const token = localStorage.getItem("token")
            try {
                const res = await fetch(`http://localhost:8080/api/v1/product/${id}`, {
                    method: "DELETE",
                    headers: { "Authorization": `Bearer ${token}` }
                })
                if (res.ok) {
                    Swal.fire("Deleted!", "Product has been successfully deleted.", "success")
                    fetchData()
                } else {
                    Swal.fire("Failed!", "Could not delete product.", "error")
                }
            } catch (error) {
                console.error("Delete error:", error)
                Swal.fire("Error!", "An error occurred while deleting.", "error")
            }
        }
    }

    // Form submission (Add or Update)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const token = localStorage.getItem("token")
        if (!token) {
            Swal.fire("Authentication Error", "You must be logged in as admin.", "error")
            return
        }

        if (!name.trim() || !price || !categoryId) {
            Swal.fire("Missing Fields", "Please enter product name, category, and base price.", "warning")
            return
        }

        // Validate variants
        for (const variant of variants) {
            if (!variant.sku.trim() || !variant.name.trim()) {
                Swal.fire("Invalid Variant", "All variants must have a name and SKU.", "warning")
                return
            }
        }

        isLoading(true)
        try {
            let productId = editingProduct?.ID

            // 1. Create or Update Product details
            if (editingProduct) {
                const res = await fetch(`http://localhost:8080/api/v1/product/${editingProduct.ID}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        name,
                        description,
                        price: parseFloat(price),
                        category_id: parseInt(categoryId)
                    })
                })
                if (!res.ok) throw new Error("Failed to update base product details.")
            } else {
                const res = await fetch("http://localhost:8080/api/v1/product", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        name,
                        description,
                        price: parseFloat(price),
                        category_id: parseInt(categoryId)
                    })
                })
                if (!res.ok) throw new Error("Failed to create product.")
                const data = await res.json()
                productId = data.data.ID
            }

            // 2. Handle deleted variants
            if (editingProduct && deletedVariantIds.length > 0) {
                for (const vid of deletedVariantIds) {
                    await fetch(`http://localhost:8080/api/v1/product-variant/${vid}`, {
                        method: "DELETE",
                        headers: { "Authorization": `Bearer ${token}` }
                    })
                }
            }

            // 3. Create or Update Product Variants using Multipart Form-Data
            for (const v of variants) {
                const formData = new FormData()
                formData.append("product_id", String(productId))
                formData.append("name", v.name)
                formData.append("sku", v.sku)
                formData.append("price", String(v.price))
                formData.append("stock", String(v.stock))
                formData.append("color", v.color)
                formData.append("size", v.size)

                if (v.imageFile) {
                    formData.append("image_file", v.imageFile)
                } else if (v.image) {
                    formData.append("image", v.image)
                }

                if (v.id && !v.isNew) {
                    // Update variant
                    const res = await fetch(`http://localhost:8080/api/v1/product-variant/${v.id}`, {
                        method: "PUT",
                        headers: { "Authorization": `Bearer ${token}` },
                        body: formData
                    })
                    if (!res.ok) throw new Error(`Failed to update variant: ${v.sku}`)
                } else {
                    // Create new variant
                    const res = await fetch("http://localhost:8080/api/v1/product-variant", {
                        method: "POST",
                        headers: { "Authorization": `Bearer ${token}` },
                        body: formData
                    })
                    if (!res.ok) throw new Error(`Failed to create variant: ${v.sku}`)
                }
            }

            Swal.fire("Success", editingProduct ? "Product has been updated!" : "Product has been created!", "success")
            setIsModalOpen(false)
            fetchData()
        } catch (error: any) {
            console.error(error)
            Swal.fire("Error", error.message || "An error occurred during submission.", "error")
        } finally {
            isLoading(false)
        }
    }

    // Client-side filtering and pagination
    const filteredProducts = products.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase()) || 
        item.description.toLowerCase().includes(search.toLowerCase())
    )
    const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

    return (
        <>
            <div className="flex justify-end mb-6">
                <button
                    onClick={handleAddProduct}
                    className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-label-md text-label-md rounded-xl hover:bg-primary-hover shadow-sm transition-all duration-200"
                >
                    <Plus size={18} />
                    Add Product
                </button>
            </div>

            <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface-container-low/50">
                                <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant border-b border-outline-variant/10">Image</th>
                                <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant border-b border-outline-variant/10">Product</th>
                                <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant border-b border-outline-variant/10">Category</th>
                                <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant border-b border-outline-variant/10">Base Price</th>
                                <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant border-b border-outline-variant/10">Variants</th>
                                <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant border-b border-outline-variant/10 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/10">
                            {paginatedProducts.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-on-surface-variant">
                                        No products found. Add a new product to get started.
                                    </td>
                                </tr>
                            ) : (
                                paginatedProducts.map((item) => {
                                    // Find first variant image to display in table
                                    const variantWithImg = item.ProductsVariants?.find(v => v.image && v.image !== "")
                                    const imgUrl = variantWithImg?.image ? (variantWithImg.image.startsWith("http") ? variantWithImg.image : `http://localhost:8080${variantWithImg.image}`) : ""
                                    const categoryName = categories.find(c => c.ID === item.category_id)?.name || `Category ${item.category_id}`

                                    return (
                                        <tr key={item.ID} className="group hover:bg-surface-container-low transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="w-12 h-12 rounded-lg overflow-hidden bg-surface-container flex items-center justify-center border border-outline-variant/10">
                                                    {imgUrl ? (
                                                        <img src={imgUrl} alt={item.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <ImageIcon size={20} className="text-on-surface-variant" />
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <span className="font-headline-sm text-headline-sm text-primary font-semibold">{item.name}</span>
                                                    <span className="text-[11px] text-on-surface-variant line-clamp-1">{item.slug}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="px-2.5 py-1 text-xs bg-surface-container-high rounded-full text-primary font-medium">
                                                    {categoryName}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-primary">
                                                ${item.price?.toFixed(2)}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-body-sm font-medium text-primary">
                                                        {item.ProductsVariants?.length || 0} variant(s)
                                                    </span>
                                                    <div className="flex gap-1 flex-wrap">
                                                        {(item.ProductsVariants || []).map((v, i) => {
                                                            const hex = COLOR_HEX[v.color?.toLowerCase()] || "#cccccc"
                                                            return (
                                                                <span 
                                                                    key={i} 
                                                                    className="w-3.5 h-3.5 rounded-full border border-outline-variant/20 inline-block shadow-sm"
                                                                    style={{ backgroundColor: hex }}
                                                                    title={`${v.name} (${v.color} - ${v.size})`}
                                                                />
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <div className="flex justify-center gap-2">
                                                    <button
                                                        onClick={() => handleEditProduct(item)}
                                                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-all"
                                                        title="Edit Product"
                                                    >
                                                        <Edit2 size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteProduct(item.ID)}
                                                        className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-all"
                                                        title="Delete Product"
                                                    >
                                                        <Trash size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            )}
                        </tbody>
                    </table>
                </div>

                {totalPages > 1 && (
                    <div className="px-6 py-4 border-t border-outline-variant/10 flex justify-center gap-4 items-center bg-white">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 border border-outline-variant/30 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-50"
                        >
                            <ChevronLeft />
                        </button>
                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                <button
                                    key={pageNum}
                                    onClick={() => setCurrentPage(pageNum)}
                                    className={`w-10 h-10 rounded-lg font-label-md transition-colors ${currentPage === pageNum ? "bg-primary text-white" : "hover:bg-surface-container-highest text-on-surface-variant"}`}
                                >
                                    {pageNum}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 border border-outline-variant/30 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-50"
                        >
                            <ChevronRight />
                        </button>
                    </div>
                )}
            </div>

            {/* Modal for Product Add / Edit */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative border border-outline-variant/10 animate-in fade-in zoom-in duration-200">
                        
                        {/* Close button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-6 right-6 p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-all"
                        >
                            <X size={20} />
                        </button>

                        <h3 className="font-headline-md text-headline-md text-primary mb-6 font-bold">
                            {editingProduct ? "Edit Product Details" : "Create New Product"}
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Product basic details */}
                            <div className="bg-surface-container-low/30 p-5 rounded-2xl border border-outline-variant/10 space-y-4">
                                <h4 className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">Product Info</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                    <div className="md:col-span-2">
                                        <label className="block text-xs font-medium text-secondary mb-1">Product Name</label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="e.g. Silk Linen Overcoat"
                                            className="w-full rounded-xl border border-outline-variant/50 px-4 py-2.5 bg-white text-primary outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-secondary mb-1">Base Price ($)</label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                            placeholder="129.99"
                                            className="w-full rounded-xl border border-outline-variant/50 px-4 py-2.5 bg-white text-primary outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                    <div className="md:col-span-1">
                                        <label className="block text-xs font-medium text-secondary mb-1">Category</label>
                                        <select
                                            value={categoryId}
                                            onChange={(e) => setCategoryId(e.target.value)}
                                            className="w-full rounded-xl border border-outline-variant/50 px-4 py-2.5 bg-white text-primary outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md"
                                            required
                                        >
                                            <option value="" disabled>Select Category</option>
                                            {categories.map(c => (
                                                <option key={c.ID} value={c.ID}>{c.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-xs font-medium text-secondary mb-1">Description</label>
                                        <textarea
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            placeholder="Introduce the item, materials used, fitting, etc."
                                            rows={2}
                                            className="w-full rounded-xl border border-outline-variant/50 px-4 py-2.5 bg-white text-primary outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Product Variants management */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">Product Variants</h4>
                                    <button
                                        type="button"
                                        onClick={handleAddVariantRow}
                                        className="flex items-center gap-1.5 px-4 py-2 border border-primary/20 hover:bg-primary/5 rounded-xl font-label-md text-label-md text-primary transition-all"
                                    >
                                        <Plus size={16} />
                                        Add Variant
                                    </button>
                                </div>

                                {variants.length === 0 ? (
                                    <div className="border border-dashed border-outline-variant/50 rounded-2xl p-8 text-center text-on-surface-variant text-body-sm">
                                        No variants configured. A product needs at least one variant (e.g. Size M, Color White) to be displayable.
                                    </div>
                                ) : (
                                    <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2">
                                        {variants.map((v, index) => (
                                            <div key={index} className="flex flex-col md:flex-row gap-4 p-4 bg-surface-container-lowest border border-outline-variant/20 rounded-2xl items-center relative hover:shadow-md transition-shadow">
                                                
                                                {/* Variant Image Selector with Preview */}
                                                <div className="flex-shrink-0 w-24 h-24 rounded-xl border border-outline-variant/20 bg-surface-container-low flex flex-col items-center justify-center overflow-hidden relative group cursor-pointer">
                                                    {v.imagePreview ? (
                                                        <img src={v.imagePreview} alt="Variant" className="w-full h-full object-cover" />
                                                    ) : (
                                                        <div className="text-center p-2 flex flex-col items-center gap-1">
                                                            <Upload size={18} className="text-on-surface-variant" />
                                                            <span className="text-[10px] text-on-surface-variant">Image File</span>
                                                        </div>
                                                    )}
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(e) => handleFileChange(index, e.target.files?.[0] || null)}
                                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                                    />
                                                </div>

                                                {/* Variant properties inputs */}
                                                <div className="flex-grow w-full grid grid-cols-2 md:grid-cols-3 gap-3.5">
                                                    <div>
                                                        <label className="block text-[10px] font-medium text-secondary">Variant Name</label>
                                                        <input
                                                            type="text"
                                                            value={v.name}
                                                            onChange={(e) => handleVariantChange(index, "name", e.target.value)}
                                                            placeholder="Red M"
                                                            className="w-full text-xs rounded-lg border border-outline-variant/40 px-2 py-1.5 bg-white text-primary outline-none focus:border-primary"
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[10px] font-medium text-secondary">SKU (Unique)</label>
                                                        <input
                                                            type="text"
                                                            value={v.sku}
                                                            onChange={(e) => handleVariantChange(index, "sku", e.target.value)}
                                                            placeholder="SKU-RED-M"
                                                            className="w-full text-xs rounded-lg border border-outline-variant/40 px-2 py-1.5 bg-white text-primary outline-none focus:border-primary"
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[10px] font-medium text-secondary">Price ($)</label>
                                                        <input
                                                            type="number"
                                                            step="0.01"
                                                            value={v.price}
                                                            onChange={(e) => handleVariantChange(index, "price", parseFloat(e.target.value) || 0)}
                                                            className="w-full text-xs rounded-lg border border-outline-variant/40 px-2 py-1.5 bg-white text-primary outline-none focus:border-primary"
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[10px] font-medium text-secondary">Stock</label>
                                                        <input
                                                            type="number"
                                                            value={v.stock}
                                                            onChange={(e) => handleVariantChange(index, "stock", parseInt(e.target.value) || 0)}
                                                            className="w-full text-xs rounded-lg border border-outline-variant/40 px-2 py-1.5 bg-white text-primary outline-none focus:border-primary"
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[10px] font-medium text-secondary">Color</label>
                                                        <select
                                                            value={v.color}
                                                            onChange={(e) => handleVariantChange(index, "color", e.target.value)}
                                                            className="w-full text-xs rounded-lg border border-outline-variant/40 px-2 py-1.5 bg-white text-primary outline-none focus:border-primary"
                                                        >
                                                            {PRESET_COLORS.map(c => (
                                                                <option key={c} value={c}>{c}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="block text-[10px] font-medium text-secondary">Size</label>
                                                        <select
                                                            value={v.size}
                                                            onChange={(e) => handleVariantChange(index, "size", e.target.value)}
                                                            className="w-full text-xs rounded-lg border border-outline-variant/40 px-2 py-1.5 bg-white text-primary outline-none focus:border-primary"
                                                        >
                                                            {PRESET_SIZES.map(s => (
                                                                <option key={s} value={s}>{s}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>

                                                {/* Remove variant button */}
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveVariantRow(index)}
                                                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-full transition-all"
                                                    title="Remove Variant"
                                                >
                                                    <Trash size={16} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Actions block */}
                            <div className="flex justify-end gap-3 pt-4 border-t border-outline-variant/10">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-5 py-2.5 border border-outline-variant/50 rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-all"
                                    disabled={loading}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2.5 bg-primary text-white font-label-md text-label-md rounded-xl hover:bg-primary-hover shadow-sm transition-all flex items-center justify-center min-w-[100px]"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        editingProduct ? "Save Changes" : "Create Product"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default MainContent
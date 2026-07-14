"use client"
import { ChevronRight, ChevronLeft, Trash, Edit2, X, Check } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"
interface Category {
    ID: number,
    name: string,
    slug: string,
    description: string
}
const MainContent = () => {
    const searchParams = useSearchParams()
    const search = searchParams?.get("search") || ""
    const [loading, isLoading] = useState<boolean>(false)
    const [category, setCategory] = useState<Category[]>([])
    const [editingId, setEditingId] = useState<number | null>(null)
    const [editName, setEditName] = useState("")
    const [editDescription, setEditDescription] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5

    const fetchData = async () => {
        const token = localStorage.getItem("token")
        isLoading(true)
        try {
            const data = await fetch("http://localhost:8080/api/v1/category", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            const response = await data.json()
            setCategory(response.data || [])
            console.log(response)
        } catch (error) {
            console.log(error)
        } finally {
            isLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleDelete = async (id: number) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });
        if (result.isConfirmed) {
        await Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
        });
    }
        const token = localStorage.getItem("token")
        try {
            const data = await fetch(`http://localhost:8080/api/v1/category/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            if (data.ok) {
                fetchData()
            } else {
                Swal.fire({
                    title: "Failed to delete category",
                    text: "Please try again",
                    icon: "error"
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                title: "Error deleting category",
                text: "Please try again",
                icon: "error"
            })
        }
    }

    const handleUpdate = async (id: number) => {
        const token = localStorage.getItem("token")
        try {
            const data = await fetch(`http://localhost:8080/api/v1/category/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    name: editName,
                    description: editDescription
                })
            })
            if (data.ok) {
                setEditingId(null)
                fetchData()
            } else {
                Swal.fire({
                    title: "Failed to update category",
                    text: "Please try again",
                    icon: "error"
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                title: "Error updating category",
                text: "Please try again",
                icon: "error"
            })
        }
    }

    const startEditing = (item: Category) => {
        setEditingId(item.ID)
        setEditName(item.name)
        setEditDescription(item.description)
    }
    return (
        <>
            <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface-container-low/50">
                                <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant border-b border-outline-variant/10">Category</th>
                                <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant border-b border-outline-variant/10">Slug</th>
                                <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant border-b border-outline-variant/10">Description</th>
                                <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant border-b border-outline-variant/10 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/10">
                            {category
                                .filter(item => item.name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase()))
                                .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                                .map((item) => (
                                    <tr key={item.ID} className="group hover:bg-surface-container-low transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                {editingId === item.ID ? (
                                                    <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} className="border rounded px-2 py-1 w-full font-headline-sm text-headline-sm outline-none focus:ring-1 focus:ring-primary" />
                                                ) : (
                                                    <span className="font-headline-sm text-headline-sm text-primary">{item.name}</span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 max-w-xs">
                                            <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">{item.slug}</p>
                                        </td>
                                        <td className="px-6 py-4 max-w-xs">
                                            {editingId === item.ID ? (
                                                <textarea value={editDescription} onChange={(e) => setEditDescription(e.target.value)} className="border rounded px-2 py-1 w-full font-body-sm text-body-sm outline-none focus:ring-1 focus:ring-primary" rows={2} />
                                            ) : (
                                                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">{item.description}</p>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {editingId === item.ID ? (
                                                <div className="flex justify-center gap-2">
                                                    <button onClick={() => handleUpdate(item.ID)} className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-all" title="Save">
                                                        <Check size={18} />
                                                    </button>
                                                    <button onClick={() => setEditingId(null)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-all" title="Cancel">
                                                        <X size={18} />
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex justify-center gap-2">
                                                    <button onClick={() => startEditing(item)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-all" title="Edit">
                                                        <Edit2 size={18} />
                                                    </button>
                                                    <button onClick={() => handleDelete(item.ID)} className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-all" title="Delete">
                                                        <Trash size={18} />
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 border-t border-outline-variant/10 flex justify-center gap-4 items-center bg-white">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 border border-outline-variant/30 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-50">
                        <ChevronLeft />
                    </button>
                    <div className="flex gap-2">
                        {Array.from({ length: Math.ceil(category.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase())).length / itemsPerPage) }, (_, i) => i + 1).map((pageNum) => (
                            <button
                                key={pageNum}
                                onClick={() => setCurrentPage(pageNum)}
                                className={`w-10 h-10 rounded-lg font-label-md transition-colors ${currentPage === pageNum ? "bg-primary text-white" : "hover:bg-surface-container-highest text-on-surface-variant"}`}>
                                {pageNum}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(category.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase())).length / itemsPerPage)))}
                        disabled={currentPage === Math.ceil(category.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase())).length / itemsPerPage) || category.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase())).length === 0}
                        className="px-4 py-2 border border-outline-variant/30 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-50">
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </>
    )
}
export default MainContent
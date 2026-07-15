"use client"
import { ChevronRight, ChevronLeft, Trash, Shield, User as UserIcon } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import Swal from "sweetalert2"

interface User {
    ID: number
    name: string
    email: string
    phone: string
    address: string
    role: string
    avatar: string
}

interface MainContentProps {
    refreshTrigger?: number
}

const MainContent = ({ refreshTrigger }: MainContentProps) => {
    const searchParams = useSearchParams()
    const search = searchParams?.get("search") || ""
    const [loading, setLoading] = useState<boolean>(false)
    const [users, setUsers] = useState<User[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 8

    const fetchData = useCallback(async () => {
        const token = localStorage.getItem("token")
        setLoading(true)
        try {
            const data = await fetch("http://localhost:8080/api/v1/user", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            const response = await data.json()
            setUsers(response.data || [])
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData, refreshTrigger])

    const handleDelete = async (id: number) => {
        const result = await Swal.fire({
            title: "Hapus Customer?",
            text: "Data customer ini akan dihapus permanen dan tidak bisa dikembalikan!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#6366f1",
            cancelButtonColor: "#9ca3af",
            confirmButtonText: "Ya, Hapus!",
            cancelButtonText: "Batal"
        })

        if (!result.isConfirmed) return

        const token = localStorage.getItem("token")
        try {
            const data = await fetch(`http://localhost:8080/api/v1/user/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            if (data.ok) {
                Swal.fire({
                    title: "Dihapus!",
                    text: "Customer berhasil dihapus.",
                    icon: "success",
                    confirmButtonColor: "#6366f1"
                })
                fetchData()
            } else {
                Swal.fire({
                    title: "Gagal",
                    text: "Gagal menghapus customer. Coba lagi.",
                    icon: "error",
                    confirmButtonColor: "#6366f1"
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                title: "Error",
                text: "Terjadi kesalahan saat menghapus.",
                icon: "error",
                confirmButtonColor: "#6366f1"
            })
        }
    }

    // Filter berdasarkan search (nama atau email)
    const filtered = users.filter(item =>
        item.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.email?.toLowerCase().includes(search.toLowerCase()) ||
        item.phone?.toLowerCase().includes(search.toLowerCase())
    )

    const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    const totalPages = Math.ceil(filtered.length / itemsPerPage)

    return (
        <>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                                <th className="px-5 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">ID</th>
                                <th className="px-5 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">Customer</th>
                                <th className="px-5 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">Email</th>
                                <th className="px-5 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">No. Telepon</th>
                                <th className="px-5 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">Alamat</th>
                                <th className="px-5 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">Role</th>
                                <th className="px-5 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {loading ? (
                                <tr>
                                    <td colSpan={7} className="px-5 py-12 text-center">
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
                                            <span className="text-sm text-gray-400">Memuat data...</span>
                                        </div>
                                    </td>
                                </tr>
                            ) : paginated.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="px-5 py-12 text-center">
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                                                <UserIcon size={28} className="text-gray-400" />
                                            </div>
                                            <p className="text-sm text-gray-400 font-medium">
                                                {search ? "Tidak ada customer yang cocok" : "Belum ada data customer"}
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                paginated.map((item) => (
                                    <tr key={item.ID} className="group hover:bg-indigo-50/30 transition-colors">
                                        {/* ID */}
                                        <td className="px-5 py-4">
                                            <span className="inline-flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-bold">
                                                {item.ID}
                                            </span>
                                        </td>

                                        {/* Customer (avatar + nama) */}
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 overflow-hidden">
                                                    {item.avatar ? (
                                                        <img src={`http://localhost:8080${item.avatar}`} alt={item.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        item.name?.charAt(0)?.toUpperCase() || "?"
                                                    )}
                                                </div>
                                                <span className="font-semibold text-sm text-gray-800">{item.name || "-"}</span>
                                            </div>
                                        </td>

                                        {/* Email */}
                                        <td className="px-5 py-4">
                                            <span className="text-sm text-gray-600">{item.email || "-"}</span>
                                        </td>

                                        {/* Phone */}
                                        <td className="px-5 py-4">
                                            <span className="text-sm text-gray-500">{item.phone || "-"}</span>
                                        </td>

                                        {/* Address */}
                                        <td className="px-5 py-4 max-w-[180px]">
                                            <span className="text-sm text-gray-500 line-clamp-1">{item.address || "-"}</span>
                                        </td>

                                        {/* Role badge */}
                                        <td className="px-5 py-4">
                                            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                                                item.role === "admin"
                                                    ? "bg-purple-100 text-purple-700"
                                                    : "bg-green-100 text-green-700"
                                            }`}>
                                                <Shield size={11} />
                                                {item.role === "admin" ? "Admin" : "User"}
                                            </span>
                                        </td>

                                        {/* Actions */}
                                        <td className="px-5 py-4 text-center">
                                            <button
                                                onClick={() => handleDelete(item.ID)}
                                                className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-all hover:scale-105 active:scale-95"
                                                title="Hapus customer"
                                            >
                                                <Trash size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center bg-white">
                        <p className="text-sm text-gray-400">
                            Menampilkan {(currentPage - 1) * itemsPerPage + 1}–{Math.min(currentPage * itemsPerPage, filtered.length)} dari {filtered.length} customer
                        </p>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft size={16} />
                            </button>
                            <div className="flex gap-1">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                    <button
                                        key={pageNum}
                                        onClick={() => setCurrentPage(pageNum)}
                                        className={`w-9 h-9 rounded-lg text-sm font-semibold transition-colors ${
                                            currentPage === pageNum
                                                ? "bg-indigo-600 text-white shadow-md"
                                                : "hover:bg-gray-100 text-gray-600"
                                        }`}
                                    >
                                        {pageNum}
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages || filtered.length === 0}
                                className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
export default MainContent
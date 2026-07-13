"use client"
import { ChevronRight, ChevronLeft, Trash, Edit2, X, Check, Users, Search } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

interface User {
    ID: number
    name: string
    email: string
    role: string
    created_at?: string
}

const MainContent = () => {
    const searchParams = useSearchParams()
    const search = searchParams?.get("search") || ""
    const [loading, isLoading] = useState<boolean>(false)
    const [users, setUsers] = useState<User[]>([])
    const [editingId, setEditingId] = useState<number | null>(null)
    const [editName, setEditName] = useState("")
    const [editEmail, setEditEmail] = useState("")
    const [editRole, setEditRole] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 8

    const fetchData = async () => {
        const token = localStorage.getItem("token")
        isLoading(true)
        try {
            const res = await fetch("http://localhost:8080/api/v1/user", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            const response = await res.json()
            setUsers(response.data || [])
        } catch (error) {
            console.error(error)
        } finally {
            isLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleDelete = async (id: number) => {
        if (!confirm("Apakah Anda yakin ingin menghapus user ini?")) return
        const token = localStorage.getItem("token")
        try {
            const res = await fetch(`http://localhost:8080/api/v1/user/${id}`, {
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            })
            if (res.ok) {
                fetchData()
            } else {
                alert("Gagal menghapus user")
            }
        } catch (error) {
            console.error(error)
            alert("Error menghapus user")
        }
    }

    const handleUpdate = async (id: number) => {
        const token = localStorage.getItem("token")
        try {
            const res = await fetch(`http://localhost:8080/api/v1/user/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ name: editName, email: editEmail, role: editRole })
            })
            if (res.ok) {
                setEditingId(null)
                fetchData()
            } else {
                alert("Gagal mengupdate user")
            }
        } catch (error) {
            console.error(error)
            alert("Error mengupdate user")
        }
    }

    const startEditing = (item: User) => {
        setEditingId(item.ID)
        setEditName(item.name)
        setEditEmail(item.email)
        setEditRole(item.role || "")
    }

    const getRoleBadge = (role: string) => {
        const styles: Record<string, string> = {
            admin: "bg-purple-100 text-purple-700 border border-purple-200",
            user: "bg-blue-100 text-blue-700 border border-blue-200",
            moderator: "bg-amber-100 text-amber-700 border border-amber-200",
        }
        return styles[role?.toLowerCase()] || "bg-gray-100 text-gray-600 border border-gray-200"
    }

    const getAvatar = (name: string) => {
        const initials = name
            ?.split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")
            .toUpperCase() || "?"
        const colors = [
            "bg-indigo-500", "bg-purple-500", "bg-pink-500",
            "bg-sky-500", "bg-emerald-500", "bg-amber-500"
        ]
        const color = colors[name?.charCodeAt(0) % colors.length] || colors[0]
        return { initials, color }
    }

    const filteredUsers = users.filter(
        (u) =>
            u.name?.toLowerCase().includes(search.toLowerCase()) ||
            u.email?.toLowerCase().includes(search.toLowerCase()) ||
            u.role?.toLowerCase().includes(search.toLowerCase())
    )

    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
    const paginated = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    return (
        <>
            <div className="bg-white rounded-2xl shadow-sm border border-outline-variant/10 overflow-hidden">
                {/* Table Header */}
                <div className="px-8 py-5 border-b border-outline-variant/10 flex items-center justify-between bg-gradient-to-r from-slate-50 to-gray-50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center">
                            <Users size={20} className="text-white" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-800">Daftar User</h2>
                            <p className="text-sm text-gray-500">Total {filteredUsers.length} user terdaftar</p>
                        </div>
                    </div>
                </div>

                {/* Loading State */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                        <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
                        <p className="text-sm text-gray-500">Memuat data user...</p>
                    </div>
                ) : paginated.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-3">
                        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                            <Users size={28} className="text-gray-400" />
                        </div>
                        <p className="text-base font-semibold text-gray-600">Tidak ada user ditemukan</p>
                        <p className="text-sm text-gray-400">Coba tambahkan user baru atau ubah pencarian</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50/80">
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                                        User
                                    </th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                                        Email
                                    </th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                                        Role
                                    </th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-center">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {paginated.map((item) => {
                                    const { initials, color } = getAvatar(item.name)
                                    return (
                                        <tr key={item.ID} className="group hover:bg-indigo-50/30 transition-colors">
                                            {/* Name + Avatar */}
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-9 h-9 rounded-full ${color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                                                        {initials}
                                                    </div>
                                                    {editingId === item.ID ? (
                                                        <input
                                                            type="text"
                                                            value={editName}
                                                            onChange={(e) => setEditName(e.target.value)}
                                                            className="border border-indigo-300 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500 w-40"
                                                        />
                                                    ) : (
                                                        <span className="text-sm font-semibold text-gray-800">{item.name}</span>
                                                    )}
                                                </div>
                                            </td>

                                            {/* Email */}
                                            <td className="px-6 py-4">
                                                {editingId === item.ID ? (
                                                    <input
                                                        type="email"
                                                        value={editEmail}
                                                        onChange={(e) => setEditEmail(e.target.value)}
                                                        className="border border-indigo-300 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500 w-48"
                                                    />
                                                ) : (
                                                    <span className="text-sm text-gray-500">{item.email}</span>
                                                )}
                                            </td>

                                            {/* Role */}
                                            <td className="px-6 py-4">
                                                {editingId === item.ID ? (
                                                    <select
                                                        value={editRole}
                                                        onChange={(e) => setEditRole(e.target.value)}
                                                        className="border border-indigo-300 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                                                    >
                                                        <option value="user">User</option>
                                                        <option value="admin">Admin</option>
                                                        <option value="moderator">Moderator</option>
                                                    </select>
                                                ) : (
                                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getRoleBadge(item.role)}`}>
                                                        {item.role || "user"}
                                                    </span>
                                                )}
                                            </td>

                                            {/* Actions */}
                                            <td className="px-6 py-4 text-center">
                                                {editingId === item.ID ? (
                                                    <div className="flex justify-center gap-2">
                                                        <button
                                                            onClick={() => handleUpdate(item.ID)}
                                                            className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all border border-emerald-200"
                                                            title="Simpan"
                                                        >
                                                            <Check size={16} />
                                                        </button>
                                                        <button
                                                            onClick={() => setEditingId(null)}
                                                            className="p-2 text-gray-500 hover:bg-gray-100 rounded-xl transition-all border border-gray-200"
                                                            title="Batal"
                                                        >
                                                            <X size={16} />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <button
                                                            onClick={() => startEditing(item)}
                                                            className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all border border-indigo-200"
                                                            title="Edit"
                                                        >
                                                            <Edit2 size={16} />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(item.ID)}
                                                            className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-all border border-red-200"
                                                            title="Hapus"
                                                        >
                                                            <Trash size={16} />
                                                        </button>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Pagination */}
                {!loading && totalPages > 0 && (
                    <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center bg-white">
                        <span className="text-sm text-gray-500">
                            Menampilkan {((currentPage - 1) * itemsPerPage) + 1}–{Math.min(currentPage * itemsPerPage, filteredUsers.length)} dari {filteredUsers.length} user
                        </span>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-40"
                            >
                                <ChevronLeft size={16} />
                            </button>
                            <div className="flex gap-1">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                    <button
                                        key={pageNum}
                                        onClick={() => setCurrentPage(pageNum)}
                                        className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${currentPage === pageNum
                                            ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                                            : "hover:bg-gray-100 text-gray-600"
                                            }`}
                                    >
                                        {pageNum}
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages || totalPages === 0}
                                className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-40"
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
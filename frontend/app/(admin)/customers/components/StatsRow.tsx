"use client"
import { useState } from "react";
import { UserPlus, Eye, EyeOff, CheckCircle, AlertCircle } from "lucide-react";

interface StatsRowProps {
    onRefresh?: () => void
}

const StatsRow = ({ onRefresh }: StatsRowProps) => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null)

    const showToast = (type: "success" | "error", message: string) => {
        setToast({ type, message })
        setTimeout(() => setToast(null), 3000)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!name || !email || !password) {
            showToast("error", "Semua field wajib diisi")
            return
        }
        const token = localStorage.getItem("token")
        setLoading(true)
        try {
            const res = await fetch("http://localhost:8080/api/v1/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ name, email, password })
            })
            const response = await res.json()
            if (res.ok) {
                showToast("success", "User berhasil ditambahkan!")
                setName("")
                setEmail("")
                setPassword("")
                onRefresh?.()
            } else {
                showToast("error", response.message || "Gagal menambahkan user")
            }
        } catch (error) {
            console.error(error)
            showToast("error", "Terjadi kesalahan koneksi")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {/* Toast Notification */}
            {toast && (
                <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl text-white text-sm font-medium transition-all animate-fade-in
                    ${toast.type === "success" ? "bg-emerald-500" : "bg-red-500"}`}>
                    {toast.type === "success"
                        ? <CheckCircle size={18} />
                        : <AlertCircle size={18} />
                    }
                    {toast.message}
                </div>
            )}

            <div className="mb-stack-lg">
                <div className="bg-white rounded-2xl shadow-sm border border-outline-variant/10 overflow-hidden">
                    {/* Card Header */}
                    <div className="px-8 py-5 border-b border-outline-variant/10 flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-purple-50">
                        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                            <UserPlus size={20} className="text-white" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-800">Tambah User Baru</h2>
                            <p className="text-sm text-gray-500">Isi form di bawah untuk menambahkan user</p>
                        </div>
                    </div>

                    {/* Form Body */}
                    <form onSubmit={handleSubmit} className="px-8 py-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {/* Nama User */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-gray-600">
                                    Nama User <span className="text-red-500">*</span>
                                </label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    placeholder="Contoh: John Doe"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-gray-600">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="user@example.com"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                                />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-gray-600">
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Min. 8 karakter"
                                        className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-12 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end mt-6">
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-md shadow-indigo-200"
                            >
                                {loading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Menyimpan...
                                    </>
                                ) : (
                                    <>
                                        <UserPlus size={16} />
                                        Tambah User
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default StatsRow
"use client"
import { useState } from "react";
import swal from "sweetalert2"
import { FolderPlus, Tag, AlignLeft, Sparkles, RotateCcw } from "lucide-react";

interface StatsRowProps {
    onCategoryCreated?: () => void;
}

const StatsRow = ({ onCategoryCreated }: StatsRowProps) => {
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const resetForm = () => {
        setName("")
        setDescription("")
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const token = localStorage.getItem("token")
        setIsLoading(true)
        try {
            const data = await fetch("http://localhost:8080/api/v1/category", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ name, description })
            })
            const response = await data.json()
            if (data.ok) {
                swal.fire({
                    title: "Berhasil!",
                    text: "Kategori baru berhasil ditambahkan.",
                    icon: "success",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#6366f1"
                })
                resetForm()
                if (onCategoryCreated) onCategoryCreated()
            } else {
                swal.fire({
                    title: "Gagal!",
                    text: response.message || "Gagal membuat kategori. Coba lagi.",
                    icon: "error",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#6366f1"
                })
            }
        } catch (error) {
            console.log(error)
            swal.fire({
                title: "Error!",
                text: "Terjadi kesalahan. Silakan coba lagi.",
                icon: "error",
                confirmButtonText: "OK",
                confirmButtonColor: "#6366f1"
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <div className="mb-stack-lg">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">

                    {/* ── Header gradient ── */}
                    <div className="bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-6 flex items-center gap-3">
                        <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm">
                            <FolderPlus size={20} className="text-white" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white tracking-tight">Tambah Kategori</h2>
                            <p className="text-violet-200 text-sm mt-0.5">Buat kategori produk baru</p>
                        </div>

                        {/* Decorative circles */}
                        <div className="ml-auto flex gap-2 opacity-30 pointer-events-none select-none">
                            <div className="w-12 h-12 rounded-full bg-white/40" />
                            <div className="w-8 h-8 rounded-full bg-white/30 mt-4" />
                        </div>
                    </div>

                    {/* ── Form body ── */}
                    <form onSubmit={handleSubmit} className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Nama Kategori */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-600 flex items-center gap-1.5">
                                    <Tag size={13} className="text-violet-500" />
                                    Nama Kategori
                                    <span className="text-red-500 ml-0.5">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        placeholder="Contoh: Elektronik, Fashion…"
                                        required
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100"
                                    />
                                    {name && (
                                        <span className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-400" />
                                    )}
                                </div>
                                <p className="text-xs text-gray-400">Nama kategori akan menjadi slug otomatis</p>
                            </div>

                            {/* Preview slug */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-600 flex items-center gap-1.5">
                                    <Sparkles size={13} className="text-violet-500" />
                                    Preview Slug
                                </label>
                                <div className="w-full rounded-xl border border-dashed border-gray-200 bg-gray-50/60 px-4 py-3 text-sm font-mono text-gray-400 min-h-[46px] flex items-center">
                                    {name
                                        ? (
                                            <span className="text-violet-600 font-semibold">
                                                {name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}
                                            </span>
                                        )
                                        : <span className="italic">slug akan muncul di sini…</span>
                                    }
                                </div>
                                <p className="text-xs text-gray-400">Digunakan sebagai URL kategori</p>
                            </div>

                            {/* Description — full width */}
                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label className="text-sm font-semibold text-gray-600 flex items-center gap-1.5">
                                    <AlignLeft size={13} className="text-violet-500" />
                                    Deskripsi
                                </label>
                                <div className="relative">
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        rows={4}
                                        placeholder="Tuliskan deskripsi kategori…"
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100 resize-none"
                                    />
                                    <span className="absolute bottom-3 right-4 text-xs text-gray-300 select-none">
                                        {description.length} karakter
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* ── Divider + Actions ── */}
                        <div className="mt-7 pt-5 border-t border-gray-100 flex items-center gap-3">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold shadow-md shadow-violet-200 hover:shadow-lg hover:shadow-violet-300 hover:from-violet-700 hover:to-indigo-700 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed active:scale-95"
                            >
                                {isLoading ? (
                                    <>
                                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                                        Menyimpan…
                                    </>
                                ) : (
                                    <>
                                        <FolderPlus size={16} className="group-hover:scale-110 transition-transform" />
                                        Simpan Kategori
                                    </>
                                )}
                            </button>

                            <button
                                type="button"
                                onClick={resetForm}
                                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 text-gray-500 text-sm font-semibold hover:bg-gray-50 hover:text-gray-700 transition-all duration-200 active:scale-95"
                            >
                                <RotateCcw size={14} />
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default StatsRow
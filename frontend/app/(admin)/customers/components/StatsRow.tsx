"use client"
import { useEffect, useState } from "react";
import swal from "sweetalert2"
import { UserPlus, User, Mail, Lock, Phone, MapPin, Shield } from "lucide-react";

interface StatsRowProps {
    onUserCreated?: () => void;
}

const StatsRow = ({ onUserCreated }: StatsRowProps) => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const [role, setRole] = useState<string>("user")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const resetForm = () => {
        setName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setPhone("")
        setAddress("")
        setRole("user")
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            swal.fire({
                title: "Error!",
                text: "Password dan Confirm Password tidak cocok!",
                icon: "error",
                confirmButtonText: "OK",
                confirmButtonColor: "#6366f1"
            })
            return
        }

        const token = localStorage.getItem("token")
        setIsLoading(true)
        try {
            const data = await fetch("http://localhost:8080/api/v1/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password,
                        confirm_password: confirmPassword,
                        phone,
                        address,
                        role
                    })
                }
            )
            const response = await data.json()
            if (data.ok) {
                swal.fire({
                    title: "Berhasil!",
                    text: "Akun customer berhasil dibuat.",
                    icon: "success",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#6366f1"
                })
                resetForm()
                if (onUserCreated) onUserCreated()
            } else {
                swal.fire({
                    title: "Gagal!",
                    text: response.message || "Gagal membuat akun. Email mungkin sudah terdaftar.",
                    icon: "error",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#6366f1"
                })
            }

        } catch (error) {
            console.log(error)
            swal.fire({
                title: "Error!",
                text: "Terjadi kesalahan. Coba lagi.",
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
                    {/* Header */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6 flex items-center gap-3">
                        <div className="bg-white/20 p-2 rounded-xl">
                            <UserPlus size={22} className="text-white" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white">Tambah Customer</h2>
                            <p className="text-indigo-200 text-sm mt-0.5">Buat akun baru untuk customer</p>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* Nama */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-gray-600 flex items-center gap-1.5">
                                    <User size={14} className="text-indigo-500" />
                                    Nama Lengkap <span className="text-red-500">*</span>
                                </label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    placeholder="Contoh: John Doe"
                                    required
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-gray-600 flex items-center gap-1.5">
                                    <Mail size={14} className="text-indigo-500" />
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Contoh: john@email.com"
                                    required
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                                />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-gray-600 flex items-center gap-1.5">
                                    <Lock size={14} className="text-indigo-500" />
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Min. 6 karakter"
                                    required
                                    minLength={6}
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-gray-600 flex items-center gap-1.5">
                                    <Lock size={14} className="text-indigo-500" />
                                    Konfirmasi Password <span className="text-red-500">*</span>
                                </label>
                                <input
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    type="password"
                                    placeholder="Ulangi password"
                                    required
                                    className={`w-full rounded-xl border bg-gray-50 px-4 py-3 text-sm outline-none transition focus:bg-white focus:ring-2 ${
                                        confirmPassword && confirmPassword !== password
                                            ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                                            : "border-gray-200 focus:border-indigo-400 focus:ring-indigo-100"
                                    }`}
                                />
                                {confirmPassword && confirmPassword !== password && (
                                    <p className="text-xs text-red-500 mt-0.5">Password tidak cocok</p>
                                )}
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-gray-600 flex items-center gap-1.5">
                                    <Phone size={14} className="text-indigo-500" />
                                    No. Telepon
                                </label>
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="tel"
                                    placeholder="Contoh: 08123456789"
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                                />
                            </div>

                            {/* Role */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-gray-600 flex items-center gap-1.5">
                                    <Shield size={14} className="text-indigo-500" />
                                    Role <span className="text-red-500">*</span>
                                </label>
                                <select
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    required
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 cursor-pointer"
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>

                            {/* Address - full width */}
                            <div className="flex flex-col gap-1.5 md:col-span-2">
                                <label className="text-sm font-semibold text-gray-600 flex items-center gap-1.5">
                                    <MapPin size={14} className="text-indigo-500" />
                                    Alamat
                                </label>
                                <textarea
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Masukkan alamat lengkap"
                                    rows={2}
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 resize-none"
                                />
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                <UserPlus size={16} />
                                {isLoading ? "Menyimpan..." : "Buat Akun"}
                            </button>
                            <button
                                type="button"
                                onClick={resetForm}
                                className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition-all"
                            >
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
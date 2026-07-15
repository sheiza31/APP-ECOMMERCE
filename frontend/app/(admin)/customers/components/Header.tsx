"use client"
import { useState, useEffect } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import {Search,Bell,Settings,LogOut,User} from "lucide-react"
const Header = () => {
    const [user, setUser] = useState<{name: string, role: string, avatar: string} | null>(null)
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [searchTerm, setSearchTerm] = useState(searchParams?.get("search") || "")
    const [showDropdown, setShowDropdown] = useState(false)

    const handleLogout = async () => {
        const token = localStorage.getItem("token")
        if (token) {
            try {
                await fetch("http://localhost:8080/api/v1/auth/logout", {
                    method: "POST",
                    headers: { "Authorization": `Bearer ${token}` }
                })
            } catch (error) {
                console.log(error)
            }
        }
        localStorage.removeItem("token")
        router.push("/")
    }

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token")
            if (!token) return
            try {
                const res = await fetch("http://localhost:8080/api/v1/auth/me", {
                    headers: { "Authorization": `Bearer ${token}` }
                })
                const data = await res.json()
                if (data.data) {
                    setUser(data.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchUser()
    }, [])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchTerm(value)
        const params = new URLSearchParams(searchParams?.toString() || "")
        if (value) {
            params.set("search", value)
        } else {
            params.delete("search")
        }
        router.push(pathname + "?" + params.toString())
    }

    return (
        <>
            <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 z-40 bg-surface/80 backdrop-blur-md shadow-md flex justify-between items-center px-gutter">
                <div className="flex items-center flex-1 max-w-xl">
                    <div className="relative w-full group">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"><Search/></span>
                        <input 
                            value={searchTerm}
                            onChange={handleSearch}
                            className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant/30 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-body-sm text-body-sm transition-all" 
                            placeholder="Search categories..." 
                            type="text" 
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="h-8 w-[1px] bg-outline-variant/30 mx-2"></div>
                    <div className="relative">
                        <div 
                            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            <div className="text-right">
                                <p className="font-label-md text-label-md text-primary leading-tight">{user ? user.name : "Loading..."}</p>
                                <p className="font-body-sm text-body-sm text-on-surface-variant opacity-70">{user ? user.role : "..."}</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container overflow-hidden">
                                {user && user.avatar ? (
                                    <img src={`http://localhost:8080${user.avatar}`} alt="Avatar" className="w-full h-full object-cover" />
                                ) : (
                                    <span className="material-symbols-outlined"><User /></span>
                                )}
                            </div>
                        </div>
                        {showDropdown && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 border border-outline-variant/20 z-50">
                                <button 
                                    onClick={handleLogout}
                                    className="w-full text-left px-4 py-2 hover:bg-red-50 transition-colors flex items-center gap-2 text-red-600 font-label-md"
                                >
                                    <span className="material-symbols-outlined text-sm"><LogOut/></span>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
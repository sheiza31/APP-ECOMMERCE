"use client"
import { Search,Bell,Settings, User, LogOut } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const Header = () => {
    const [user, setUser] = useState<{name: string, role: string, avatar: string} | null>(null)
    const [showDropdown, setShowDropdown] = useState(false)
    const router = useRouter()

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

    return (
        <>
            <header className="sticky top-0 z-40  flex justify-between gap-32 items-center px-margin-desktop py-4 bg-surface dark:bg-surface w-full shadow-md">
                <div className="flex items-center gap-8">
                    <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">LUMINA</span> 
                </div>
                <div className="flex items-center gap-6">
                    <button className="text-secondary dark:text-secondary-fixed hover:text-primary transition-colors relative cursor-pointer active:scale-95 duration-200">
                        <span className="material-symbols-outlined"><Bell /></span>
                        <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
                    </button>
                    <button className="text-secondary dark:text-secondary-fixed hover:text-primary transition-colors cursor-pointer active:scale-95 duration-200">
                        <span className="material-symbols-outlined"><Settings /></span>
                    </button>
                    
                    <div className="relative">
                        <div 
                            className="flex items-center gap-3 pl-6 border-l border-outline-variant cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            <div className="text-right">
                                <p className="font-label-md text-primary">{user ? user.name : "Loading..."}</p>
                                <p className="text-[10px] text-secondary uppercase tracking-wider">{user ? user.role : "..."}</p>
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
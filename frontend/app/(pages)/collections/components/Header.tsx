"use client"
import Link from "next/link"
import { Search, Menu, ShoppingBag, User, LogOut, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useCart } from "../../../context/CartContext"

interface UserProfile {
    id: number;
    name: string;
    email: string;
    role: string;
    avatar?: string;
}

const Header = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { totalQuantity } = useCart();
    const [localInput, setLocalInput] = useState(searchParams?.get("search") || "");
    const [openProfile, setOpenProfile] = useState(false);
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem("token");
            if (!token) return;
            try {
                const res = await fetch("http://localhost:8080/api/v1/auth/me", {
                    headers: { "Authorization": `Bearer ${token}` }
                });
                if (res.ok) {
                    const json = await res.json();
                    setProfile(json.data);
                }
            } catch (error) {
                console.error("Failed to fetch profile", error);
            }
        };
        fetchProfile();
    }, []);

    // Sync input with URL when navigating directly to /collections?search=...
    useEffect(() => {
        const keyword = searchParams?.get("search") || ""
        setLocalInput(keyword)
    }, [searchParams])

    // Debounced live search — waits 500ms after user stops typing
    useEffect(() => {
        if (debounceRef.current) clearTimeout(debounceRef.current)
        debounceRef.current = setTimeout(() => {
            const params = new URLSearchParams(searchParams?.toString() || "")
            if (localInput.trim()) {
                params.set("search", localInput.trim())
            } else {
                params.delete("search")
            }
            router.push("/collections?" + params.toString())
        }, 500)
        return () => {
            if (debounceRef.current) clearTimeout(debounceRef.current)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localInput])

    const handleClearSearch = () => {
        setLocalInput("")
    }

    const handleLogout = async () => {
        const data = await fetch("http://localhost:8080/api/v1/auth/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        const response = await data.json()
        if (response.status === 200) {
            localStorage.removeItem("token")
            localStorage.removeItem("role")
            // Hapus cookie role dan token
            document.cookie = "token=; path=/; max-age=0";
            document.cookie = "role=; path=/; max-age=0";
            window.location.href = "/"
        } else {
            alert("Gagal Logout")
        }
    }

    const avatarSrc = profile?.avatar ? `http://localhost:8080${profile.avatar}` : null;

    return (
        <>
            <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-md">
                <nav className="flex justify-between items-center px-margin-desktop h-20 max-w-container-max mx-auto">
                    <div className="flex items-center gap-10">
                        <Link className="font-headline-sm text-headline-sm font-bold tracking-tighter text-primary dark:text-primary-fixed" href="#">LUMINA</Link>
                        <div className="hidden md:flex gap-8">
                            <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors duration-200" href="/shop">Shop</Link>
                            <Link className="font-label-md text-label-md text-primary font-bold border-b-2 border-primary pb-1" href="/collections">Collection</Link>
                            <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors duration-200" href="/sustainability">Sustainability</Link>
                            <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors duration-200" href="/ourstory">Our Story</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden lg:flex items-center bg-surface-container px-4 py-2 rounded-full border border-outline-variant/30 focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/10 transition-all w-64">
                            <Search className="text-secondary mr-2 shrink-0" size={16} />
                            <input
                                value={localInput}
                                onChange={(e) => setLocalInput(e.target.value)}
                                className="bg-transparent border-none focus:ring-0 text-body-sm font-body-sm text-on-surface flex-1 min-w-0 outline-none"
                                placeholder="Search collection..."
                                type="text"
                            />
                            {localInput && (
                                <button
                                    onClick={handleClearSearch}
                                    className="ml-1 text-secondary hover:text-primary transition-colors shrink-0"
                                    type="button"
                                    aria-label="Clear search"
                                >
                                    <X size={14} />
                                </button>
                            )}
                        </div>
                        <div className="relative flex items-center gap-4">
                            <button onClick={() => setOpenProfile(!openProfile)} className="text-primary hover:opacity-70 transition-opacity active:scale-95" data-icon="person">
                                {avatarSrc ? (
                                    <img src={avatarSrc} alt="Avatar" className="w-8 h-8 rounded-full object-cover border-2 border-primary" />
                                ) : (
                                    <User />
                                )}
                            </button>
                            <button onClick={() => router.push("/shipping")} className="relative text-primary hover:opacity-70 transition-opacity active:scale-95" data-icon="shopping_bag">
                                <ShoppingBag />
                                {totalQuantity > 0 && (
                                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white font-bold">{totalQuantity}</span>
                                )}
                            </button>
                            <button className="md:hidden text-primary" data-icon="menu">
                                <Menu />
                            </button>
                        </div>
                        {openProfile && (
                            <div className="absolute mt-10 w-72 top-10 right-20 rounded-xl bg-white shadow-xl border z-50">
                                {/* Profile Header */}
                                <div className="flex items-center gap-3 p-4 border-b">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high shrink-0 flex items-center justify-center border border-outline-variant">
                                        {avatarSrc ? (
                                            <img src={avatarSrc} alt="Avatar" className="w-full h-full object-cover" />
                                        ) : (
                                            <User className="text-primary w-6 h-6" />
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm">
                                            {profile?.name || "Guest"}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {profile?.email || ""}
                                        </p>
                                    </div>
                                </div>

                                {/* Menu */}
                                <Link
                                    href="/profile"
                                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
                                >
                                    <User size={18} />
                                    Profile
                                </Link>

                                <button onClick={handleLogout}
                                    className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition"
                                >
                                    <LogOut size={18} />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
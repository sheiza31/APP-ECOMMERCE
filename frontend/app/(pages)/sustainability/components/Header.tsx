"use client"
import { User, ShoppingBag, Search, LogOut } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { useSustainabilityContext } from "../context/SustainabilityContext";
import { useRouter } from "next/navigation";
const Header = () => {
    const { click, setClick } = useSustainabilityContext()
    const router = useRouter()
    const token = localStorage.getItem("token")
    const handleLogout = async () => {
        const data = await fetch("http://localhost:8080/api/v1/auth/logout", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        const response = await data.json()
        if (response.status === "success") {
            localStorage.removeItem("token")
            localStorage.removeItem("role")
            // Hapus cookie role dan token
            document.cookie = "token=; path=/; max-age=0";
            document.cookie = "role=; path=/; max-age=0";
            router.push("/")
        }

    }
    return (
        <>
            <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-md h-20 transition-all duration-300">
                <nav className="flex justify-between items-center px-margin-desktop h-full max-w-container-max mx-auto">
                    <div className="font-headline-sm text-headline-sm font-bold tracking-tighter text-primary">LUMINA</div>
                    <div className="hidden md:flex items-center gap-stack-lg">
                        <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors duration-200" href="/shop">Shop</Link>
                        <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors duration-200" href="/collections">Collection</Link>
                        <Link className="font-label-md text-label-md text-primary font-bold border-b-2 border-primary pb-1" href="/sustainability">Sustainability</Link>
                        <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors duration-200" href="/ourstory">Our Story</Link>
                    </div>
                    <div className=" relative flex items-center gap-4">
                        <button className="relative text-primary hover:opacity-70 transition-opacity active:scale-95 transition-transform" data-icon="shopping_bag">
                            <Search />
                        </button>
                        <button onClick={() => setClick(!click)} className="text-primary hover:opacity-70 transition-opacity active:scale-95 transition-transform" data-icon="person">
                            <User />
                        </button>
                        <button className="relative text-primary hover:opacity-70 transition-opacity active:scale-95 transition-transform" data-icon="shopping_bag">
                            <ShoppingBag />
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white font-bold">2</span>
                        </button>
                    </div>
                    {click && (
                        <div className="absolute mt-10 w-72 top-10 right-20 rounded-xl bg-white shadow-xl border z-50">
                            {/* Header */}
                            <div className="flex items-center gap-3 p-4 border-b">
                                <Image
                                    src=""
                                    alt="Profile"
                                    width={50}
                                    height={50}
                                    className="rounded-full object-cover"
                                />

                                <div>
                                    <h3 className="font-semibold">
                                        Sheiza
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        seizzafr@gmail.com
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
                </nav>
            </header>
        </>
    )
}

export default Header
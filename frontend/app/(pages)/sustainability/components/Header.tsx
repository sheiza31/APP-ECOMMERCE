"use client"
import { User, ShoppingBag, Search, LogOut } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { useSustainabilityContext } from "../context/SustainabilityContext";
import { useRouter } from "next/navigation";
const Header = () => {
    const { click, setClick } = useSustainabilityContext()
    const router = useRouter()
    const handleLogout = async () => {
        const token = localStorage.getItem("token")
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
                </nav>
            </header>
        </>
    )
}

export default Header
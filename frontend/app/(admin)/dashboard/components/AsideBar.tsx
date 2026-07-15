"use client"
import Link from "next/link"
import { LayoutDashboard,ShoppingBag,Truck,Users,LogOut,HelpCircle,ChartLine,Ad } from "lucide-react"
import { useRouter } from "next/navigation"
const AsideBar = () => {
    const router = useRouter();
    const handleLogout = async ()=>{
        const response = await fetch("http://localhost:8080/api/v1/auth/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        })
        const json = await response.json();
        if (json.status === 200) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            // Hapus cookie role dan token
            document.cookie = "token=; path=/; max-age=0";
            document.cookie = "role=; path=/; max-age=0";
            router.push("/");
        }
    }
    return (
        <>
            <aside className="flex flex-col h-full py-8 px-4 border-r border-outline-variant h-screen w-64 fixed left-0 top-0 bg-surface-container-lowest dark:bg-primary-container z-50">
                <div className="mb-10 px-4">
                    <h1 className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed">LUMINA</h1>
                    <p className="text-secondary dark:text-secondary-fixed-dim text-label-sm">Admin Portal</p>
                </div>
                <nav className="flex-1 space-y-1 overflow-y-auto">
                    <Link className="flex items-center gap-stack-md bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-lg px-4 py-3 transition-all duration-200 ease-in-out" href="/dashboard">
                        <span className="material-symbols-outlined"><LayoutDashboard /></span>
                        <span className="font-label-md text-label-md">Dashboard</span>
                    </Link>
                    <Link className="flex items-center gap-stack-md text-secondary dark:text-secondary-fixed-dim px-4 py-3 hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim transition-all duration-200 ease-in-out" href="/products">
                        <span className="material-symbols-outlined"><ShoppingBag /></span>
                        <span className="font-label-md text-label-md">Products</span>
                    </Link>
                    <Link className="flex items-center gap-stack-md text-secondary dark:text-secondary-fixed-dim px-4 py-3 hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim transition-all duration-200 ease-in-out" href="/customers">
                        <span className="material-symbols-outlined"><Users /></span>
                        <span className="font-label-md text-label-md">Customers</span>
                    </Link>
                    <Link className="flex items-center gap-stack-md text-secondary dark:text-secondary-fixed-dim px-4 py-3 hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim transition-all duration-200 ease-in-out" href="/analytics">
                        <span className="material-symbols-outlined"><ChartLine /></span>
                        <span className="font-label-md text-label-md">Analytics</span>
                    </Link>
                    <Link className="flex items-center gap-stack-md text-secondary dark:text-secondary-fixed-dim px-4 py-3 hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim transition-all duration-200 ease-in-out" href="/categories">
                        <span className="material-symbols-outlined"><Ad /></span>
                        <span className="font-label-md text-label-md">Category</span>
                    </Link>
                </nav>
                <div className="mt-auto pt-6 border-t border-outline-variant px-4 space-y-4">
                    <div className="space-y-1">
                        <Link onClick={handleLogout} className="flex items-center gap-stack-md text-secondary text-label-md py-2 hover:text-error transition-colors" href="#">
                            <span className="material-symbols-outlined"><LogOut /></span>
                            Logout
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default AsideBar
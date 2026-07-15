"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingBag, Users, Settings,ChartArea,CircleQuestionMark,Ad,Package,LogOut, LayoutDashboard} from "lucide-react";
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
            router.push("/");
        }
    }
    return (
        <>
            <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low dark:bg-surface-container-highest shadow-sm flex flex-col py-stack-lg z-50">
                <div className="px-6 mb-10">
                    <h1 className="font-display-lg text-display-lg font-bold tracking-tighter text-primary dark:text-primary-fixed">LUMINA</h1>
                </div>
                <nav className="flex-1 px-4 space-y-1">
                    <Link className="flex items-center px-4 py-3 rounded-lg text-secondary dark:text-secondary-fixed-dim font-medium hover:text-primary dark:hover:text-primary-fixed hover:bg-surface-container-highest transition-all duration-200 group" href="/dashboard">
                        <span className="mr-3"><LayoutDashboard /></span>
                        <span className="font-label-md text-label-md">Dashboard</span>
                    </Link>
                    <Link className="flex items-center px-4 py-3 rounded-lg bg-secondary-container text-secondary dark:text-secondary-fixed-dim font-medium hover:text-primary dark:hover:text-primary-fixed hover:bg-surface-container-highest transition-all duration-200 group" href="/products">
                        <span className="mr-3"><ShoppingBag /></span>
                        <span className="font-label-md text-label-md">Products</span>
                    </Link>
                    <Link className="flex items-center px-4 py-3 rounded-lg text-secondary dark:text-secondary-fixed-dim font-medium hover:text-primary dark:hover:text-primary-fixed hover:bg-surface-container-highest transition-all duration-200 group" href="/customers">
                        <span className="mr-3"><Users /></span>
                        <span className="font-label-md text-label-md">Customers</span>
                    </Link>
                    {/* Active State Logic Applied */}
                    <Link id="analytics" className="flex items-center px-4 py-3 rounded-lg text-secondary dark:text-secondary-fixed-dim font-medium hover:text-primary  dark:hover:text-primary-fixed hover:bg-surface-container-highest transition-all duration-200 group" href="analytics">
                        <span className="mr-3"><ChartArea /></span>
                        <span className="font-label-md text-label-md">Analytics</span>
                    </Link>
                    <Link className="flex items-center px-4 py-3 rounded-lg text-secondary dark:text-secondary-fixed-dim bg-socondary font-medium hover:text-primary dark:hover:text-primary-fixed hover:bg-surface-container-highest transition-all duration-200 group" href="/categories">
                        <span className="mr-3"><Ad /></span>
                        <span className="font-label-md text-label-md">Category</span>
                    </Link>
                </nav>
                <div className="mt-auto px-4 space-y-1">
                    <Link onClick={handleLogout} className="flex items-center gap-stack-md text-secondary text-label-md py-2 hover:text-error transition-colors" href="#">
                        <span className="material-symbols-outlined"><LogOut /></span>
                        Logout
                    </Link>
                </div>
            </aside>
        </>
    )
}
export default AsideBar
"use client";
         
import {useShopContext} from "../context/ShopContext"
import {X,Search,User,Heart,ChevronRight} from "lucide-react"
import Link from "next/link";
const AsideBar = () => {
    const {click, setClick} = useShopContext()
    return (
        <>
            {/* Backdrop */}
            <div className={`${click ? "fixed inset-0 bg-primary/20 backdrop-blur-sm z-50 pointer-events-none opacity-0 overlay-transition" : "hidden"}`} id="sidebar-overlay"></div>
            <aside className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-surface z-50 sidebar-transition shadow-2xl flex flex-col ${click ? "translate-x-0" : "-translate-x-full"}`} id="sidebar">
                <div className="p-6 flex justify-between items-center">
                    <span className="font-display-lg text-headline-md tracking-tighter text-primary">LUMINA</span>
                    <button className="p-2 -mr-2 text-secondary active:opacity-60" onClick={() => setClick(false)}>
                        <span className="material-symbols-outlined"><X /></span>
                    </button>
                </div>
                <div className="px-6 py-2">
                    <div className="relative group">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline"><Search /></span>
                        <input className="w-full bg-surface-container-low border-none rounded-lg py-3 pl-10 pr-4 text-body-sm font-body-sm focus:ring-2 focus:ring-primary/10 transition-all" placeholder="Search our catalog..." type="text" />
                    </div>
                </div>
                <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
                    <div className="space-y-4">
                        <p className="text-label-sm font-label-sm text-outline uppercase tracking-widest">Shop</p>
                        <ul className="space-y-3">
                            <li><Link className="flex items-center justify-between text-on-surface font-semibold font-body-md py-1 group" href="#">All Products <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform"><ChevronRight /></span></Link></li>
                            <li><Link className="flex items-center justify-between text-on-surface font-semibold font-body-md py-1 group" href="#">New Arrivals <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform"><ChevronRight /></span></Link></li>
                            <li><Link className="flex items-center justify-between text-on-surface font-semibold font-body-md py-1 group" href="#">Best Sellers <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform"><ChevronRight /></span></Link></li>
                            <li><Link className="flex items-center justify-between text-on-surface font-semibold font-body-md py-1 group" href="#">Collections <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform"><ChevronRight /></span></Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <p className="text-label-sm font-label-sm text-outline uppercase tracking-widest">Editorial</p>
                        <ul className="space-y-3">
                            <li><Link className="block text-secondary font-medium font-body-md py-1 hover:text-primary transition-colors" href="/ourstory">Our Story</Link></li>
                            <li><Link className="block text-secondary font-medium font-body-md py-1 hover:text-primary transition-colors" href="/sustainability">Sustainability</Link></li>
                        </ul>
                    </div>
                    <div className="pt-6 border-t border-outline-variant space-y-4">
                        <Link className="flex items-center gap-3 text-on-surface font-medium font-body-md py-1" href="/profile">
                            <span className="material-symbols-outlined"><User /></span> Account
                        </Link>
                        <Link className="flex items-center gap-3 text-on-surface font-medium font-body-md py-1" href="#">
                            <span className="material-symbols-outlined"><Heart /></span> Wishlist
                        </Link>
                    </div>
                </nav>
                <div className="p-6 bg-surface-container-low">
                    <p className="text-label-sm font-label-sm text-secondary-container text-on-secondary-container p-4 rounded-lg bg-secondary-container/30">
                        LUMINA Members get free shipping on all orders over $150.
                    </p>
                </div>
            </aside>
        </>
    )
}
export default AsideBar
"use client"
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Users, Settings,ChartArea,CircleQuestionMark,Ad,Package} from "lucide-react";
const AsideBar = () => {
    return (
        <>
            <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low dark:bg-surface-container-highest shadow-sm flex flex-col py-stack-lg z-50">
                <div className="px-6 mb-10">
                    <h1 className="font-display-lg text-display-lg font-bold tracking-tighter text-primary dark:text-primary-fixed">LUMINA</h1>
                </div>
                <nav className="flex-1 px-4 space-y-1">
                    <Link className="flex items-center px-4 py-3 rounded-lg text-secondary dark:text-secondary-fixed-dim font-medium hover:text-primary dark:hover:text-primary-fixed hover:bg-surface-container-highest transition-all duration-200 group" href="#">
                        <span className="mr-3"><Package /></span>
                        <span className="font-label-md text-label-md">Products</span>
                    </Link>
                    <Link className="flex items-center px-4 py-3 rounded-lg text-secondary dark:text-secondary-fixed-dim font-medium hover:text-primary dark:hover:text-primary-fixed hover:bg-surface-container-highest transition-all duration-200 group" href="#">
                        <span className="mr-3"><ShoppingCart /></span>
                        <span className="font-label-md text-label-md">Orders</span>
                    </Link>
                    <Link className="flex items-center px-4 py-3 rounded-lg text-secondary dark:text-secondary-fixed-dim font-medium hover:text-primary dark:hover:text-primary-fixed hover:bg-surface-container-highest transition-all duration-200 group" href="#">
                        <span className="mr-3"><Users /></span>
                        <span className="font-label-md text-label-md">Customers</span>
                    </Link>
                    {/* Active State Logic Applied */}
                    <Link id="analytics" className="flex items-center px-4 py-3 rounded-lg text-secondary dark:text-secondary-fixed-dim font-medium hover:text-primary bg-secondary-container dark:hover:text-primary-fixed hover:bg-surface-container-highest transition-all duration-200 group" href="analytics">
                        <span className="mr-3"><ChartArea /></span>
                        <span className="font-label-md text-label-md">Analytics</span>
                    </Link>
                    <Link className="flex items-center px-4 py-3 rounded-lg text-secondary dark:text-secondary-fixed-dim font-medium hover:text-primary dark:hover:text-primary-fixed hover:bg-surface-container-highest transition-all duration-200 group" href="/categories">
                        <span className="mr-3"><Ad /></span>
                        <span className="font-label-md text-label-md">Category</span>
                    </Link>
                </nav>
                <div className="mt-auto px-4 space-y-1">
                    <Link className="flex items-center px-4 py-3 rounded-lg text-secondary dark:text-secondary-fixed-dim font-medium hover:text-primary dark:hover:text-primary-fixed hover:bg-surface-container-highest transition-all" href="#">
                        <span className="mr-3"><Settings /></span>
                        <span className="font-label-md text-label-md">Settings</span>
                    </Link>
                    <Link className="flex items-center px-4 py-3 rounded-lg text-secondary dark:text-secondary-fixed-dim font-medium hover:text-primary dark:hover:text-primary-fixed hover:bg-surface-container-highest transition-all" href="#">
                        <span className="mr-3"><CircleQuestionMark /></span>
                        <span className="font-label-md text-label-md">Support</span>
                    </Link>
                    <div className="pt-6 px-4">
                        <button className="w-full py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all">
                            View Storefront
                        </button>
                    </div>
                </div>
            </aside>
        </>
    )
}
export default AsideBar
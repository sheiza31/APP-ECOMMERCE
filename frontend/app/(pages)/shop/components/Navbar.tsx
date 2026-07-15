"use client"
import Link from "next/link"
import {Search,ShoppingBag,Menu} from "lucide-react"
import {useShopContext} from "../context/ShopContext"
const Navbar = () => {
    const {click, setClick} = useShopContext()
    return (
        <>
            <nav className="sticky top-0 z-50 flex justify-between items-center px-margin-desktop py-4 w-full bg-surface/90 backdrop-blur-md shadow-md dark:bg-surface-container-low transition-all duration-300 ease-in-out">
                <div className="flex items-center gap-8">
                    <Link className="font-display-lg text-display-lg tracking-tighter text-primary dark:text-primary-fixed" href="/">LUMINA</Link>
                </div>
                <div className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
                    <Link className="font-label-md text-label-md text-secondary dark:text-secondary-fixed-dim hover:text-primary border-b-2 border-black dark:hover:text-primary-fixed transition-colors" href="/shop">SHOP</Link>
                    <Link className="font-label-md text-label-md text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors" href="/sustainability">SUSTAINABILITY</Link>
                    <Link className="font-label-md text-label-md text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors" href="/collections">COLLECTION</Link>
                    <Link className="font-label-md text-label-md text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors" href="/ourstory">OUR STORY</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
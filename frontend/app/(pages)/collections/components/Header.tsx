"use client"
import Link from "next/link"
import {Search,Menu,ShoppingBag,User} from "lucide-react"
import { useState } from "react"
const Header = () => {
    const [localInput, setLocalInput] = useState("");
    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault()
    }
    return (
        <>
            <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-md">
                <nav className="flex justify-between items-center px-margin-desktop h-20 max-w-container-max mx-auto">
                    <div className="flex items-center gap-10">
                        <Link className="font-headline-sm text-headline-sm font-bold tracking-tighter text-primary dark:text-primary-fixed" href="#">LUMINA</Link>
                        <div className="hidden md:flex gap-8">
                            <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors duration-200" href="/shop">Shop</Link>
                            <Link className="font-label-md text-label-md text-primary font-bold border-b-2 border-primary pb-1" href="/collections">Collection</Link>
                            <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors duration-200" href="#">Sustainability</Link>
                            <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors duration-200" href="#">Our Story</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <form onSubmit={handleSearch} action="">
                        <div className="hidden lg:flex items-center bg-surface-container px-4 py-2 rounded-full border border-outline-variant/30">
                            <Search  className="text-secondary mr-2" />
                            <input value={localInput} onChange={(e) => setLocalInput(e.target.value)} className="bg-transparent border-none focus:ring-0 text-body-sm font-body-sm text-on-surface w-48" placeholder="Search collection..." type="text" />
                        </div>
                        </form>
                        <div className="flex items-center gap-4">
                            <button className="text-primary hover:opacity-70 transition-opacity active:scale-95 transition-transform" data-icon="person">
                                <User />
                            </button>
                            <button className="relative text-primary hover:opacity-70 transition-opacity active:scale-95 transition-transform" data-icon="shopping_bag">
                                <ShoppingBag />
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white font-bold">2</span>
                            </button>
                            <button className="md:hidden text-primary" data-icon="menu">
                                <Menu />
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
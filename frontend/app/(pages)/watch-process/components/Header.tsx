import Link from "next/link"
import { Search, ShoppingBag, User } from "lucide-react"
const Header = () => {
    return (
        <>

            <header className="sticky top-0 z-50 flex justify-between items-center px-margin-desktop py-stack-md w-full bg-surface/90 backdrop-blur-md shadow-md">
                <div className="font-display-lg text-display-lg tracking-tighter text-primary">LUMINA</div>
                <nav className="hidden md:flex gap-stack-lg">
                    <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="/shop">Shop</Link>
                    <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="/collections">Collections</Link>
                    <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="/new-arrivals">New Arrivals</Link>
                    <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="/sustainability">Sustainability</Link>
                </nav>
                <div className="flex items-center gap-stack-md">
                    <button className="text-primary hover:opacity-80 transition-opacity"><Search /></button>
                    <button className="text-primary hover:opacity-80 transition-opacity"><ShoppingBag /></button>
                    <button className="text-primary hover:opacity-80 transition-opacity"><User /></button>
                </div>
            </header>
        </>
    )
}
export default Header
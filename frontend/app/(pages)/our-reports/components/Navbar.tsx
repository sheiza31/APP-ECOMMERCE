import {Search,ShoppingBag,User} from "lucide-react"
import Link from "next/link"
const Navbar = () => {
    return (
        <>
            <nav className="sticky top-0 z-50 flex justify-between items-center px-margin-desktop py-stack-md w-full bg-surface/90 backdrop-blur-md shadow-md">
                <div className="font-display-lg text-display-lg tracking-tighter text-primary">LUMINA</div>
                <div className="hidden md:flex gap-stack-lg items-center">
                    <Link className="text-secondary hover:text-primary transition-colors font-label-md text-label-md" href="/shop">Shop</Link>
                    <Link className="text-secondary hover:text-primary transition-colors font-label-md text-label-md" href="/collections">Collections</Link>
                    <Link className="text-secondary hover:text-primary transition-colors font-label-md text-label-md" href="/new-arrivals">New Arrivals</Link>
                    <Link className="text-secondary hover:text-primary transition-colors font-label-md text-label-md" href="/sustainability">Sustainability</Link>
                </div>
            </nav>
        </>
    )
}
export default Navbar
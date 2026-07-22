import { ShoppingBag,User } from "lucide-react"
const Navbar = () => {
    return (
        <>
            <nav className="docked full-width top-0 sticky z-50 bg-surface shadow-md dark:shadow-none">
                <div className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
                    <div className="font-display-lg text-display-lg tracking-tighter text-primary dark:text-primary-fixed-dim">
                        LUMINA
                    </div>
                    <div className="hidden md:flex items-center gap-stack-lg">
                        <a className="text-secondary font-medium hover:text-primary transition-colors duration-200 font-label-md text-label-md" href="/shop">Shop</a>
                        <a className="text-secondary font-medium hover:text-primary transition-colors duration-200 font-label-md text-label-md" href="/collections">Collections</a>
                        <a className="text-secondary font-medium hover:text-primary transition-colors duration-200 font-label-md text-label-md" href="/new-arrivals">New Arrivals</a>
                        <a className="text-secondary font-medium hover:text-primary transition-colors duration-200 font-label-md text-label-md" href="/sustainability">Sustainability</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
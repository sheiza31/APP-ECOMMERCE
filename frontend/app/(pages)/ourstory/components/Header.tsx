const Header = () => {
    return (
        <>
            <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm transition-all duration-300 h-20">
                <nav className="flex justify-between items-center px-margin-desktop h-full max-w-container-max mx-auto">
                    <div className="flex items-center gap-stack-lg">
                        <a className="font-headline-sm text-headline-sm font-bold tracking-tighter text-primary" href="#">LUMINA</a>
                        <div className="hidden md:flex items-center gap-8">
                            <a className="font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="/shop">Shop</a>
                            <a className="font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="/collections">Collection</a>
                            <a className="font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="#">Sustainability</a>
                            <a className="font-label-md text-label-md text-primary font-bold border-b-2 border-primary pb-1" href="/ourstory">Our Story</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-stack-md">
                        <button className="material-symbols-outlined text-primary hover:opacity-70 transition-opacity p-2" data-icon="shopping_bag"></button>
                        <button className="material-symbols-outlined text-primary hover:opacity-70 transition-opacity p-2" data-icon="person"></button>
                        <button className="md:hidden material-symbols-outlined text-primary p-2" data-icon="menu"></button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
const Header = () => {
    return (
        <>
            <header className="fixed top-0 w-full z-50 shadow-md bg-surface flex justify-between items-center px-margin-desktop  mx-auto h-20 glass-header">
                <div className="text-headline-md font-headline-md tracking-tighter font-bold text-primary">LUMINA</div>
                <nav className="hidden md:flex items-center gap-stack-lg">
                    <a className="text-label-md font-label-md text-secondary hover:text-primary transition-colors duration-200 cursor-pointer active:scale-95" href="#">Shop</a>
                    <a className="text-label-md font-label-md text-primary border-b-2 border-primary pb-1 cursor-pointer active:scale-95" href="#">Collections</a>
                    <a className="text-label-md font-label-md text-secondary hover:text-primary transition-colors duration-200 cursor-pointer active:scale-95" href="#">Sustainability</a>
                    <a className="text-label-md font-label-md text-secondary hover:text-primary transition-colors duration-200 cursor-pointer active:scale-95" href="#">Our Story</a>
                </nav>
            </header>
        </>
    )
}
export default Header
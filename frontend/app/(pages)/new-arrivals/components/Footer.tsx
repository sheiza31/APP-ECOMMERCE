const Footer = () => {
    return (
        <>
            <footer className="w-full bg-surface-container-low dark:bg-surface-container-lowest">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg px-margin-desktop py-section-gap max-w-container-max mx-auto">
                    <div className="space-y-stack-md">
                        <div className="text-headline-sm font-headline-sm font-bold text-primary">LUMINA</div>
                        <p className="text-body-sm font-body-sm text-on-surface-variant max-w-xs">
                            Curating a timeless collection of essentials for the modern lifestyle. Quality over quantity, always.
                        </p>
                    </div>
                    <div className="space-y-stack-md">
                        <h4 className="text-label-sm font-label-sm uppercase tracking-wider text-primary">Shop</h4>
                        <ul className="space-y-2">
                            <li><a className="text-body-sm font-body-sm text-on-surface-variant hover:underline cursor-pointer" href="#">New Arrivals</a></li>
                            <li><a className="text-body-sm font-body-sm text-on-surface-variant hover:underline cursor-pointer" href="#">Best Sellers</a></li>
                            <li><a className="text-body-sm font-body-sm text-on-surface-variant hover:underline cursor-pointer" href="#">The Classics</a></li>
                        </ul>
                    </div>
                    <div className="space-y-stack-md">
                        <h4 className="text-label-sm font-label-sm uppercase tracking-wider text-primary">Company</h4>
                        <ul className="space-y-2">
                            <li><a className="text-body-sm font-body-sm text-on-surface-variant hover:underline cursor-pointer" href="#">Our Story</a></li>
                            <li><a className="text-body-sm font-body-sm text-on-surface-variant hover:underline cursor-pointer" href="#">Sustainability</a></li>
                            <li><a className="text-body-sm font-body-sm text-on-surface-variant hover:underline cursor-pointer" href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="space-y-stack-md">
                        <h4 className="text-label-sm font-label-sm uppercase tracking-wider text-primary">Legal</h4>
                        <ul className="space-y-2">
                            <li><a className="text-body-sm font-body-sm text-on-surface-variant hover:underline cursor-pointer" href="#">Privacy Policy</a></li>
                            <li><a className="text-body-sm font-body-sm text-on-surface-variant hover:underline cursor-pointer" href="#">Terms of Service</a></li>
                            <li><a className="text-body-sm font-body-sm text-on-surface-variant hover:underline cursor-pointer" href="#">Shipping &amp; Returns</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-outline-variant px-margin-desktop py-stack-md max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-stack-md">
                    <p className="text-label-sm font-label-sm text-on-surface-variant">© 2024 LUMINA. All rights reserved.</p>
                    <div className="flex items-center gap-stack-md">
                        <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">language</span></a>
                        <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">alternate_email</span></a>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer
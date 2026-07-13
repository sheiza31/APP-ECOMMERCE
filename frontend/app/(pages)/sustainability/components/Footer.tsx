import Link from "next/link"
const Footer = () => {
    return (
        <>
            <footer className="w-full border-t border-outline-variant bg-surface mt-section-gap">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-stack-lg max-w-container-max mx-auto">
                    <div className="col-span-1">
                        <div className="font-headline-sm text-headline-sm font-bold text-primary mb-stack-md">LUMINA</div>
                        <p className="font-body-sm text-body-sm text-secondary">Redefining modern luxury through the lens of radical responsibility.</p>
                    </div>
                    <div>
                        <h4 className="font-label-md text-label-md font-bold mb-stack-md uppercase">Shop</h4>
                        <ul className="space-y-2">
                            <li><Link className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary transition-colors" href="#">New Arrivals</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary transition-colors" href="#">Collection</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary transition-colors" href="#">Sustainability</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-label-md text-label-md font-bold mb-stack-md uppercase">Service</h4>
                        <ul className="space-y-2">
                            <li><Link className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary transition-colors" href="#">Shipping</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary transition-colors" href="#">Returns</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary transition-colors" href="#">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-label-md text-label-md font-bold mb-stack-md uppercase">Follow</h4>
                        <div className="flex gap-stack-md">
                            <Link className="text-secondary hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined" data-icon="language">language</span></Link>
                            <Link className="text-secondary hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined" data-icon="share">share</span></Link>
                        </div>
                    </div>
                </div>
                <div className="border-t border-outline-variant py-stack-md px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-stack-md">
                    <span className="font-body-sm text-body-sm text-secondary">© 2024 LUMINA. All rights reserved.</span>
                    <div className="flex gap-stack-md">
                        <Link className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors" href="#">Privacy</Link>
                        <Link className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors" href="#">Terms</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
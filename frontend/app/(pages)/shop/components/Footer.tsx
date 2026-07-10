import Link from "next/link"
const Footer = () => {
    return (
        <>
            <footer className="w-full px-margin-desktop py-stack-lg flex flex-col md:flex-row justify-between items-start gap-gutter bg-surface-container-lowest dark:bg-primary border-t border-outline-variant dark:border-outline">
                <div className="max-w-xs">
                    <h2 className="font-headline-sm text-headline-sm text-primary dark:text-on-primary mb-4">LUMINA</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container mb-6">Curated design meets mindfulness of everyday, minimalist staples for the modern home.</p>
                    <div className="flex gap-4">
                        <Link className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant hover:bg-primary hover:text-on-primary transition-all duration-300" href="#">
                            <span className="material-symbols-outlined text-sm">share</span>
                        </Link>
                        <Link className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant hover:bg-primary hover:text-on-primary transition-all duration-300" href="#">
                            <span className="material-symbols-outlined text-sm">camera</span>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
                    <div>
                        <h4 className="font-label-md text-label-md text-primary dark:text-on-primary mb-6">Shop</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">All</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">Bestsellers</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">New Arrivals</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">The Collection</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-label-md text-label-md text-primary dark:text-on-primary mb-6">Company</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">About</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">Sustainability</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">Careers</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">Wholesale</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="font-label-md text-label-md text-primary dark:text-on-primary mb-6">Support</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">Contact</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">Shipping &amp; Returns</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">FAQ</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full mt-12 md:mt-24 pt-8 border-t border-outline-variant dark:border-outline flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-container">© 2026 LUMINA. All rights reserved.</p>
                    <div className="flex gap-8">
                        <span className="font-label-sm text-label-sm text-secondary dark:text-on-primary-container">USD ($)</span>
                        <span className="font-label-sm text-label-sm text-secondary dark:text-on-primary-container">English</span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
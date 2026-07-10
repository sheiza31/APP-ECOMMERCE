import Link from "next/link"
const Footer = () => {
    return (
        <>
            <footer className="w-full border-t border-outline-variant bg-surface dark:bg-surface-container-lowest mt-section-gap">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-stack-lg max-w-container-max mx-auto">
                    <div className="col-span-1 md:col-span-1">
                        <Link className="font-headline-sm text-headline-sm font-bold text-primary mb-stack-md block" href="#">LUMINA</Link>
                        <p className="font-body-sm text-body-sm text-secondary">Illuminating the essential with precision and soul.</p>
                    </div>
                    <div className="col-span-1">
                        <h4 className="font-label-md text-label-md text-primary font-semibold mb-stack-md uppercase tracking-wider">Company</h4>
                        <ul className="flex flex-col gap-stack-sm">
                            <li><Link className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary transition-colors" href="#">Our Story</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary transition-colors" href="#">Sustainability</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary transition-colors" href="#">Careers</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary transition-colors" href="#">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h4 className="font-label-md text-label-md text-primary font-semibold mb-stack-md uppercase tracking-wider">Support</h4>
                        <ul className="flex flex-col gap-stack-sm">
                            <li><Link className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary transition-colors" href="#">Shipping</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary transition-colors" href="#">Returns</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary transition-colors" href="#">Privacy</Link></li>
                            <li><Link className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary transition-colors" href="#">Terms</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h4 className="font-label-md text-label-md text-primary font-semibold mb-stack-md uppercase tracking-wider">Connect</h4>
                        <div className="flex gap-stack-md">
                            <Link className="material-symbols-outlined text-secondary hover:text-primary" data-icon="public" href="#"></Link>
                            <Link className="material-symbols-outlined text-secondary hover:text-primary" data-icon="alternate_email" href="#"></Link>
                            <Link className="material-symbols-outlined text-secondary hover:text-primary" data-icon="share" href="#"></Link>
                        </div>
                        <div className="mt-stack-lg">
                            <p className="font-body-sm text-body-sm text-secondary">© 2024 LUMINA. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer
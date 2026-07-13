import Link from "next/link"
const Footer = () => {
    return (
        <>
            <footer className="w-full px-margin-desktop py-stack-lg flex flex-col md:flex-row justify-between items-center gap-stack-md bg-surface-container-lowest border-t border-outline-variant">
                <div className="font-headline-sm text-headline-sm text-primary">LUMINA</div>
                <div className="flex flex-wrap justify-center gap-stack-lg">
                    <Link className="text-on-secondary-container hover:text-primary transition-colors font-body-sm text-body-sm" href="#">Privacy Policy</Link>
                    <Link className="text-on-secondary-container hover:text-primary transition-colors font-body-sm text-body-sm" href="#">Terms of Service</Link>
                    <Link className="text-on-secondary-container hover:text-primary transition-colors font-body-sm text-body-sm" href="#">Shipping &amp; Returns</Link>
                    <Link className="text-on-secondary-container hover:text-primary transition-colors font-body-sm text-body-sm" href="#">Contact Us</Link>
                </div>
                <div className="text-on-secondary-container font-body-sm text-body-sm">
                    © 2024 LUMINA. All rights reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer
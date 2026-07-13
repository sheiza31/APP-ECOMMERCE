import Link from "next/link"
const Footer = () => {
    return (
        <>
            <footer className="w-full px-margin-desktop py-stack-lg flex flex-col md:flex-row justify-between items-center gap-stack-md bg-surface-container-lowest border-t border-outline-variant">
                <div className="font-headline-sm text-headline-sm text-primary">LUMINA</div>
                <div className="flex flex-wrap justify-center gap-stack-md">
                    <Link className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary transition-colors" href="#">Privacy Policy</Link>
                    <Link className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary transition-colors" href="#">Terms of Service</Link>
                    <Link className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary transition-colors" href="#">Shipping &amp; Returns</Link>
                    <Link className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary transition-colors" href="#">Contact Us</Link>
                </div>
                <div className="font-body-sm text-body-sm text-on-surface">© 2024 LUMINA. All rights reserved.</div>
            </footer>
        </>
    )
}
export default Footer
const Footer = () => {
    return (
        <>
            <footer className="mt-auto py-10 px-margin-desktop bg-surface-container-low border-t border-outline-variant">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                            <span className="text-white font-bold text-xs">L</span>
                        </div>
                        <span className="text-primary font-bold text-label-md">LUMINA SYSTEM</span>
                    </div>
                    <div className="flex gap-8">
                        <a className="text-secondary hover:text-primary text-label-sm" href="#">Privacy Policy</a>
                        <a className="text-secondary hover:text-primary text-label-sm" href="#">Terms of Service</a>
                        <a className="text-secondary hover:text-primary text-label-sm" href="#">Status Page</a>
                    </div>
                    <p className="text-outline text-label-sm">© 2023 Lumina Commerce Group. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
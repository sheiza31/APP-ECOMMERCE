import { ChevronDown } from "lucide-react"
const HeaderSection = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-stack-lg">
                <div>
                    <nav className="flex items-center gap-2 mb-4 text-secondary font-body-sm text-body-sm">
                        <a className="hover:text-primary transition-colors" href="#">Home</a>
                        <span>/</span>
                        <span className="text-primary font-medium">All Collections</span>
                    </nav>
                    <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tight">The Autumn Capsule</h1>
                </div>
                <div className="flex items-center gap-4">
                    <span className="font-label-md text-label-md text-secondary">Sort by:</span>
                    <div className="relative group">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors">
                            Newest Arrivals
                            <span className="material-symbols-outlined text-[20px]"><ChevronDown /></span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderSection
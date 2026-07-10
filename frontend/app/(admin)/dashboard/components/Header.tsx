import { Search,Bell,Settings } from "lucide-react"
const Header = () => {
    return (
        <>
            <header className="sticky top-0 z-40 flex justify-between items-center px-margin-desktop py-4 bg-surface dark:bg-surface w-full shadow-md">
                <div className="flex items-center gap-8">
                    <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">LUMINA</span>
                    <div className="relative hidden lg:block">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline"><Search /></span>
                        <input className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full w-64 text-label-md focus:ring-2 focus:ring-primary" placeholder="Search orders, products..." type="text" />
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <button className="text-secondary dark:text-secondary-fixed hover:text-primary transition-colors relative cursor-pointer active:scale-95 duration-200">
                        <span className="material-symbols-outlined"><Bell /></span>
                        <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
                    </button>
                    <button className="text-secondary dark:text-secondary-fixed hover:text-primary transition-colors cursor-pointer active:scale-95 duration-200">
                        <span className="material-symbols-outlined"><Settings /></span>
                    </button>
                    <div className="flex items-center gap-3 pl-6 border-l border-outline-variant">
                        <div className="text-right">
                            <p className="font-label-md text-primary">Admin</p>
                            <p className="text-[10px] text-secondary uppercase tracking-wider">Superuser</p>
                        </div>
                        <img className="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="A professional studio portrait of a modern administrator, soft directional lighting, neutral grey background, high-end commercial aesthetic, sophisticated and reliable mood, wearing professional attire." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlBEOSNOx5NRsVDNMCyQGKlaBPqZBc_qw0cPbRHxXEsOlq9jTtFwj7kCg6dveB28M5wERKXJF-YLTiI29wB610NskksQ1pIkIaFOIHDIgJpXKt4nYyvo933Hp19op2PkE24gjOyfnV8GrLwGuGi2MP_iP1S8VKeX1BaP4CvMrofW2jY3DY3Q7WcxfZI41YNaK3XQITgUsjARnL9hdNHZfb-5QFp-m9BDz8Upy9PXmX0Ht3AfIE6I1jwzC1Z2n0lBnVylTrPim_eys" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
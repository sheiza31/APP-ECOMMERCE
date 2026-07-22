import { ChevronDown } from "lucide-react"
const FiltersSortingSection = () => {
    return (
        <>
            <section className="border-b border-outline-variant bg-surface sticky top-20 z-40">
                <div className="max-w-container-max mx-auto px-margin-desktop py-stack-md flex flex-wrap justify-between items-center gap-stack-md">
                    <div className="flex items-center gap-stack-lg overflow-x-auto no-scrollbar pb-1 md:pb-0">
                        <button className="flex items-center gap-2 text-label-md font-label-md text-on-surface hover:text-primary">
                            Category <span className="material-symbols-outlined text-[18px]"><ChevronDown /></span>
                        </button>
                        <button className="flex items-center gap-2 text-label-md font-label-md text-on-surface hover:text-primary">
                            Size <span className="material-symbols-outlined text-[18px]"><ChevronDown /></span>
                        </button>
                        <button className="flex items-center gap-2 text-label-md font-label-md text-on-surface hover:text-primary">
                            Price <span className="material-symbols-outlined text-[18px]"><ChevronDown /></span>
                        </button>
                        <button className="flex items-center gap-2 text-label-md font-label-md text-on-surface hover:text-primary">
                            Color <span className="material-symbols-outlined text-[18px]"><ChevronDown /></span>
                        </button>
                    </div>
                    <div className="flex items-center gap-2 border-l border-outline-variant pl-stack-lg">
                        <span className="text-label-md font-label-md text-secondary">Sort by:</span>
                        <button className="text-label-md font-label-md text-on-surface flex items-center gap-1">
                            Newest <span className="material-symbols-outlined text-[18px]"><ChevronDown /></span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default FiltersSortingSection
import {Droplets} from "lucide-react"
const Visualizations = () => {
    return (
        <>
            <section className="mb-section-gap py-section-gap bg-surface-container-lowest rounded-xl px-stack-lg">
                <h2 className="font-headline-md text-headline-md text-center mb-section-gap">Impact Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div className="flex flex-col items-center">
                        <div className="relative w-full h-40 flex items-end justify-center mb-stack-md gap-2">
                            <div className="bg-primary-container w-8 h-1/4 animate-bar rounded-t-sm"></div>
                            <div className="bg-primary-container w-8 h-2/4 animate-bar rounded-t-sm" style={{ animationDelay: '0.2s' }}></div>
                            <div className="bg-primary w-8 h-full animate-bar rounded-t-sm" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                        <p className="font-display-lg text-display-lg text-primary">84%</p>
                        <p className="font-label-md text-label-md uppercase text-secondary tracking-widest mt-2">Recycled Materials</p>
                        <p className="font-body-sm text-body-sm text-secondary-fixed-dim mt-2 max-w-xs mx-auto">Increase from 62% in the previous fiscal year through better sourcing.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="relative w-full h-40 flex items-center justify-center mb-stack-md">
                            <svg className="w-32 h-32 transform -rotate-90">
                                <circle className="text-surface-container-highest" cx="64" cy="64" fill="transparent" r="50" stroke="currentColor" stroke-width="12"></circle>
                                <circle className="text-primary" cx="64" cy="64" fill="transparent" r="50" stroke="currentColor" stroke-dasharray="314" stroke-dashoffset="100" stroke-width="12"></circle>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Droplets className="w-10 h-10 text-primary" />
                            </div>
                        </div>
                        <p className="font-display-lg text-display-lg text-primary">-12M</p>
                        <p className="font-label-md text-label-md uppercase text-secondary tracking-widest mt-2">Liters Water Saved</p>
                        <p className="font-body-sm text-body-sm text-secondary-fixed-dim mt-2 max-w-xs mx-auto">Reduction in production water usage via closed-loop dyeing processes.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="relative w-full h-40 flex items-center justify-center mb-stack-md">
                            <div className="flex gap-1 items-end">
                                <div className="w-12 h-20 bg-surface-variant rounded-t-sm"></div>
                                <div className="w-12 h-32 bg-primary rounded-t-sm"></div>
                            </div>
                        </div>
                        <p className="font-display-lg text-display-lg text-primary">92%</p>
                        <p className="font-label-md text-label-md uppercase text-secondary tracking-widest mt-2">Traceable Supply Chain</p>
                        <p className="font-body-sm text-body-sm text-secondary-fixed-dim mt-2 max-w-xs mx-auto">Validated by third-party auditors across all tier 1 and tier 2 suppliers.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Visualizations
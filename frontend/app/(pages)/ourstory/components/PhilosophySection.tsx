const PhilosophySection = () => {
    return (
        <>
            <section className="bg-primary text-surface py-section-gap px-margin-desktop">
                <div className="max-w-container-max mx-auto text-center reveal">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-label-md text-label-md text-primary-fixed uppercase tracking-[0.4em] mb-stack-lg">Our Philosophy</h2>
                        <blockquote className="font-display-lg text-display-lg italic mb-stack-lg leading-tight">"Less, but better."</blockquote>
                        <p className="font-body-lg text-body-lg text-primary-fixed/80 mb-stack-lg">
                            We reject the culture of disposability. In every sketch, solder, and stitch, we adhere to the principle of intentionality. If a feature doesn't serve the function or the aesthetic soul of the piece, it is removed.
                        </p>
                        <div className="flex flex-wrap justify-center gap-12 mt-stack-lg">
                            <div className="flex flex-col items-center gap-stack-sm">
                                <span className="material-symbols-outlined text-4xl" data-icon="eco"></span>
                                <span className="font-label-md text-label-md uppercase tracking-wider">Sustainability</span>
                            </div>
                            <div className="flex flex-col items-center gap-stack-sm">
                                <span className="material-symbols-outlined text-4xl" data-icon="draw"></span>
                                <span className="font-label-md text-label-md uppercase tracking-wider">Precision</span>
                            </div>
                            <div className="flex flex-col items-center gap-stack-sm">
                                <span className="material-symbols-outlined text-4xl" data-icon="history"></span>
                                <span className="font-label-md text-label-md uppercase tracking-wider">Longevity</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PhilosophySection
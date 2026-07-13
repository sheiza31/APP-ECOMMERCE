const CircularFashion = () => {
    return (
        <>
            <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto overflow-hidden">
                <div className="flex flex-col md:flex-row-reverse gap-gutter items-center">
                    <div className="w-full md:w-1/2 reveal">
                        <span className="text-primary font-label-sm uppercase tracking-widest mb-4 block">03 — Longevity</span>
                        <h2 className="font-display-lg text-display-lg mb-stack-md">Circular Fashion</h2>
                        <p className="font-body-md text-body-md text-secondary mb-stack-lg">Fashion should never be final. We design for durability, repairability, and eventual rebirth. LUMINA’s circular initiative ensures that your favorite pieces stay in use, or return to the earth as nutrients.</p>
                        <div className="space-y-6">
                            <div className="p-stack-md border-l-4 border-primary bg-surface-container">
                                <h4 className="font-label-md text-label-md uppercase mb-2">LUMINA Pre-Owned</h4>
                                <p className="font-body-sm text-body-sm">A curated marketplace for our community to trade and resell their authenticated LUMINA pieces.</p>
                            </div>
                            <div className="p-stack-md border-l-4 border-outline-variant bg-surface">
                                <h4 className="font-label-md text-label-md uppercase mb-2">Repair For Life</h4>
                                <p className="font-body-sm text-body-sm">Complimentary repairs on all stitching and hardware for the lifetime of the garment.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 relative reveal">
                        <div className="relative z-10 w-4/5 h-[600px] rounded-xl overflow-hidden shadow-xl">
                            <img className="w-full h-full object-cover" data-alt="A portrait-oriented photo of a high-quality indigo denim jacket being expertly mended with gold thread using an ancient Sashiko technique. The focus is sharp on the needlework and the rich texture of the fabric. The lighting is cinematic, capturing the spirit of longevity and care in circular fashion." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2BgkWcbW6p70GIWtga2BjgHgOAraXNEZx-t-sQp5HSL4HqTqxI3Ow-eoq9tqkQwArFtmE09syb3oCKTLgvKZIEU2XWnmmqHVqXjksIGHG-FGIROvvzac5LKDa3szDCjbdpbA9cDiS9MBzoHvPVs18Ymdzt5oGXHwL7jo-mw8MEc3qJL4ZGofHT0-uGqOivA8ZojWtsMbnPhRao9fY7IBGuMY6VwCWu20Vbs5FQlqMsiywxNY3s2AgPfFhzxNcAxEs781ST6K0RLk" />
                        </div>
                        <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-1/2 h-[350px] bg-secondary-container rounded-xl -z-10 flex items-center justify-center p-stack-lg">
                            <div className="text-primary text-center">
                                <span className="font-display-lg text-display-lg block">98%</span>
                                <span className="font-label-sm uppercase tracking-tighter">Recyclability Rate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CircularFashion
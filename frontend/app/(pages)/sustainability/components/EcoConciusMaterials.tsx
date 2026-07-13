import { CheckCircle } from "lucide-react"
const EcoConciusMaterials = () => {
    return (
        <>
            <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
                <div className="flex flex-col md:flex-row gap-gutter mb-section-gap items-center">
                    <div className="w-full md:w-1/2 reveal">
                        <span className="text-primary font-label-sm uppercase tracking-widest mb-4 block">01 — Ingredients</span>
                        <h2 className="font-display-lg text-display-lg mb-stack-md">Eco-Conscious Materials</h2>
                        <p className="font-body-md text-body-md text-secondary mb-stack-lg max-w-lg">We source only the finest biological and recycled fibers. From regenerative organic cotton to innovative seaweed-based yarns, our materials are selected for their tactile luxury and minimal environmental footprint.</p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-primary mt-1" />
                                <div>
                                    <span className="font-headline-sm text-headline-sm block">Regenerative Organic Cotton</span>
                                    <p className="font-body-sm text-body-sm text-secondary">Restoring soil health and biodiversity with every harvest.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-primary mt-1" />
                                <div>
                                    <span className="font-headline-sm text-headline-sm block">Recycled Tech Fibers</span>
                                    <p className="font-body-sm text-body-sm text-secondary">Giving post-consumer waste a second life through high-precision engineering.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 reveal">
                        <div className="h-[450px] overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <img className="w-full h-full object-cover" data-alt="A close-up, macro photograph of raw, cream-colored organic cotton fibers being woven into a luxury fabric. The lighting is warm and natural, highlighting the intricate texture and purity of the material. The aesthetic is clean, sophisticated, and highlights the tactile quality of the sustainable process." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqSS8XnjiXrvBDUVyBBHXR84dJJxaPIjegT-EpcIxsUu05AtiErSOH4UjxBlnO73VcBNuDlXtfTPfFlBGv2qrgpNhiGFc2gXRtOycN6YDqooe_T5x-JBaG41pX43mEhm9RWPtVEBBSG0Fx8xVrwvZhA7obcF_bE4gp-x1ZFWpGv45PcLZKtd-fFTkTLRu5hXOMV6vgzITu3K1gOmtj4mtfKp16LGaRG40uiBuU0bIoRKdvYSV1TBZMfgJx6SVHpY2p21hmFB3xx0o" />
                        </div>
                        <div className="h-[450px] overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow mt-12">
                            <img className="w-full h-full object-cover" data-alt="A studio shot of various textile swatches in neutral tones—oatmeal, slate, and charcoal—arranged artistically on a minimalist white surface. Soft shadows play across the surfaces, emphasizing the quality and weight of the eco-friendly fabrics. The mood is high-end editorial and modern." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpXEwJdGWKYYD3AJBXWMPXE_dMX4URImtzdbHBCki0JgpIbWCENmLa1HvObnIAgJaw6UoPDCYcT3icNyTlOsN5avY3fNPYAQgB5uw14ZbyvN-Ua5YGRHP-2iDnM8J0GOj5LlLz9F1D_AeNdPHKRsPfMB3zYOd5ulODM_ywa51vZxfzdMmYToejgO7ciHAgAcklZZjbzbDWYzhE8Z9WWpNCKu8C09j65EOXU95KK6ZxinzQ6NNBfjDZ6ENejuIzYAe59QyvS8IU8gk" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default EcoConciusMaterials
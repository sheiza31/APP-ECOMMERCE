import {Truck,Factory} from 'lucide-react';
const Ethical = () => {
    return (
        <>
            <section className="py-section-gap bg-surface-container-low px-margin-desktop">
                <div className="max-w-container-max mx-auto">
                    <div className="text-center mb-section-gap reveal">
                        <span className="text-primary font-label-sm uppercase tracking-widest mb-4 block">02 — The Craft</span>
                        <h2 className="font-display-lg text-display-lg">Ethical Manufacturing</h2>
                    </div>
                    <div className="bento-grid">
                        <div className="col-span-12 md:col-span-7 h-[500px] relative overflow-hidden rounded-xl group reveal">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="An interior shot of a modern, sun-drenched manufacturing studio where master artisans work in a clean, spacious environment. Large windows allow natural light to flood the space, highlighting the precise, human-centric assembly of high-end garments. The atmosphere is calm and respectful, emphasizing ethical labor practices and quality craftsmanship." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5_vvJmc5VsI9OgSAR07f4Los4MsTJWrDzYlkJxwFQRTV7t6ZoIx5fdthw-qgMDKivFWSYPSbiIPduLRJIeCxb9DyBsbsvrc866FSI_Pq1Sk7XX2rGPxfJ-JRJMD0RLY_sDykRcaOgtJYHdbMQxh1Nyz3_ao-7pqvkmB_rkDRX7QwcBk9NkKfd5NHul_dOz3JqxTTparVHY3_FaD_wW0ATUB-dM5T35jjUYi5k_FJOC-ScVLorXOA-hrH_O10tfn7Zk_uTylH3RHI')` }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-stack-lg">
                                <div className="text-white">
                                    <h3 className="font-headline-md text-headline-md mb-2">Our Artisan Collective</h3>
                                    <p className="font-body-sm text-body-sm opacity-80 max-w-md">We partner with family-owned ateliers who share our vision for fair wages and safe working environments.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-5 flex flex-col gap-gutter reveal mt-6">
                            <div className="bg-surface p-stack-lg rounded-xl shadow-sm flex-1 flex flex-col justify-center border border-outline-variant/30">
                                <Factory  className="text-4xl text-primary mb-4" data-icon="factory"/>
                                <h3 className="font-headline-sm text-headline-sm mb-2">100% Traceable</h3>
                                <p className="font-body-sm text-body-sm text-secondary">Every factory in our supply chain is audited annually to ensure the highest social standards are maintained.</p>
                            </div>
                            <div className="bg-primary p-stack-lg rounded-xl shadow-sm flex-1 flex flex-col justify-center text-white">
                                <Truck  className="text-4xl text-surface mb-4" data-icon="local_shipping"/>
                                <h3 className="font-headline-sm text-headline-sm mb-2">Lowered Footprint</h3>
                                <p className="font-body-sm text-body-sm opacity-80">Our logistics network is optimized to reduce transportation emissions by 40% compared to industry standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ethical 
import { ChevronRight } from "lucide-react"
const FeaturedSection = () => {
    
    return (
        <>
            <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-secondary font-label-sm tracking-widest uppercase mb-2 block">Curated Selection</span>
                        <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary">Seasonal Focus</h2>
                    </div>
                    <a className="font-label-md text-label-md text-primary flex items-center gap-2 group" href="#">
                        View All Collections <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">{<ChevronRight />}</span>
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                    <div className="group cursor-pointer">
                        <div className="aspect-[4/5] overflow-hidden rounded-lg mb-stack-md bg-surface-container-low shadow-sm">
                            <div className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700" data-alt="A minimalist fashion photography shot of a woman wearing a heavy-knit oversized cream sweater and tailored wool trousers. She is standing against a textured off-white wall in natural, soft side-lighting. The aesthetic is clean, editorial, and sophisticated, focusing on the texture of the fabric." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1tBCyCmgSgcHNbbfPAFfJGkndwrrQxzCJSTDEgIhEYSE4BYuucgr94IW7BjhfMhhm7-_Z9v8S9o2U45lzKmmYjtPHUeZ_888STNP19QWMuKXuLFWUhj5rjZvOwKt2oUCBLhDrmwT4z7Sobups_f5MtMc4JsvIrLo-5CsGbC1PPUAfdfHlgeS3zj7Y37EOCqP9345tUcL9PPgk_hJ_SG_Pke5arqoJZj46xuoin8ObNApWvKPpxjElwvkNrUUfgYwFI7siUpZ-Uvo')` }}></div>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-primary mb-unit">The Autumn Capsule</h3>
                        <a className="font-body-sm text-body-sm text-secondary group-hover:text-primary transition-colors border-b border-transparent hover:border-primary inline-block" href="#">Explore Pieces</a>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="aspect-[4/5] overflow-hidden rounded-lg mb-stack-md bg-surface-container-low shadow-sm">
                            <div className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700" data-alt="A collection of handcrafted ceramic vessels and plates in matte earth tones arranged artistically on a light oak table. The lighting is soft and diffused, highlighting the organic textures and subtle imperfections of the pottery. Minimalist studio setting with a calm, artisanal atmosphere." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAOlUoXYn-6MK7K8yYKI4Pguedb-Lr7ac2jYIvRId2gSZaDSf_IqPpSdWa6cMLXnleLz01O8zHoJjAfihwyLTPXGDfnx_pLut5Y_Svfs7r0g9PXa_YKM3-S0w-iTBJDPxqEl20EYB-V1rIGUTISYx-yPoAewfO74wAYmKou9WqGc9bEkGVUAWkh-1C9VJXVhj1VnjHPgi_hMqiX8vZrJSz-0OocYTJlX_7OFXurpwpJnTYwr7rIT4QzNMLo8l3zTaPqgznWJKDINu8')` }}></div>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-primary mb-unit">Handcrafted Ceramics</h3>
                        <a className="font-body-sm text-body-sm text-secondary group-hover:text-primary transition-colors border-b border-transparent hover:border-primary inline-block" href="#">Discover Artistry</a>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="aspect-[4/5] overflow-hidden rounded-lg mb-stack-md bg-surface-container-low shadow-sm">
                            <div className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700" data-alt="Close up of high-quality cashmere fabric draped elegantly over a chair. The lighting emphasizes the softness and fine fibers of the material. A neutral color palette of charcoal grey and beige. The shot is high-contrast yet soft, conveying luxury and comfort." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAj2Wf5ene7QEXzSCzH4LB17zKZX8qIPjC6b-90uEdnU0Y1V1luRShlrLq4jzxVqD9fquqKfTrldD6Zf_DnD4KO28eRMLshXCCn5Z0wCE7OOINaXwq5OLW7urvYGh_AqHUo3lm9-JGDu6Oh3bpf7dfevZjfVX080Gf-OkuGHXLdYeDKE-HXyKFhYajCcHC6V-Ylkwcpeu64H3RDpUDjo-4FkJCcet3I336rqwMp9u_Kbio7kLjhM2QsEwTBnvHP0gPdpbR-6BmEFOM')` }}></div>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-primary mb-unit">Pure Cashmere</h3>
                        <a className="font-body-sm text-body-sm text-secondary group-hover:text-primary transition-colors border-b border-transparent hover:border-primary inline-block" href="#">Shop Luxury</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturedSection
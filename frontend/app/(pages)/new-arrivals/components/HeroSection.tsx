'use client'
import { useRouter } from "next/navigation"
const HeroSection = () => {
    const router = useRouter()
    return (
        <>
            <section className="relative w-full h-[819px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-cover bg-center" data-alt="An editorial, high-end fashion photograph of a model in a minimalist urban setting, wearing a sophisticated structured charcoal wool coat. The lighting is soft morning light with cool tones, reflecting a clean, modern aesthetic. The composition is expansive with plenty of whitespace, embodying the luxurious and quiet confidence of the LUMINA brand." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfLIV3NKsjqH0htFtjzOeOE4BahUtUYTt1KZfuAvwPPOyPk44QNLuJk_Hb_2jSBa-QV6B_xK-NSSIpOu5f_lAaqMxT0pobWR6eOh9-MPuwV70m9aL2D1qkVkKfkriTBsGM2_uOTy5pHpvD8O6HstYtWv1bGHIHsl-jdkXD9jy38f2cmke2WHNADLBK537_xW9qXdAzu29dFlSUDvo9jrnC-ZVCZWcRKSe08w4qEPhC10P0BgJV1sT-3rRfve4Rzl5KUxy4-FQ79E8')"}}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-surface/40 to-transparent"></div>
                </div>
                <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full">
                    <div className="max-w-xl scroll-reveal active">
                        <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary mb-stack-sm block">The Winter Edit</span>
                        <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg mb-stack-md text-primary leading-tight">New Arrivals</h1>
                        <p className="text-body-lg font-body-lg text-secondary mb-stack-lg leading-relaxed">
                            Explore our latest arrivals, where timeless design meets modern craftsmanship. A curated selection for the discerning wardrobe.
                        </p>
                        <button onClick={()=>{
                            router.push("/collections")
                        }} className="cursor-pointer bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md hover:bg-primary/90 transition-all shadow-md active:scale-95">
                            Shop the Collection
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
"use client"
import { useRouter } from "next/navigation"
const HeroSection = () => {
    const router = useRouter()
    return (
        <>
            <section className="relative h-[819px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-cover bg-center" data-alt="An editorial, wide-angle shot of a serene, mist-covered coastal landscape with soft, natural textures like sand and weathered wood. The lighting is diffused and ethereal, capturing a high-end minimalist aesthetic. The color palette is composed of muted earth tones, soft beiges, and deep indigo blues, evoking a sense of calm and environmental responsibility." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuATWKJpl0b0zQNbhJ7Zd4XgNjj4fapTYQjpthdvNstMKHtauTod1mdPtmp4a0ROL9hFZPT0D_wudLah8mDiK2ZI-wL-S4Ldf2q5XuncvPFpi0C4aPU2xrNU9cBQtTBYumDrRN_3J3X4K-c8BN8_7U2uMtcn4X41HG-Yn6u3Lcj7rsfTeqEpMKQT1s_AVjGm3GPEeKtqJDiubBqCJx3QMQ64B4VwDLiquZbJtkFt7igquZH3_Q2tUpLjoeblL-mKdd0q9DIRccZN4gQ')` }}></div>
                    <div className="absolute inset-0 bg-primary/20"></div>
                </div>
                <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full">
                    <div className="max-w-2xl text-white">
                        <h1 className="font-display-lg text-display-lg mb-stack-md leading-tight">Radical Transparency. Circular Beauty.</h1>
                        <p className="font-body-lg text-body-lg opacity-90 mb-stack-lg">LUMINA is committed to a future where luxury and responsibility coexist. Every thread is chosen with purpose, and every step is taken with the earth in mind.</p>
                        <div className="flex gap-stack-md">
                            <button onClick={()=>{
                                router.push("/our-reports")
                            }} className="bg-surface text-primary px-8 py-3 rounded-lg font-label-md hover:bg-surface-container-high transition-colors active:scale-95">Our Report</button>
                            <button
                            onClick = {()=>{
                                router.push("/watch-process")
                            }} className="border cusor-pointer border-surface text-surface px-8 py-3 rounded-lg font-label-md hover:bg-surface/10 transition-colors active:scale-95">Watch Our Process</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
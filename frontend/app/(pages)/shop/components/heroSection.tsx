import Link from "next/link"
const HeroSection = () => {
    return (
        <>
            <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" data-alt="A serene and minimalist high-end living room interior with soft sunlight streaming through sheer curtains. The space features clean lines, a neutral color palette of ivory and sand, and a single statement piece of organic-shaped wooden furniture. The atmosphere is sophisticated and calm, emphasizing a luxury lifestyle aesthetic with high-key lighting." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3rniz4EU-Kn8SlWaN_9pGRFbfOP9gbzpT59vm8dPdToidddkV7B44uo3L911qWiDOnWma83E2LlB4BcIqEsaP3bQdDU4TP_jAniMNcr0UxGhGc954AABCnMbyWfHxflEWWWteAGSxv9_ey-GCMdHMw3LUGZuq6euLGRHrxYz4I9b8YCYRul8FKmqL6g6zoZLJCddgqdwY5WfH7j2sNJaOYturW0FpQMvRNB7QfHYeSKIxpY1bJvrrldoE-EhPo_9jm87LnTL3UWk')` }}>
                    <div className="absolute inset-0 hero-gradient"></div>
                </div>
                <div className="relative h-full flex flex-col items-center justify-center text-center px-margin-mobile md:px-margin-desktop text-on-primary">
                    <h1 className="font-display-lg text-display-lg md:text-[64px] mb-6 animate-fade-in tracking-tight">Elevate Your Essentials</h1>
                    <p className="font-body-lg text-body-lg max-w-2xl mb-10 opacity-90">Curated design meets mindfulness of everyday. Discover a modern collection of essentials for the body and today's lifestyle.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="#" className="px-10 py-4 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary/90 transition-all shadow-lg active:scale-95" >SHOP NEW ARRIVALS</Link>
                        <Link href="/ourstory" className="px-10 py-4 border border-on-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-on-primary hover:text-primary transition-all backdrop-blur-sm" >OUR STORY</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
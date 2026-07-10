const HeroSection = () => {
    return (
        <>
            <section className="relative h-[921px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 scale-105" data-alt="A cinematic, wide-angle monochromatic photograph of a minimalist architectural structure in San Francisco. The lighting is soft and directional, casting long, elegant shadows against a pristine white concrete facade. The composition is clean and editorial, reflecting a high-end luxury brand aesthetic with vast open space and a sense of quiet sophistication. The atmosphere is calm, modern, and intentionally understated." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0HkyrWeu0aj7z1cplvp5BG1dzZ2h4i8xUjECVGFTUpO0rrrsN6n6f17ksf0m-HfOMk30faggxyL9FCUpOFPNPwpl4o_EiqQfk8p4jJDwhVXS9xm1UcGSZCvpuhUi0iwRYgSOka01-NJRcROG3I5dyLlcORSPlRRwt7I3qpzu4GjFYLepbEINa73aU-NDEiGGxO-bySNuPOicsEKY5_s-LA2APicqOc26WiXTz1ZIBMEZevUSEMTA0zOpLCqARfApCFypXJszYd3U')` }}></div>
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                <div className="relative z-10 text-center px-margin-desktop max-w-4xl">
                    <span className="font-label-md text-label-md text-surface uppercase tracking-[0.3em] mb-stack-md block reveal">Since 2014</span>
                    <h1 className="font-display-lg text-display-lg md:text-display-lg text-surface mb-stack-lg reveal">The pursuit of essential light.</h1>
                    <p className="font-body-lg text-body-lg text-surface/90 max-w-2xl mx-auto reveal">Lumina was founded on a singular premise: that the objects we surround ourselves with should possess an enduring soul and a quiet purpose.</p>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <span className="material-symbols-outlined text-surface">expand_more</span>
                </div>
            </section>

        </>
    )
}
export default HeroSection
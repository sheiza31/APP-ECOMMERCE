const IntroSection = () => {
    return (
        <>
            <section className="relative w-full aspect-video md:h-[819px] bg-primary overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-cover bg-center opacity-80" data-alt="A cinematic, wide-angle interior shot of a high-end atelier with soft daylight streaming through large windows. Artisans are visible in the background working with precision tools and premium materials. The scene is bathed in a sophisticated palette of deep indigo, slate grays, and warm wood tones, creating a mood of calm and focused craftsmanship. The lighting is editorial and high-contrast, emphasizing the textures of stone and metal." 
                    style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCGnK1Em-mHS3rGJVy0XMFwfzC8zhtLkNM4Wz1soCk21zHoV1x8WlgDsGM4DZSmfvRTmVABNqzJmKLOZbyGEHw4yiWXpq3L0CvM4sBK7VRKHcmdxBvtyXgilG85I1jENT-oexIJ_ejqyUBghf8T1mjUOkSMENiJps-bzZyowfbvIlxTeIvMNDh21RVIXydKMMWL_Ym7fPHSqP5BG0wr-lKet7-gMF8zN-ORC66h9srQXgLW9QhpbuCF6SXJv0loQkxAzaYHAHVZJ8')`}}></div>
                    <div className="absolute inset-0 video-overlay-gradient"></div>
                </div>
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-margin-desktop">
                    <span className="font-label-sm text-label-sm text-primary-fixed bg-primary-container px-3 py-1 rounded-full mb-stack-md tracking-widest uppercase">The Process</span>
                    <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary max-w-2xl mb-stack-lg">Artistry in Every Detail</h1>
                    <button className="group flex items-center gap-stack-sm bg-on-primary text-primary px-8 py-4 rounded-lg font-label-md text-label-md hover:bg-primary-fixed transition-all duration-300">
                        <span className="material-symbols-outlined" style={{fontVariationSettings: 'FILL 1`'}}>play_arrow</span>
                        Watch the Film
                    </button>
                </div>
            </section>
        </>
    )
}
export default IntroSection
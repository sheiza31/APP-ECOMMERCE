import Image from "next/image"
const HeritageSection = () => {
    return (
        <>
            <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
                    <div className="md:col-span-5 mb-stack-lg md:mb-0 reveal">
                        <h2 className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-stack-md">The Heritage</h2>
                        <h3 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-stack-lg leading-tight">Born in the fog of San Francisco.</h3>
                        <p className="font-body-md text-body-md text-secondary mb-stack-md leading-relaxed">
                            In a small studio tucked away in the Dogpatch district, Lumina began as an experiment in light and form. Inspired by the shifting atmospheric conditions of Northern California—where the Pacific fog meets city architecture—our founder sought to capture that ephemeral quality in tangible objects.
                        </p>
                        <p className="font-body-md text-body-md text-secondary leading-relaxed">
                            What started as a single custom pendant has evolved into a global design house, yet our heart remains tethered to the craftsmanship and pioneering spirit of the San Francisco design community.
                        </p>
                    </div>
                    <div className="md:col-span-6 md:col-start-7 reveal">
                        <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-md group">
                            <Image width = {2000} height = {2000}className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700" alt="A moody, soft-toned photograph of a classic San Francisco workshop interior. Dust motes dance in single beams of afternoon sunlight hitting a worn wooden workbench. Various brass and glass prototypes are scattered artistically across the surface. The style is deeply atmospheric and editorial, emphasizing textures like aged wood and polished metal. The color palette is warm neutral with deep, soft blacks."
                             src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAKYbxLOm-fxxw8WJGX1kVdSXHPhmgOfpZKUT4AQFyfFvnPHrvdAVdwCCLbl5REwv7mjjMeD4co6m8uIf5o2d9zR_nhWg8XTs7zRKHyzlZzIFuBwTteRArZCVjRVMBs9Vbms-lzxhJBh0A730Ki8ibtnm3W0iAzCReX_ZzWsyUflG9o13FjoZr_0T1vqlllc9QtXY_FKs0zl0VP7DaN1FgAJYrR_h2GdOUF2JVs2ZjADjLKb76n8AOtIpyD_g6BT13CNR9YAlNpDU" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeritageSection
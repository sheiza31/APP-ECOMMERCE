const StoryTelling = () => {
    return (
        <>
            <section className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap step-line">
                <div className="grid md:grid-cols-2 gap-gutter items-center mb-section-gap relative">
                    <div className="order-2 md:order-1">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-on-primary mb-stack-md font-bold shadow-lg">01</div>
                        <h3 className="font-headline-md text-headline-md mb-stack-md text-primary">Ethical Sourcing</h3>
                        <p className="font-body-md text-body-md text-secondary mb-stack-lg leading-relaxed">
                            The journey begins at the source. We partner exclusively with certified ethical suppliers who share our commitment to environmental stewardship. From reclaimed precious metals to responsibly harvested minerals, every raw component is vetted for its impact.
                        </p>
                        <div className="flex flex-wrap gap-stack-sm">
                            <span className="px-3 py-1 bg-surface-container-low text-secondary font-label-sm text-label-sm rounded-full">Recycled Gold</span>
                            <span className="px-3 py-1 bg-surface-container-low text-secondary font-label-sm text-label-sm rounded-full">Traceable Stones</span>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg aspect-square md:aspect-[4/5]">
                        <img className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" data-alt="A close-up, macro photograph of raw, ethically sourced precious metal grains and unpolished gemstones resting on a textured linen cloth. The lighting is soft and natural, emphasizing the organic shapes and shimmering textures. The color palette is neutral with muted earth tones and subtle metallic glints. A minimalist, sophisticated aesthetic that feels clean and high-end."
                         src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiBeoPcn3_8JV7OjJPbiZibUkg-T4SjhkjU3Bf0-nBk0xfCGd7r2l_mWwDTTPvKuUFRm0wa5L44b5KUH9J4qB5cr0CKva6X7ntcKy8jszHlymQm6IiFrfMs3ZTkNqUCQd1hLX4G8XwcOiMvnncMZLNSt-n7uVD0RLePHEyH2U7CPTKDBEVkh9BXI3YXjoH4oa_IEalN56IIGaGseTSuXDLyGowqJYqZ2ZEGV2we5BCfUtN_j8AM3VdWvYSfH8VL0GlVIkZOoGig1M" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-gutter items-center mb-section-gap relative">
                    <div className="rounded-xl overflow-hidden shadow-lg aspect-square md:aspect-[4/5]">
                        <img className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" data-alt="An overhead flat-lay of a designer's workstation featuring precision drafting tools, a high-resolution digital tablet displaying a 3D wireframe of a minimalist jewelry piece, and hand-drawn sketches. The environment is a clean, white-toned modern studio with subtle indigo accents. The mood is one of creative precision and technological innovation. The lighting is bright and professional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCubppsAMfK9lezmEJsE5EoJBIMEiYre7knMBkeZIsfH-m4sU8-z13nz06_EQtnOsvTVM08XUtapqplFpwa_on_YbGN5FijM8ppYEf81iT8_abqZYe0yENHCz9vbCm-X42dj031sF2ekM3ezNx_zsxFsjisGGLKLd45xWP0vtkBXLqgzmVWr1WktxFWniDCHB-6TZPjdQamtHzrEk6gp4f1uWKRF8n5fxqDd0rwmntt57XM4jnxRRSBgSoJCXuY4-LfGqrU9FnnMcY" />
                    </div>
                    <div className="md:pl-stack-lg">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-on-primary mb-stack-md font-bold shadow-lg">02</div>
                        <h3 className="font-headline-md text-headline-md mb-stack-md text-primary">Generative Design</h3>
                        <p className="font-body-md text-body-md text-secondary mb-stack-lg leading-relaxed">
                            Our design studio is where mathematics meets aesthetics. We use advanced generative algorithms to explore structural possibilities that human hands alone couldn't conceive, optimizing for both beauty and structural integrity.
                        </p>
                        <div className="flex flex-wrap gap-stack-sm">
                            <span className="px-3 py-1 bg-surface-container-low text-secondary font-label-sm text-label-sm rounded-full">3D Simulation</span>
                            <span className="px-3 py-1 bg-surface-container-low text-secondary font-label-sm text-label-sm rounded-full">Parametric Forms</span>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-gutter items-center mb-section-gap relative">
                    <div className="order-2 md:order-1">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-on-primary mb-stack-md font-bold shadow-lg">03</div>
                        <h3 className="font-headline-md text-headline-md mb-stack-md text-primary">Master Craftsmanship</h3>
                        <p className="font-body-md text-body-md text-secondary mb-stack-lg leading-relaxed">
                            Technology provides the blueprint, but human hands provide the soul. Our master artisans hand-finish every piece in our local atelier, spending hours polishing, setting, and refining surfaces to achieve our signature matte and mirror finishes.
                        </p>
                        <div className="flex flex-wrap gap-stack-sm">
                            <span className="px-3 py-1 bg-surface-container-low text-secondary font-label-sm text-label-sm rounded-full">Hand-Polished</span>
                            <span className="px-3 py-1 bg-surface-container-low text-secondary font-label-sm text-label-sm rounded-full">Artisan Made</span>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg aspect-square md:aspect-[4/5]">
                        <img className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" data-alt="A focused close-up of an artisan's weathered hands carefully polishing a sleek, geometric indigo-colored object with a soft cloth. Fine dust particles are caught in a single beam of dramatic sunlight. The background is a dark, out-of-focus workshop. The image conveys a deep sense of focus, expertise, and the intimate connection between maker and object. High contrast and cinematic lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1cA7h3ZZ7a-LkFFgzVAt_kWrFUGmcGK02GvKCZUkI4ykWwZiNJg1Gih2kzPZlcC_mDywNVw0FmSne3KAwipzcV_8d-DXaseLD-3ceekaaX3gZiZIfsxb__oSJXh4IKEItaSFDySRe-wC5LdYMTGOb8FlLYBs9liVWu4lAmnWCkC4F0o9AdWT4ZqkF39WiWhq693PnJWKg5ejlxEsbxhI73jbBfeVUhrlutHNxnTPmy8ONC0txtM8bflTvGGMELttXUf6Z5qoQOOQ" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-gutter items-center relative">
                    <div className="rounded-xl overflow-hidden shadow-lg aspect-square md:aspect-[4/5]">
                        <img className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" data-alt="A high-tech quality control lab setting. A minimalist piece of hardware is placed under a precise inspection lens under bright, clinical white light. The image shows a digital screen in the background with a green 'Pass' indicator. The aesthetic is extremely clean, sterile, and technologically advanced, using a palette of white, silver, and the brand's primary indigo. Sharp focus on the object's flawless surface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_AXWFwZ7paZiZ7yHBdbUjmKaD0m2h-TAX6wu_PgDUJvBMxZPX7BkN7fcZ58Fzmdne2N2pDnprM9RHNC8IN6mWomiqIx2039Pmx191OB-P7McTLDZRD15A4q9UBoKOQWbGxrNQ1UXnSb--qOm5OPU7vFUurk5Tn8bnHQNodzkWCym3pvcgV8g5N8kjVIKlahyOn6VELfOylHok8Uf2HrAGb8HXL_DgK-X8yBtbpLWMbtsrxwqX_Nr0uafwzbSXKAiOVn8NH9J9ic0" />
                    </div>
                    <div className="md:pl-stack-lg">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-on-primary mb-stack-md font-bold shadow-lg">04</div>
                        <h3 className="font-headline-md text-headline-md mb-stack-md text-primary">Pristine Verification</h3>
                        <p className="font-body-md text-body-md text-secondary mb-stack-lg leading-relaxed">
                            No product leaves our studio without passing a rigorous 12-point inspection. We use microscopic imaging and stress-testing to ensure that every Lumina piece is not just beautiful today, but built to become an heirloom for tomorrow.
                        </p>
                        <div className="flex flex-wrap gap-stack-sm">
                            <span className="px-3 py-1 bg-surface-container-low text-secondary font-label-sm text-label-sm rounded-full">12-Point Check</span>
                            <span className="px-3 py-1 bg-surface-container-low text-secondary font-label-sm text-label-sm rounded-full">Heirloom Grade</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default StoryTelling
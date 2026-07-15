const ProductSection = () => {
    return (
        <>
            <section className="max-w-container-max mx-auto px-margin-desktop py-section-gap">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                    <div className="product-card group cursor-pointer scroll-reveal active">
                        <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low mb-stack-md rounded-lg shadow-sm">
                            <div className="absolute top-4 left-4 z-20 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-label-sm uppercase tracking-wider">New</div>
                            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A studio shot of a luxurious, oversized Merino Wool Coat in a soft camel color. The coat is draped elegantly on a minimalist mannequin against a clean, warm-toned gray background. The lighting highlights the fine texture of the wool, conveying warmth and premium quality." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApR70SXnX6Z0vurKxddN7jyd_TSrdalJHII5h_T1k2Q95rM2I93aN2BfK1caVxQtycaNUGWrwsOTTSLNY6XS_q7pNVa8uKa4u4DQYhUDa0yRZrtXhqPMAIoiuAv8fC3X_y4fBTYmienqzu-my74uoDsL_kYnbSs88GTmel-hHh77ZHFksgh-i1C4j5-ah3AQeepN_9x8zFYEwIEh_SnEQ86iqaNIdEeBz7UYj-tyqCRim8pajgaSFVXPWY9i02HnfJ-hSVRhAP0jw')"}}></div>
                            <div className="quick-view-btn absolute bottom-4 inset-x-4 opacity-0 translate-y-2 transition-all duration-300 z-20">
                                <button className="w-full bg-surface/90 backdrop-blur-md text-primary py-3 rounded-lg font-label-md shadow-lg hover:bg-primary hover:text-on-primary">Quick View</button>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-headline-sm font-headline-sm text-primary">Merino Wool Coat</h3>
                            <p className="text-body-md font-body-md text-secondary">$580.00</p>
                        </div>
                    </div>
                    <div className="product-card group cursor-pointer scroll-reveal active" style={{transitionDelay: "100ms"}}>
                        <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low mb-stack-md rounded-lg shadow-sm">
                            <div className="absolute top-4 left-4 z-20 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-label-sm uppercase tracking-wider">New</div>
                            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A professional fashion photograph showing a minimalist silk slip dress in a deep navy blue. The fabric has a subtle sheen and drapes perfectly. The background is a soft, out-of-focus interior with neutral tones and natural window light creating gentle shadows." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVVRWQhVVAxL4F6SBl3r3JJ5ZAgXjnae2bHk3Se0XbRYlccJc2NgrKEff96OSqZ5SWJsiOs_1lPGUC11bNzNqAj6yYEP1xdNUdY38tmXxjfqQgad-jcM3pI0hCjrBzbatUzt9HF-xq4AP2rYRGGkuCV22KU01xETc58jE9bQ-bZC1lgBTkYb4kDn87b9-kbgFCL1ob7DkwF_SzEdp2azbYFo-LaC60OppC1Cw_YlqWdZoE3tR8jKfJ8HW2-Nd1MSKoAHTMGws7aA4')`}}></div>
                            <div className="quick-view-btn absolute bottom-4 inset-x-4 opacity-0 translate-y-2 transition-all duration-300 z-20">
                                <button className="w-full bg-surface/90 backdrop-blur-md text-primary py-3 rounded-lg font-label-md shadow-lg hover:bg-primary hover:text-on-primary">Quick View</button>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-headline-sm font-headline-sm text-primary">Silk Slip Dress</h3>
                            <p className="text-body-md font-body-md text-secondary">$320.00</p>
                        </div>
                    </div>
                    <div className="product-card group cursor-pointer scroll-reveal active" style={{transitionDelay: "200ms"}}>
                        <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low mb-stack-md rounded-lg shadow-sm">
                            <div className="absolute top-4 left-4 z-20 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-label-sm uppercase tracking-wider">New</div>
                            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A close-up product shot of a structured leather tote bag in a rich espresso brown. The bag sits on a white marble surface, illuminated by bright, clean light that accentuates the premium grain of the leather and the gold hardware details. The style is sophisticated and architectural." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlnCZSRipsK54-kNgDGF7waL-IppA5P0J66HcTD15W5O6fgSGLg2PPlKdibQre0gfxEikwi8ghmHAbb5aeXCn0WBcTMfwrG3QSZi2jTWDwGh8OT3FFqC-DNcnniIajovSq5rDHp1YqtmKi6NMwjo9QsdLXeoCuhZQHV7UohnYmMwP0oLn-dOpKKSN0jwhRFMI-Bx09jEENPGGW5io7FwsA8D14At41d7h_2XS8alibG1TfeKaJVCOW_Ca2qyU02rvVBR4I4HC6Vq0')`}}></div>
                            <div className="quick-view-btn absolute bottom-4 inset-x-4 opacity-0 translate-y-2 transition-all duration-300 z-20">
                                <button className="w-full bg-surface/90 backdrop-blur-md text-primary py-3 rounded-lg font-label-md shadow-lg hover:bg-primary hover:text-on-primary">Quick View</button>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-headline-sm font-headline-sm text-primary">Structured Leather Tote</h3>
                            <p className="text-body-md font-body-md text-secondary">$450.00</p>
                        </div>
                    </div>
                    <div className="product-card group cursor-pointer scroll-reveal active" style={{transitionDelay: "300ms"}}>
                        <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low mb-stack-md rounded-lg shadow-sm">
                            <div className="absolute top-4 left-4 z-20 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-label-sm uppercase tracking-wider">New</div>
                            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A stylish image of a person wearing a pair of high-waisted tailored trousers in a cream shade. The trousers are paired with a simple black turtleneck. The setting is a minimalist architectural space with sharp geometric shadows and high-contrast lighting." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0UizpwhO6TpZ8618wuif_gZnifPWn04FBnpaIgOUfkNJLtUIjASVy9dnXUnhGOX5F94u8-GufpzWKYUmdXkU1gWVQmcXTlgcclPLPCQi-0hxUR8N0wj8QBSa0McKu7PC5_hhyk9oKlqCMP5SHV_3tQjC2bEoU956EDLJVIjsLXoXTWr9NR6ucrwVjemyK8Z09UeKyzspxWvrKovw2U0iVJ5QH4uM94gCH373YmQID9ZJ1XSmgEhAXwUlaGlLw8K31neR2ffOIB6o')`}}></div>
                            <div className="quick-view-btn absolute bottom-4 inset-x-4 opacity-0 translate-y-2 transition-all duration-300 z-20">
                                <button className="w-full bg-surface/90 backdrop-blur-md text-primary py-3 rounded-lg font-label-md shadow-lg hover:bg-primary hover:text-on-primary">Quick View</button>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-headline-sm font-headline-sm text-primary">Tailored Trousers</h3>
                            <p className="text-body-md font-body-md text-secondary">$195.00</p>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 lg:col-span-4 py-section-gap scroll-reveal">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-stack-lg bg-surface-container-low rounded-xl overflow-hidden p-8 md:p-0">
                            <div className="p-margin-desktop space-y-stack-md">
                                <h2 className="text-headline-md font-headline-md text-primary">Conscious Craftsmanship</h2>
                                <p className="text-body-md font-body-md text-secondary leading-relaxed">
                                    Our new collection is a testament to our commitment to sustainability. Each piece is crafted using ethically sourced materials and processed in certified facilities. We believe that true luxury should be enduring, both in style and in its impact on the world.
                                </p>
                                <a className="text-label-md font-label-md text-primary underline underline-offset-4 hover:text-secondary transition-colors" href="#">Learn more about our process</a>
                            </div>
                            <div className="h-64 md:h-full bg-cover bg-center" data-alt="A detailed, macro close-up of a high-end textile loom at work, weaving high-quality natural fibers. The lighting is warm and golden, focusing on the intricate patterns of the thread and the mechanical precision of the machine. The image communicates a sense of traditional craftsmanship combined with modern quality." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCv6GbZTAnUAUhcNzziy71kXZwrnMDqOTyilAqiseuADrwJm4wciNA3k6VeXlmoy_lt2GF9pVyifoQZJBsk94BaWoDxNxQi0Uz_M8aNIupSh9WDQSfDh0G2j9xDwyPIqZ1QxCRR0UAKHEbTENXwzL4zUuWlXloa_QmH-up3BKM6wQBLuQVQm3EJZ8RzZbjbLD7AQZPzhxey8hJy7A4HNG9SZuhQBcjsu4DBI702ZM9fHH8e8KFP1rHc9KqKfxHm175pojNOl0jhNF8')`}}></div>
                        </div>
                    </div>
                    <div className="product-card group cursor-pointer scroll-reveal">
                        <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low mb-stack-md rounded-lg shadow-sm">
                            <div className="absolute top-4 left-4 z-20 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-label-sm uppercase tracking-wider">New</div>
                            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A studio portrait of a classic white organic cotton poplin shirt. The shirt is crisp and perfectly tailored, displayed on a clean white background with subtle side lighting that emphasizes the quality of the stitching and the fine weave of the cotton." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8rNCHybF1iSmDqzYMInpPHtg3PymgIAhCV-DPjWNzoVIgU1W5aHpdB8JyoVhicRg-Fyq31EniufZplBmDAFmPlxcRS9M1Lab9nOWi4rTNstJTnh8y7AnBgVDyPqpY6WVuKqzTJtSjDtOV4143PKLWbl9xdV78pk8RKviZSFUG_A0W85qQQoKgzhE589a27MfLfeqIQavT526UcdSbuWJgV3mJ3yKh6fEvKd3rrvvar7RuKIVSDZl4BrsmmnXy8tTi-Y3VcuY2OAs')`}}></div>
                            <div className="quick-view-btn absolute bottom-4 inset-x-4 opacity-0 translate-y-2 transition-all duration-300 z-20">
                                <button className="w-full bg-surface/90 backdrop-blur-md text-primary py-3 rounded-lg font-label-md shadow-lg hover:bg-primary hover:text-on-primary">Quick View</button>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-headline-sm font-headline-sm text-primary">Organic Cotton Shirt</h3>
                            <p className="text-body-md font-body-md text-secondary">$145.00</p>
                        </div>
                    </div>
                    <div className="product-card group cursor-pointer scroll-reveal" style={{transitionDelay: "100ms"}}>
                        <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low mb-stack-md rounded-lg shadow-sm">
                            <div className="absolute top-4 left-4 z-20 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-label-sm uppercase tracking-wider">New</div>
                            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A close-up photo of a pair of minimalist black leather ankle boots. The leather has a matte finish, and the boots feature a clean, architectural silhouette. They are placed on a light-colored wood floor with soft afternoon light highlighting the sleek design." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXrtWt0VtiNqyAKq-ovTUZqPcvFOqBWZEAoPd9GZmOc402KMTZ0XBTB3arzhzH-d-7hNgaVIRxLlw11KC5ecPVhpK7d-uyCUYXYgcE1ebDaPVHeScLXI-_axCleLyEzcQWFPMzHanKvmItAeqkxRR78fCdcFKblx2YItSycDhiwP42stpdo9b3Uyzn5NXAsohtWeuk0NeIQlOAKyocBd6TccL0dkwED2u6_FZuP5CyESKAeZ_edkjzaNR5Ay204w-ZoN6E71YTyZA')`}}></div>
                            <div className="quick-view-btn absolute bottom-4 inset-x-4 opacity-0 translate-y-2 transition-all duration-300 z-20">
                                <button className="w-full bg-surface/90 backdrop-blur-md text-primary py-3 rounded-lg font-label-md shadow-lg hover:bg-primary hover:text-on-primary">Quick View</button>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-headline-sm font-headline-sm text-primary">Leather Chelsea Boot</h3>
                            <p className="text-body-md font-body-md text-secondary">$280.00</p>
                        </div>
                    </div>
                    <div className="product-card group cursor-pointer scroll-reveal" style={{transitionDelay: "200ms"}}>
                        <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low mb-stack-md rounded-lg shadow-sm">
                            <div className="absolute top-4 left-4 z-20 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-label-sm uppercase tracking-wider">New</div>
                            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A portrait-style fashion photograph of a model wearing a heavy-knit cashmere sweater in a soft slate gray. The texture is soft and tactile. The model is standing in a brightly lit, modern greenhouse, surrounded by lush green plants that contrast with the neutral tones of the garment." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjG0ygWf_8EFLnw04pL_dlqtE8Zz74eD2khvJ2KklLfUE4gXrFOxTcnJXbY_DFJjvMAOttTDSz4MWEnoWQsp8y8h8WPm3cEvcOz9cTcSbDG4rGn593fywPm7VCckCvC2s5mFVgvC8c1ZDAsWh7D-tGhHLTm5Hs6L_obCvCWyDEP0vKwyuhguOU-KK2rbkOsl33Rtg_ns9lujsM9plrF_2B0hisYAM4P-82gtj9MZubHZ-uQYrrsqynu3g7L7oofRIGrVyf36cM8Wk')`}}></div>
                            <div className="quick-view-btn absolute bottom-4 inset-x-4 opacity-0 translate-y-2 transition-all duration-300 z-20">
                                <button className="w-full bg-surface/90 backdrop-blur-md text-primary py-3 rounded-lg font-label-md shadow-lg hover:bg-primary hover:text-on-primary">Quick View</button>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-headline-sm font-headline-sm text-primary">Cashmere Knit Sweater</h3>
                            <p className="text-body-md font-body-md text-secondary">$425.00</p>
                        </div>
                    </div>
                    <div className="product-card group cursor-pointer scroll-reveal" style={{transitionDelay: "300ms"}}>
                        <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low mb-stack-md rounded-lg shadow-sm">
                            <div className="absolute top-4 left-4 z-20 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-label-sm uppercase tracking-wider">New</div>
                            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A lifestyle product shot of a pair of gold hoop earrings with a sculptural, organic shape. The earrings are resting on a piece of raw sandstone. The lighting is harsh and direct, creating deep shadows and highlighting the brilliant polished finish of the gold." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuADDzjSVldIP2YVYPkiC5K9ke0MswQQ7IcxzGA2uata2SPu4BQrBUnASg537YT0PV9dM_QePFx2sM9bUjXkqoR7ebzQvepoVzQ7oh27zIvMtmYP1T8Js0IgcCaL9elJwrj_6jQXpG33T6YXRzPjbxxiMtQsUv3qXKBbKAAGXOByFPiPoHHiKY9O6hGBuMtAoOjviLBQNqO9qNar7xwMDOhf4WTeqi9WhlKbwUppn2NpTlEHSgeb8PSrQKIXHK4Xqac1AtwYDeELjnY')`}}></div>
                            <div className="quick-view-btn absolute bottom-4 inset-x-4 opacity-0 translate-y-2 transition-all duration-300 z-20">
                                <button className="w-full bg-surface/90 backdrop-blur-md text-primary py-3 rounded-lg font-label-md shadow-lg hover:bg-primary hover:text-on-primary">Quick View</button>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-headline-sm font-headline-sm text-primary">Sculptural Gold Hoops</h3>
                            <p className="text-body-md font-body-md text-secondary">$120.00</p>
                        </div>
                    </div>
                </div>
                <div className="mt-section-gap text-center">
                    <button className="border border-primary text-primary px-12 py-4 rounded-lg font-label-md hover:bg-primary hover:text-on-primary transition-all active:scale-95">
                        Load More Items
                    </button>
                </div>
            </section>
        </>
    )
}
export default ProductSection
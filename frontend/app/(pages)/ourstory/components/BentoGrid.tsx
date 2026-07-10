const BentoGrid = () => {
    return (
        <>
            <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
                <div className="mb-stack-lg reveal">
                    <h2 className="font-headline-md text-headline-md text-primary text-center mb-stack-sm">The Art of the Maker</h2>
                    <p className="font-body-md text-body-md text-secondary text-center max-w-2xl mx-auto">Our process is a dialogue between traditional hands-on craftsmanship and modern engineering precision.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-gutter h-[800px] md:h-[600px]">
                    <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-lg group reveal">
                        <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" data-alt="A macro close-up of a craftsman's hands working with molten glass. The photograph is black and white, highlighting the intense heat and the fluid movement of the material. There is a sense of focused energy and expert skill. The background is dark, making the glowing glass the focal point. High contrast, sharp detail, and a raw, editorial feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTAPePUMMxug9Vw5O95bhk_6IKohPAVbaPhwBvpQ5tLhpMPOWmjha-rVOwtAVeJTGlEHccyR5wOL6YQOwyLJ66UvBZgrqfwsbU9e9phSk6_uKeCHNhYVCXk_bgtR_lI3tMwSq8F_Pjt4R2D-XPmi0QtrU-cAb2sap5riWGOyUzcgM_A7Uj1vwKoEhIJyOeNpcr53S9HbxdzgYBU6CpjEnhCFTPt5SST7tAt4C29blOgfCiaNWIXbtWN3F1aUhfctrENKLhuezeLIs" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-stack-md text-surface">
                            <h4 className="font-headline-sm text-headline-sm">Master Glassblowing</h4>
                            <p className="font-body-sm text-body-sm opacity-80">Each globe is hand-blown by artisans in our California studio.</p>
                        </div>
                    </div>
                    <div className="md:col-span-2 md:row-span-1 relative overflow-hidden rounded-lg group reveal" style={{ transitionDelay: '100ms' }}>
                        <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" data-alt="A clean, high-key studio shot of various brass components laid out in a geometric pattern. The metal has a soft, brushed gold finish. The lighting is bright and even, casting minimal shadows. This represents the component design and precision engineering stage of production. The aesthetic is extremely minimalist and organized." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQF6RluWRG2DX9PxyhqCz9GZgCUwLQ6VxHDqIiVGI7egjIhJE1yYNSRk8dg2l5YeflhQHv7TcIIpRccMSMFv1mb6-yDQxkVjOWMJCkMPq1jZugAyttq_zL_Nsk1TAUa9BCC1PWSzRH4BXHtMO6tibHDO-cM4Fi6-WDgeZi8kBj8kzkRlt6XI6zTWracFp2aE2PKIumUMPBYHezc2GaOd3WsMjH4V-DD9qkpwfF-CK0V5Ah5aIkgN_k2m8C5B7OlIsehGcDfGeag68" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-stack-md text-surface">
                            <h4 className="font-headline-sm text-headline-sm">Precision Metals</h4>
                            <p className="font-body-sm text-body-sm opacity-80">Solid brass, hand-polished to a soft luster.</p>
                        </div>
                    </div>
                    <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-lg group reveal" style={{ transitionDelay: '200ms' }}>
                        <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" data-alt="A soft-focus photograph of architectural sketches on translucent vellum paper. A designer's pen is resting on the side. The image uses a soft-toned palette of creams and greys, highlighting the delicate lines of the drawings. It evokes a feeling of creative inspiration and the earliest stages of design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDttKMAzVUaBCXYEjCkVxONqmrfJTyEr13pgckW4aKkBT0FQI6bJFyYunUeXHrlTOQ6sG_KemVpE6_U5PG-XobDrqoqqtAPXJCPAoU_D2YKoUuhnx7mUw7xeNaZwOt-j7hxSQmnKBNiX_Q_NaZOaarjF1dHtAfyKBJ-aqhJzXvD5rzaxorhJ5FmKasMiRhNMFxjphuyk7zQQl60oP5JmdWLRjayRSC6ptbMCqf6AZguRHxRsK6Y4H91mf9zaaxTxLaL48p8gQ-85S0" />
                    </div>
                    <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-lg group reveal" style={{ transitionDelay: '300ms' }}>
                        <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" data-alt="A black and white portrait of a design team member looking thoughtfully at a prototype. The lighting is dramatic and artistic, focusing on the expression of concentration and the detail of the object. It conveys the personal human element behind the LUMINA brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc1gtWy7v5tJ46skiWDVIfA7zm8WEySYnFd_k7LfxJLYbJv-vziMpfaq5POq6INNA89R0dDNNjgTIZGTSK5nhje3MtWg5WSwxRlJY8IlXBYz-1u3fn5L7ZaxG-zWhX72x3LY9Uc9SsSAPIRW_0tmf9VpaO119TowFo3tiIhIIt407wiH0KFdW_WkHEp2gCfDdQI8Yt2umV3Ntkbg-B6SjjFzgFR9gPhVIDYJPQ73Cp_QfMHJMXOddfYfBcbCTRfD4YF4nPGRr6_bg" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default BentoGrid
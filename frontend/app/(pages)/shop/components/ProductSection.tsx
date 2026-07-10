const ProductSection = () => {
    return (
        <>
            <section className="py-section-gap bg-surface-container-low w-full">
                <div className="px-margin-desktop max-w-container-max mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-display-lg text-display-lg text-primary mb-4">Best Sellers</h2>
                        <p className="font-body-md text-body-md text-secondary max-w-lg mx-auto">Our most-loved pieces, chosen by you. Minimalist staples for the discerning eye.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
                        <div className="group relative flex flex-col">
                            <div className="aspect-square rounded-lg overflow-hidden mb-stack-md bg-surface-container-lowest shadow-sm relative">
                                <div className="w-full h-full bg-cover bg-center" data-alt="Minimalist studio product shot of a sleek, matte black thermos bottle against a soft grey background. Clean lighting with soft shadows. Modern aesthetic." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXhmJRofM8476TaXNSLvjQbrURIILXQumfUxPDx93mNc82tyeZpzYoSWoqfBhpr5VeLfjtSYTskN78WefGLUYC3Iv6vK0mzF_fFmoYfu0G_V8nNqktM-guBI36xIzhwFeCw8ETh9Ou8A-VFKaSv_tQG91tMb9sDFu60ib_ZhtFmMYqgad6nCo8UymjFgnlHQmyXfAKfAX0nax4KsZW5qtL-jM3HXjceyGcOj3_qip62TlxIzsoSM43FoYoi7KVWe_bmpL703iMLZ4')` }}></div>
                                <button className="absolute inset-x-stack-md bottom-stack-md py-3 bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-md text-label-md rounded shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Quick View</button>
                            </div>
                            <h4 className="font-headline-sm text-headline-sm text-primary">Sculptural Vase</h4>
                            <p className="font-label-md text-label-md text-secondary">$120.00</p>
                        </div>
                        <div className="group relative flex flex-col">
                            <div className="aspect-square rounded-lg overflow-hidden mb-stack-md bg-surface-container-lowest shadow-sm relative">
                                <div className="w-full h-full bg-cover bg-center" data-alt="Professional studio shot of an ivory colored linen throw pillow with a subtle waffle texture. Placed on a white minimalist pedestal. High-end lifestyle vibe." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXvxnkZE3XdBv7NB_D119Wbb9WTJs2C7K9NFTT2q9d6h91rwsurXYG8jj28nxpEtaY8iN6fMghPHBaameZhwOueUl3j8QKHKlT0IyWC7XFihg6Z3tUiMt1yIrRAeLGdtHT-ymQ0mi4VlcFTNIttcSnqe15wdZEnHHwy5FOiUueioRRnxm3gbDUWkc1TcUVh5nElT1dGk7r9bM8gmERXmQpWXwRPdkznDqqZgI0aw1rHKloq_MsBiGClrJAEdAbe8qSAfjdO6HlNQc')` }}></div>
                                <button className="absolute inset-x-stack-md bottom-stack-md py-3 bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-md text-label-md rounded shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Quick View</button>
                            </div>
                            <h4 className="font-headline-sm text-headline-sm text-primary">Linen Throw</h4>
                            <p className="font-label-md text-label-md text-secondary">$85.00</p>
                        </div>
                        <div className="group relative flex flex-col">
                            <div className="aspect-square rounded-lg overflow-hidden mb-stack-md bg-surface-container-lowest shadow-sm relative">
                                <div className="w-full h-full bg-cover bg-center" data-alt="A pair of minimalist leather sandals in a deep tan color. Placed on a white concrete slab with dramatic architectural shadows. High-fashion footwear photography." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBMC-WVIe3T1TCdKtOD1ZAvbU4IH6arHbZgEwcEJpZe1pukdye92h-NyFCLVbIldtVqEzf5dE8TV0Wr7c3DEVdaG4wsvhNQM2PpILJlru0_MybOn7xPaX0ULfKaMbYLpyqbWJUUgJWsbuYr1VHgLMdDdqbLvcFoGYh2YO-QkjlVTROrCNrVdAkHLrje_uoDqIkYAoP6GwjXog5SSdwe8xMMHzb3TW92lPIkdYfLH7IH68fsFDDptDGBJfEhRGS-ESVSBlmDedEtymI')` }}></div>
                                <button className="absolute inset-x-stack-md bottom-stack-md py-3 bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-md text-label-md rounded shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Quick View</button>
                            </div>
                            <h4 className="font-headline-sm text-headline-sm text-primary">Tan Slide</h4>
                            <p className="font-label-md text-label-md text-secondary">$145.00</p>
                        </div>
                        <div className="group relative flex flex-col">
                            <div className="aspect-square rounded-lg overflow-hidden mb-stack-md bg-surface-container-lowest shadow-sm relative">
                                <div className="w-full h-full bg-cover bg-center" data-alt="A single, elegant soy candle in a heavy smoked-glass jar. The label is white with clean black serif typography. Warm, ambient lighting against a dark wood background." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD23OW5D4x8mQ08o3wK9tfbcDGaqmz1f8NdUTWyP7RMYvXS5Fpj4fmpGQBYkVpOGTIltECESo_Ba8I9xZX88u8ThD_J3mOpaVDbQZ73DZak2x5jOIbOiV_M8Bd5caKkqbX2wUO_WPzpdUve6f6f81VtJrnfPccB-X4U_nyXqB1EtdcMVgRfMagVhYLiGa8ujHGg-1jHoyvy3KLWrclDdCc6D7Zp5BpQ-tFh7zH8rUWSpjhhowPflfuPoTIZE4_xbGQqDV0BQHQHhXw')` }}></div>
                                <button className="absolute inset-x-stack-md bottom-stack-md py-3 bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-md text-label-md rounded shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Quick View</button>
                            </div>
                            <h4 className="font-headline-sm text-headline-sm text-primary">Cedar Candle</h4>
                            <p className="font-label-md text-label-md text-secondary">$48.00</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ProductSection
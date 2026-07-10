
import { Leaf,Diamond,Sprout } from "lucide-react"
const BrandSection = () => {
    return (
        <>
            <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto border-b border-outline-variant">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mb-6 text-primary">
                            <span className="text-3xl"><Leaf /></span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Beautiful Mix</h3>
                        <p className="font-body-sm text-body-sm text-secondary leading-relaxed">A curated collection of pieces that complement each other, maintaining a cohesive design language.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mb-6 text-primary">
                            <span className="text-3xl"><Diamond /></span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Craftsmanship</h3>
                        <p className="font-body-sm text-body-sm text-secondary leading-relaxed">Made with premium, natural materials from verified artisans who value ethical practices.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mb-6 text-primary">
                            <span className="text-3xl"><Sprout /></span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Mindfulness</h3>
                        <p className="font-body-sm text-body-sm text-secondary leading-relaxed">Each piece is designed to bring peace and comfort to your daily routine, wherever you are.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BrandSection
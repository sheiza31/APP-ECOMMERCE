"use client"
import { useRouter } from "next/navigation"
const CtaSection = () => {
    const router = useRouter()
    return (
        <>
            <section className="bg-primary py-section-gap text-center px-margin-mobile">
                <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-stack-lg">Experience the Result</h2>
                <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-xl mx-auto mb-stack-lg">
                    Discover the final collection, born from this dedicated journey of craftsmanship.
                </p>
                <div className="flex flex-col md:flex-row gap-stack-md justify-center">
                    <button onClick={() => {
                        router.push("/shop")
                    }} className="cursor-pointer bg-on-primary text-primary px-8 py-4 rounded-lg font-label-md text-label-md hover:bg-primary-fixed transition-all duration-300">Shop Collection</button>
                    <button onClick={() => {
                        router.push("/sustainability")
                    }} className="cursor-pointer border border-primary-fixed text-on-primary px-8 py-4 rounded-lg font-label-md text-label-md hover:bg-on-primary/10 transition-all duration-300">Our Sustainability Report</button>
                </div>
            </section>
        </>
    )
}
export default CtaSection
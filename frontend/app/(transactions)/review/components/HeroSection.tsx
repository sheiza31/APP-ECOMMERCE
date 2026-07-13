import { Check } from "lucide-react"
const HeroSection = () => {
    return (
        <>
            <div className="text-center mb-section-gap">
                <div className="success-checkmark inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-on-primary mb-stack-lg shadow-high">
                    <Check size={40} />
                </div>
                <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-stack-sm">Thank you for your purchase!</h1>
                <p className="font-body-lg text-body-lg text-secondary">A confirmation email has been sent to <span className="font-semibold text-primary">alex.walker@example.com</span></p>
            </div>
        </>
    )
}
export default HeroSection
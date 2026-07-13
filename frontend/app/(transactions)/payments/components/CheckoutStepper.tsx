import { Check } from "lucide-react"
const CheckoutStepper = () => {
    return (
        <>
            <div className="w-full max-w-3xl mx-auto mb-section-gap">
                <div className="flex items-center justify-between relative">
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant -translate-y-1/2 z-0"></div>
                    <div className="relative z-10 flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-[20px]"><Check /></span>
                        </div>
                        <span className="font-label-md text-label-md text-primary">Shipping</span>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white ring-4 ring-primary-fixed">
                            <span className="font-label-md text-label-md">2</span>
                        </div>
                        <span className="font-label-md text-label-md text-primary font-bold">Payment</span>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-surface-container-highest border-2 border-outline-variant flex items-center justify-center text-outline">
                            <span className="font-label-md text-label-md">3</span>
                        </div>
                        <span className="font-label-md text-label-md text-on-surface-variant">Review</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CheckoutStepper
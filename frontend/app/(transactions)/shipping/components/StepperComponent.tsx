const StepperComponent = () => {
    return (
        <>
            <div className="w-full max-w-3xl mx-auto mb-section-gap">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">1</div>
                        <span className="font-label-md text-label-md text-primary">Shipping</span>
                    </div>
                    <div className="stepper-line mx-4"></div>
                    <div className="flex flex-col items-center gap-2 opacity-40">
                        <div className="w-10 h-10 rounded-full bg-outline-variant text-on-surface flex items-center justify-center font-bold">2</div>
                        <span className="font-label-md text-label-md">Payment</span>
                    </div>
                    <div className="stepper-line mx-4"></div>
                    <div className="flex flex-col items-center gap-2 opacity-40">
                        <div className="w-10 h-10 rounded-full bg-outline-variant text-on-surface flex items-center justify-center font-bold">3</div>
                        <span className="font-label-md text-label-md">Review</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default StepperComponent
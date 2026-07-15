const NewsLetter = () => {
    return (
        <>
            <section className="bg-surface-container-low py-section-gap">
                <div className="max-w-container-max mx-auto px-margin-desktop text-center">
                    <div className="max-w-2xl mx-auto space-y-stack-md">
                        <h2 className="text-headline-md font-headline-md text-primary">Join the LUMINA Circle</h2>
                        <p className="text-body-md font-body-md text-secondary">
                            Sign up for early access to new collections, exclusive events, and the latest in minimalist design.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-stack-sm mt-stack-lg max-w-md mx-auto">
                            <input className="flex-1 bg-surface border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Your email address" type="email" />
                            <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-md hover:bg-primary/90 transition-all active:scale-95" type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsLetter
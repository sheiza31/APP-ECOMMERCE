const NewsLetter = () => {
    return (
        <>
            <section className="py-section-gap px-margin-desktop bg-primary text-white text-center">
                <div className="max-w-xl mx-auto reveal">
                    <h2 className="font-headline-md text-headline-md mb-stack-md">Join the Journey</h2>
                    <p className="font-body-md text-body-md opacity-80 mb-stack-lg">Stay informed about our latest sustainability milestones and upcoming circular drops.</p>
                    <form className="flex flex-col sm:flex-row gap-stack-sm max-w-md mx-auto">
                        <input className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all" placeholder="Your email address" type="email" />
                        <button className="bg-surface text-primary px-6 py-3 rounded-lg font-label-md font-bold hover:bg-surface-container-high transition-transform active:scale-95">Subscribe</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default NewsLetter
const NewsLetter = () => {
    return (
        <>
            <section className="bg-primary-container text-on-primary-container rounded-2xl p-stack-lg text-center py-stack-lg">
                <h3 className="font-headline-md text-headline-md text-white">Need a comprehensive view?</h3>
                <p className="font-body-md text-surface-variant mt-stack-md max-w-xl mx-auto">Sign up to receive our quarterly transparency newsletter and be the first to receive annual reports directly in your inbox.</p>
                <div className="mt-stack-lg flex flex-col md:flex-row justify-center gap-stack-md max-w-md mx-auto">
                    <input className="bg-white/10 border border-white/20 rounded-lg px-stack-md py-stack-md text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary-fixed outline-none flex-grow" placeholder="email@example.com" type="email" />
                    <button className="bg-primary-fixed text-on-primary-fixed px-stack-lg py-stack-md rounded-lg font-label-md whitespace-nowrap hover:bg-white transition-colors">Subscribe</button>
                </div>
            </section>

        </>
    )
}
export default NewsLetter
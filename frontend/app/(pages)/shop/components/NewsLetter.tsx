const NewsLetter = () => {
    return (

        <>
            <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
                <div className="max-w-4xl mx-auto bg-primary text-on-primary rounded-2xl overflow-hidden shadow-2xl relative">

                    <div className="relative z-10 px-8 py-16 md:p-20 text-center flex flex-col items-center">
                        <span className="font-label-sm text-label-sm tracking-[0.2em] opacity-80 uppercase mb-4">TO SEIZE MORE</span>
                        <h2 className="font-display-lg text-display-lg md:text-[40px] mb-6">Stay Inspired</h2>
                        <p className="font-body-md text-body-md mb-10 max-w-lg opacity-90">Join our newsletter and receive information on new collections, exclusive offers, and exclusive updates from our store.</p>
                        <form className="flex flex-col md:flex-row w-full max-w-md gap-4">
                            <input className="flex-grow px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-on-primary placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-body-sm" placeholder="ENTER YOUR EMAIL ADDRESS" required type="email" />
                            <button className="px-8 py-4 bg-on-primary text-primary font-label-md text-label-md rounded-lg hover:bg-white transition-colors active:scale-95" type="submit">SIGN UP</button>
                        </form>
                        <p className="mt-6 text-[11px] opacity-50 font-body-sm">By subscribing, you agree to our Privacy Policy and Terms of Service.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsLetter
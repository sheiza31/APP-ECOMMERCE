const NewsLetter = () => {
    return (
        <>
            <section className="max-w-container-max mx-auto px-margin-desktop mb-section-gap">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-primary-container rounded-3xl overflow-hidden p-stack-lg">
                    <div className="md:col-span-2 flex flex-col justify-center space-y-4">
                        <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-white">Join the LUMINA Inner Circle</h2>
                        <p className="font-body-lg text-body-lg text-on-primary-container max-w-xl">Receive early access to seasonal capsules, sustainable fashion insights, and exclusive invitations to our private collection previews.</p>
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <input className="bg-surface-container-high/10 border-outline-variant/30 text-white placeholder:text-on-primary-container rounded-lg px-6 py-3 flex-grow focus:ring-primary focus:border-primary transition-all" placeholder="Email address" type="email" />
                            <button className="bg-white text-primary font-label-md text-label-md px-8 py-3 rounded-lg hover:bg-surface transition-colors active:scale-95 transition-transform">Subscribe</button>
                        </div>
                    </div>
                    <div className="hidden md:block relative h-full min-h-[300px]">
                        <img className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80" data-alt="An artistic composition of high-end fashion textures: a swatch of charcoal wool, a polished obsidian button, and a sliver of brushed silver. All arranged in a geometric, balanced layout. The lighting is dramatic with deep shadows and sharp highlights, emphasizing a luxurious and modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8uGgz52X3TcAd45Ykeoo76-wzIactzxmMJTu7FoqjI1zCAHqGM5EIXcPAGXIB162uPP4UC_mA7cBHBudF0UbCYCmRLw7_-yxEuKYNF85GVHFxqIbX_Tca-bywWUuCfyw3CILurajhumrLIHTHwrDCB1Hdmv-ujOlxFzfwYSkugawnSYUk5Bp9Ew5z_2CBbbJS5RPNxpFP61JojNw4oxK9vRrq4CHRrlaHOp8nVSjdzm2kgzs3qo1Ec7yBCb8EDjPJoqMYIXEghk4" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default NewsLetter 
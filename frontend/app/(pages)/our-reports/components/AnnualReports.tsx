import { Download } from "lucide-react"
import Link from "next/link"
const AnnualReports = () => {
    return (
        <>
            <section className="mb-section-gap">
                <div className="flex justify-between items-end mb-stack-lg">
                    <h2 className="font-headline-md text-headline-md">Sustainability Reports</h2>
                    <a className="text-primary font-label-sm uppercase tracking-widest border-b border-primary pb-1" href="#">View Archive</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                    <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low rounded-lg p-stack-lg h-[500px] flex flex-col justify-between">
                        <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
                            <div className="w-full h-full bg-cover bg-center" data-alt="A macro photograph of sustainable textile fibers intertwined in a minimalist, high-key studio setting. The lighting is soft and ethereal, highlighting the organic textures and the clean, ivory-toned background that aligns with the LUMINA brand's sophisticated and eco-conscious identity." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMxxxq0kRa-d-UezvRcZ7-7jTnunjoO5_7O-v6PF8IVTK1rE0iWaVlp8VisLgSuYhJ72lDO55vn-HheCIuf3AnTiMtFZDxcepazAmNn6Yg0_8evwpXdJp8cRUlabG0VClVFgw-6Q0PuhzoLJM9qnlsW6_c7JkqKcxVha_662d0PjREX0dRHCdlpaarMAN3MEh6z9luJiWdTicsJPRViWNodPIn58fw_IRJ4AxXSE89-T8A_hp9ABcGAeiDILKjt2Ric9KVMBgzPyo')` }}></div>
                        </div>
                        <div className="relative z-10">
                            <span className="bg-primary text-on-primary px-3 py-1 rounded-full text-label-sm uppercase tracking-tighter">Newest Release</span>
                            <h3 className="font-display-lg text-display-lg-mobile md:text-display-lg mt-stack-md max-w-lg">2023 Impact &amp; Circularity Report</h3>
                        </div>
                        <div className="relative z-10 flex flex-wrap gap-stack-md items-center">
                            <button className="bg-primary cursor-pointer text-on-primary px-stack-lg py-stack-md rounded-lg font-label-md flex items-center gap-2 hover:bg-opacity-90 transition-all">
                                <span className="material-symbols-outlined"><Download /></span> Download PDF
                            </button>
                            <button className="bg-white cursor-pointer border border-outline text-primary px-stack-lg py-stack-md rounded-lg font-label-md hover:bg-surface-container transition-all">
                                Read Summary
                            </button>
                        </div>
                    </div>
                    <div className="md:col-span-4 bg-white border border-outline-variant rounded-lg p-stack-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                        <div>
                            <span className="text-secondary font-label-sm uppercase">2022 Archive</span>
                            <h3 className="font-headline-sm text-headline-sm mt-stack-sm">The Carbon Neutral Journey</h3>
                            <p className="font-body-sm text-body-sm text-secondary mt-stack-md">Reviewing our first major milestone in offsets and supply chain transparency.</p>
                        </div>
                        <div className="mt-stack-lg pt-stack-md border-t border-outline-variant">
                            <Link className="flex cursor-pointer items-center justify-between text-primary font-label-md" href="#">
                                Download PDF <Download />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AnnualReports
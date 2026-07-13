import {File } from "lucide-react"
const Finnacial = () => {
    return (
        <>
            <section className="mb-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
                <div className="md:col-span-5">
                    <span className="font-label-sm uppercase text-secondary tracking-widest">Financial Oversight</span>
                    <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mt-stack-md">Fiscal Performance 2023</h2>
                    <p className="font-body-lg text-body-lg text-secondary mt-stack-md">Our growth is fueled by a commitment to ethical commerce and customer loyalty. We maintain a robust balance sheet that prioritizes long-term resilience over short-term gains.</p>
                    <ul className="mt-stack-lg space-y-stack-md">
                        <li className="flex justify-between border-b border-outline-variant pb-2">
                            <span className="text-secondary font-body-md">Gross Revenue</span>
                            <span className="text-primary font-bold font-body-md">$412.4M</span>
                        </li>
                        <li className="flex justify-between border-b border-outline-variant pb-2">
                            <span className="text-secondary font-body-md">Operating Margin</span>
                            <span className="text-primary font-bold font-body-md">18.5%</span>
                        </li>
                        <li className="flex justify-between border-b border-outline-variant pb-2">
                            <span className="text-secondary font-body-md">Community Reinvestment</span>
                            <span className="text-primary font-bold font-body-md">$8.2M</span>
                        </li>
                    </ul>
                    <div className="mt-stack-lg">
                        <button className="cursor-pointer bg-primary text-on-primary px-stack-lg py-stack-md rounded-lg font-label-md flex items-center gap-2">
                            Full Financial Review <File />
                        </button>
                    </div>
                </div>
                <div className="md:col-span-7">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative group">
                        <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="An architectural interior of a minimalist modern corporate office at dusk. Large floor-to-ceiling windows reveal a soft city skyline, while the interior features warm ambient lighting, marble textures, and clean lines. The atmosphere is one of calm, professional authority and high-end success, perfectly capturing the LUMINA financial highlight theme." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDi0wDtyp0SWCXV9iAsFoinAeqA6siZF3FeYB9W--h6xzFC6rDtAGPQXt6wf-m4Zo8VRj5XeT60jNTVinvNzttFUwqV6sune-Kb9DbAx5Kawhl8dAgw2P4djWEZohsmTFzHZow1A1Wc70gL0FbDuR7iKB2RIgxkenZgfuINO5T7RPmteF6FXtWof59VXThegOoZ3H01QKmMsDZ91emMN7KvgXVo9iSjFaz_ILHNwgcsnPNvMJ9cbhXHL0y_K2VwwO8nI-iXVD06l5s')"}}></div>
                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Finnacial
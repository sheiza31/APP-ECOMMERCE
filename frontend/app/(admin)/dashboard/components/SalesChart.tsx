const SalesChart = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
                {/* Sales Overview Chart */}
                <div className="lg:col-span-2 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="font-headline-sm text-headline-sm text-primary">Sales Overview</h3>
                            <p className="text-secondary font-body-sm">Trend performance over the last 30 days</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 text-xs font-semibold bg-primary text-white rounded-md">30D</button>
                            <button className="px-3 py-1 text-xs font-semibold text-secondary hover:bg-surface-container rounded-md">90D</button>
                            <button className="px-3 py-1 text-xs font-semibold text-secondary hover:bg-surface-container rounded-md">1Y</button>
                        </div>
                    </div>
                    <div className="relative h-[300px] w-full flex items-end justify-between gap-2 border-b border-outline-variant">
                        <div className="chart-bar w-full bg-primary-fixed-dim hover:bg-primary transition-colors cursor-pointer rounded-t" style={{ height: '40%' }}></div>
                        <div className="chart-bar w-full bg-primary-fixed-dim hover:bg-primary transition-colors cursor-pointer rounded-t" style={{ height: '55%' }}></div>
                        <div className="chart-bar w-full bg-primary-fixed-dim hover:bg-primary transition-colors cursor-pointer rounded-t" style={{ height: '45%' }}></div>
                        <div className="chart-bar w-full bg-primary-fixed-dim hover:bg-primary transition-colors cursor-pointer rounded-t" style={{ height: '60%' }}></div>
                        <div className="chart-bar w-full bg-primary-fixed-dim hover:bg-primary transition-colors cursor-pointer rounded-t" style={{ height: '80%' }}></div>
                        <div className="chart-bar w-full bg-primary-fixed-dim hover:bg-primary transition-colors cursor-pointer rounded-t" style={{ height: '70%' }}></div>
                        <div className="chart-bar w-full bg-primary-fixed-dim hover:bg-primary transition-colors cursor-pointer rounded-t" style={{ height: '85%' }}></div>
                        <div className="chart-bar w-full bg-primary-fixed-dim hover:bg-primary transition-colors cursor-pointer rounded-t" style={{ height: '65%' }}></div>
                        <div className="chart-bar w-full bg-primary-fixed-dim hover:bg-primary transition-colors cursor-pointer rounded-t" style={{ height: '50%' }}></div>
                        <div className="chart-bar w-full bg-primary-fixed-dim hover:bg-primary transition-colors cursor-pointer rounded-t" style={{ height: '90%' }}></div>
                        <div className="chart-bar w-full bg-primary-fixed-dim hover:bg-primary transition-colors cursor-pointer rounded-t" style={{ height: '75%' }}></div>
                        <div className="chart-bar w-full bg-primary-fixed-dim hover:bg-primary transition-colors cursor-pointer rounded-t" style={{ height: '95%' }}></div>
                    </div>
                    <div className="flex justify-between mt-4 text-[10px] text-outline font-semibold uppercase tracking-widest px-2">
                        <span>Oct 1</span>
                        <span>Oct 10</span>
                        <span>Oct 20</span>
                        <span>Oct 30</span>
                    </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant">
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-6">Inventory Status</h3>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden">
                                <img className="w-full h-full object-cover" data-alt="Close up photography of a high-end minimalist leather sneaker in off-white, soft studio lighting, professional product photography for a premium commerce brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ0qf43dQk7HQm3bSs_ca8c1fQe4ljBgQv4309KIwCJ2UHCwE1uw5ZlHCbNelFU0EmPBUZqTo9gaNM0lImfwWv8vkzrYYp8_lct_jb8xxikOqYl_fSh9eLgg9LBAj4GQVulwl4SQ6ZXJbHifCNHpkmRhbAixXtuyxb0Zg65i2_m2Wh9k0Lc-V7qCYYEyt7SDhl1srhB0d3Y7CyNK8KmDmI6Bnr4UBE9bHd3OfMy7cLm5G779v-qjER-_r0wCiP7Zb-2rXyHUH3pKM" />
                            </div>
                            <div className="flex-1">
                                <p className="text-label-md font-semibold text-primary">Urban Leather Sneaker</p>
                                <p className="text-xs text-outline">Low Stock: 4 remaining</p>
                            </div>
                            <div className="text-right">
                                <span className="text-xs bg-error-container text-on-error-container px-2 py-0.5 rounded font-bold">Alert</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden">
                                <img className="w-full h-full object-cover" data-alt="A premium silk blouse in a muted champagne color, elegant drape, high-end fashion photography, minimal shadows, luxurious fabric texture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3eA-0II5e76KudmGehcPCnTNeloemrZ_fvvlKiGlfX1h7R4-WWr8J5_5Rjc47wtGA9zNsKctsO79cMe1LSkTKJwKSU5D-eLsj7dLitD3YLbpbGKkKoF6_0S1PFu_H6IQbIeAK6OUHV8RmNQGtdG04GwPW_kw7Foj0CqTeV8GQVMxKVZsSz8WRe6SV_jV-HBqWE-JSNGMtTLg7PhndDpz6xuwEFsVgJ-vqinZJsaBgMthyiHCIlfzvmkeHSvnkW8vNiQX92QkSNNQ" />
                            </div>
                            <div className="flex-1">
                                <p className="text-label-md font-semibold text-primary">Silk Drape Blouse</p>
                                <p className="text-xs text-outline">In Stock: 42 units</p>
                            </div>
                            <div className="text-right">
                                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">Good</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden">
                                <img className="w-full h-full object-cover" data-alt="Sophisticated black eyewear frame, professional optical product photography, clean white background, sharp focus, minimal and elegant design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUhxBbSRy98Jr4g4STh--OXukFKr30b8MJS0BXeCp0bCSRixc65Ec2GSIwWb9LmgqtIZu-U8VHIgaeaIr66fndTJNma3nhkUeIeXSw165yhzP7oPsOBrcdpSSv47u04PYZW6L_yYRUdmoC1_XMpqQ-JAZXGqodS6p8EhI-tO8r-r6IQFlG2-IeOU0gGkPIDJqPNmTZ5EpPJy3B20NI-OXftEiSDTE-Pin3pEf-7_DiWKPrWCH1PmoueFjL7ESlvQmvnAjxrckH-4c" />
                            </div>
                            <div className="flex-1">
                                <p className="text-label-md font-semibold text-primary">Arcite Frames</p>
                                <p className="text-xs text-outline">Out of Stock</p>
                            </div>
                            <div className="text-right">
                                <span className="text-xs bg-outline-variant text-on-surface-variant px-2 py-0.5 rounded font-bold">Sold Out</span>
                            </div>
                        </div>
                    </div>
                    <button className="w-full mt-8 py-3 border border-outline-variant rounded-lg text-label-md text-primary font-bold hover:bg-surface-container transition-colors">Manage Inventory</button>
                </div>
            </div>
        </>
    )
}

export default SalesChart
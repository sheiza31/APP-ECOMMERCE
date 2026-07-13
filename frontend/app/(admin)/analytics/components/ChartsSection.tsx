const ChartsSection = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 shadow-sm">
                    <div className="flex justify-between items-center mb-10">
                        <div>
                            <h3 className="font-headline-sm text-headline-sm text-primary">Revenue Trends</h3>
                            <p className="font-body-sm text-body-sm text-secondary">Daily revenue growth vs Target</p>
                        </div>
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center">
                                <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                                <span className="font-label-sm text-label-sm text-secondary">Gross Revenue</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-3 h-3 bg-primary-fixed-dim rounded-full mr-2"></span>
                                <span className="font-label-sm text-label-sm text-secondary">Target</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-72 chart-grid rounded-lg border border-outline-variant/10 overflow-hidden">
                        <svg className="absolute inset-0 w-full h-full preserve-3d" viewBox="0 0 800 200">
                            <path className="text-outline-variant" d="M0 120 Q 100 110, 200 130 T 400 100 T 600 120 T 800 90" fill="none" stroke="currentColor" strokeDasharray="4" strokeWidth="2"></path>
                            <path className="text-primary" d="M0 180 L 100 160 L 200 120 L 300 140 L 400 80 L 500 100 L 600 40 L 700 60 L 800 20" fill="none" stroke="currentColor" strokeWidth="3"></path>
                            <path className="opacity-10" d="M0 180 L 100 160 L 200 120 L 300 140 L 400 80 L 500 100 L 600 40 L 700 60 L 800 20 V 200 H 0 Z" fill="url(#chartGradient)"></path>
                            <defs>
                                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop className="text-primary" offset="0%" stopColor="currentColor"></stop>
                                    <stop offset="100%" stop-color="white" stop-opacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute left-[75%] top-[20%] group">
                            <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg cursor-pointer transform -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-primary-container text-on-primary-container text-[11px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                Sept 28: $12,401
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-6 text-label-sm text-label-sm text-secondary font-medium">
                        <span>Sept 01</span>
                        <span>Sept 07</span>
                        <span>Sept 14</span>
                        <span>Sept 21</span>
                        <span>Sept 28</span>
                        <span>Oct 01</span>
                    </div>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col">
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Customer Acquisition</h3>
                    <p className="font-body-sm text-body-sm text-secondary mb-8">Channel performance</p>
                    <div className="space-y-6 flex-1">
                        <div className="space-y-2">
                            <div className="flex justify-between font-label-md text-label-md">
                                <span className="text-primary">Direct Search</span>
                                <span className="font-bold">42%</span>
                            </div>
                            <div className="h-2 bg-surface-container-low rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-[42%] rounded-full"></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between font-label-md text-label-md">
                                <span className="text-primary">Social Media</span>
                                <span className="font-bold">28%</span>
                            </div>
                            <div className="h-2 bg-surface-container-low rounded-full overflow-hidden">
                                <div className="h-full bg-on-primary-container w-[28%] rounded-full"></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between font-label-md text-label-md">
                                <span className="text-primary">Email Marketing</span>
                                <span className="font-bold">18%</span>
                            </div>
                            <div className="h-2 bg-surface-container-low rounded-full overflow-hidden">
                                <div className="h-full bg-surface-tint w-[18%] rounded-full"></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between font-label-md text-label-md">
                                <span className="text-primary">Paid Referral</span>
                                <span className="font-bold">12%</span>
                            </div>
                            <div className="h-2 bg-surface-container-low rounded-full overflow-hidden">
                                <div className="h-full bg-outline w-[12%] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <button className="mt-8 w-full py-3 border border-outline-variant text-primary rounded-xl font-label-md text-label-md hover:bg-surface-container-low transition-all">
                        Generate Full Report
                    </button>
                </div>
            </div>
        </>
    )
}
export default ChartsSection 
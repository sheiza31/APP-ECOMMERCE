const RecentOrders = () => {
    return (
        <>
            <section className="mt-stack-lg bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden">
                <div className="px-6 py-5 border-b border-outline-variant flex justify-between items-center">
                    <h3 className="font-headline-sm text-headline-sm text-primary">Recent Orders</h3>
                    <button className="text-primary font-label-md hover:underline">View All Orders</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface-container-low">
                                <th className="px-6 py-4 text-label-md font-bold text-secondary uppercase tracking-wider">Order ID</th>
                                <th className="px-6 py-4 text-label-md font-bold text-secondary uppercase tracking-wider">Customer</th>
                                <th className="px-6 py-4 text-label-md font-bold text-secondary uppercase tracking-wider">Product</th>
                                <th className="px-6 py-4 text-label-md font-bold text-secondary uppercase tracking-wider">Amount</th>
                                <th className="px-6 py-4 text-label-md font-bold text-secondary uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-label-md font-bold text-secondary uppercase tracking-wider text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant">
                            <tr className="hover:bg-surface-container transition-colors">
                                <td className="px-6 py-4 text-body-sm font-semibold text-primary">#ORD-2841</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-[10px]">SC</div>
                                        <span className="text-body-sm font-medium text-primary">Sophia Chen</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-body-sm text-secondary">Cashmere Scarf, Slate</td>
                                <td className="px-6 py-4 text-body-sm font-bold text-primary">$180.00</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">Processing</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-outline hover:text-primary"><span className="material-symbols-outlined">more_horiz</span></button>
                                </td>
                            </tr>
                            <tr className="hover:bg-surface-container transition-colors">
                                <td className="px-6 py-4 text-body-sm font-semibold text-primary">#ORD-2840</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold text-[10px]">MK</div>
                                        <span className="text-body-sm font-medium text-primary">Marcus King</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-body-sm text-secondary">Tech Briefcase</td>
                                <td className="px-6 py-4 text-body-sm font-bold text-primary">$350.00</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">Shipped</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-outline hover:text-primary"><span className="material-symbols-outlined">more_horiz</span></button>
                                </td>
                            </tr>
                            <tr className="hover:bg-surface-container transition-colors">
                                <td className="px-6 py-4 text-body-sm font-semibold text-primary">#ORD-2839</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-tertiary-fixed-dim flex items-center justify-center text-on-tertiary-fixed font-bold text-[10px]">EL</div>
                                        <span className="text-body-sm font-medium text-primary">Emma Larsson</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-body-sm text-secondary">Wool Overcoat</td>
                                <td className="px-6 py-4 text-body-sm font-bold text-primary">$890.00</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">Delivered</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-outline hover:text-primary"><span className="material-symbols-outlined">more_horiz</span></button>
                                </td>
                            </tr>
                            <tr className="hover:bg-surface-container transition-colors">
                                <td className="px-6 py-4 text-body-sm font-semibold text-primary">#ORD-2838</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-error-container flex items-center justify-center text-on-error-container font-bold text-[10px]">JD</div>
                                        <span className="text-body-sm font-medium text-primary">Julian Drake</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-body-sm text-secondary">Dusk Watch v2</td>
                                <td className="px-6 py-4 text-body-sm font-bold text-primary">$1,200.00</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">Delivered</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-outline hover:text-primary"><span className="material-symbols-outlined">more_horiz</span></button>
                                </td>
                            </tr>
                            <tr className="hover:bg-surface-container transition-colors">
                                <td className="px-6 py-4 text-body-sm font-semibold text-primary">#ORD-2837</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-white font-bold text-[10px]">AL</div>
                                        <span className="text-body-sm font-medium text-primary">Aria Loft</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-body-sm text-secondary">Ceramic Vase Set</td>
                                <td className="px-6 py-4 text-body-sm font-bold text-primary">$245.00</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">Processing</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-outline hover:text-primary"><span className="material-symbols-outlined">more_horiz</span></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}
export default RecentOrders
import { CreditCard,ShoppingCart,TrendingUp,TrendingDown,User } from "lucide-react"
const Metrics = () => {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-stack-lg">
                <div className="bento-card bg-surface-container-lowest p-6 rounded-xl border border-outline-variant">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-primary-fixed rounded-lg text-primary">
                            <span className="material-symbols-outlined"><CreditCard /></span>
                        </div>
                        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]"><TrendingUp /></span> 12%
                        </span>
                    </div>
                    <p className="text-secondary font-label-md mb-1">Total Revenue</p>
                    <p className="font-display-lg text-[28px] text-primary">$48,290.00</p>
                    <p className="text-[11px] text-outline mt-2 italic">vs. last month: $43,116</p>
                </div>
                <div className="bento-card bg-surface-container-lowest p-6 rounded-xl border border-outline-variant">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-secondary-container rounded-lg text-on-secondary-container">
                            <span className="material-symbols-outlined"><ShoppingCart /></span>
                        </div>
                        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]"><TrendingUp /></span> 5%
                        </span>
                    </div>
                    <p className="text-secondary font-label-md mb-1">Total Orders</p>
                    <p className="font-display-lg text-[28px] text-primary">1,240</p>
                    <p className="text-[11px] text-outline mt-2 italic">vs. last month: 1,180</p>
                </div>
                <div className="bento-card bg-surface-container-lowest p-6 rounded-xl border border-outline-variant">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-tertiary-fixed-dim rounded-lg text-on-tertiary-fixed">
                            <span className="material-symbols-outlined"><User /></span>
                        </div>
                        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]"><TrendingUp /></span> 8%
                        </span>
                    </div>
                    <p className="text-secondary font-label-md mb-1">Active Customers</p>
                    <p className="font-display-lg text-[28px] text-primary">856</p>
                    <p className="text-[11px] text-outline mt-2 italic">vs. last month: 792</p>
                </div>
                <div className="bento-card bg-surface-container-lowest p-6 rounded-xl border border-outline-variant">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-error-container rounded-lg text-on-error-container">
                            <span className="material-symbols-outlined"><TrendingDown /></span>
                        </div>
                        <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-1 rounded-full flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]"><TrendingDown /></span> 1%
                        </span>
                    </div>
                    <p className="text-secondary font-label-md mb-1">Conversion Rate</p>
                    <p className="font-display-lg text-[28px] text-primary">3.4%</p>
                    <p className="text-[11px] text-outline mt-2 italic">vs. last month: 3.5%</p>
                </div>
            </section>
        </>
    )
}

export default Metrics
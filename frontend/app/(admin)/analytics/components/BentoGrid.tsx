import { TrendingUp,ShoppingBag,TrendingDown,Settings,Ad,CreditCard } from "lucide-react"
const BentoGrid = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-primary-fixed/30 text-primary rounded-xl group-hover:bg-primary group-hover:text-on-primary transition-colors">
                            <CreditCard />
                        </div>
                        <span className="flex items-center text-green-600 font-label-sm text-label-sm bg-green-50 px-2 py-1 rounded-full">
                            <TrendingUp className="text-[16px] mr-1" />
                            12.5%
                        </span>
                    </div>
                    <h3 className="font-label-md text-label-md text-secondary mb-1">Total Revenue</h3>
                    <p className="font-headline-md text-headline-md text-primary font-bold">$124,592.00</p>
                    <div className="mt-4 h-1 bg-surface-container-low rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-3/4 rounded-full"></div>
                    </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-secondary-container/50 text-on-secondary-container rounded-xl group-hover:bg-black group-hover:text-on-secondary transition-colors">
                            <Ad />
                        </div>
                        <span className="flex items-center text-green-600 font-label-sm text-label-sm bg-green-50 px-2 py-1 rounded-full">
                            <TrendingUp className="text-[16px] mr-1" />
                            3.2%
                        </span>
                    </div>
                    <h3 className="font-label-md text-label-md text-secondary mb-1">Conversion Rate</h3>
                    <p className="font-headline-md text-headline-md text-primary font-bold">4.82%</p>
                    <p className="font-label-sm text-label-sm text-secondary mt-4">Vs. 4.5% last period</p>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-surface-container-highest text-primary rounded-xl group-hover:bg-black group-hover:text-on-primary-container transition-colors">
                            <ShoppingBag className="text-white" />
                        </div>
                        <span className="flex items-center text-red-600 font-label-sm text-label-sm bg-red-50 px-2 py-1 rounded-full">
                            <TrendingDown className="text-[16px] mr-1" />
                            0.8%
                        </span>
                    </div>
                    <h3 className="font-label-md text-label-md text-secondary mb-1">Avg. Order Value</h3>
                    <p className="font-headline-md text-headline-md text-primary font-bold">$186.40</p>
                    <p className="font-label-sm text-label-sm text-secondary mt-4">Benchmark: $190.00</p>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-tertiary-fixed text-on-tertiary-fixed rounded-xl group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                            <Settings />
                        </div>
                        <span className="flex items-center text-green-600 font-label-sm text-label-sm bg-green-50 px-2 py-1 rounded-full">
                            <TrendingUp className="text-[16px] mr-1" />
                            18%
                        </span>
                    </div>
                    <h3 className="font-label-md text-label-md text-secondary mb-1">Total Sessions</h3>
                    <p className="font-headline-md text-headline-md text-primary font-bold">48,201</p>
                    <p className="font-label-sm text-label-sm text-secondary mt-4">84% Organic traffic</p>
                </div>
            </div>
        </>
    )
}

export default BentoGrid
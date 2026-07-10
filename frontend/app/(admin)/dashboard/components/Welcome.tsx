const Welcome = () => {
    return (
        <>
            <section className="flex flex-col md:flex-row justify-between items-start md:items-center mb-stack-lg gap-4">
                <div>
                    <h2 className="font-headline-md text-headline-md text-on-background">Welcome back, Admin</h2>
                    <p className="text-secondary font-body-sm mt-1">Here's what's happening with your store today.</p>
                </div>
                <div className="flex items-center gap-3 bg-surface-container-lowest p-2 rounded-xl shadow-sm border border-outline-variant">
                    <span className="material-symbols-outlined text-outline">calendar_today</span>
                    <input className="border-none bg-transparent text-label-md text-primary focus:ring-0 p-0" type="date" value="2023-10-24" />
                    <span className="material-symbols-outlined text-outline">expand_more</span>
                </div>
            </section>
        </>
    )
}

export default Welcome
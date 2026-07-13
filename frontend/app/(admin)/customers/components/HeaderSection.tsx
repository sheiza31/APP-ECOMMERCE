import { Plus } from "lucide-react"
const HeaderSection = () => {
    return (
        <>
            <div className="flex justify-between items-end mb-stack-lg">
                <div>
                    <nav className="flex gap-2 mb-2">
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Dashboard</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">/</span>
                        <span className="font-body-sm text-body-sm text-primary font-medium">Categories</span>
                    </nav>
                    <h2 className="font-headline-md text-headline-md text-primary">Categories Management</h2>
                </div>
            </div>
        </>
    )
}
export default HeaderSection
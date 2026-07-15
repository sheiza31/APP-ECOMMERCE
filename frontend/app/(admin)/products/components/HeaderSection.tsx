"use client"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"
const HeaderSection = () => {
    const router = useRouter()
    return (
        <>
            <div className="flex justify-between items-end mb-stack-lg">
                <div>
                    <nav className="flex gap-2 mb-2">
                        <span onClick={() => {
                            router.push('/dashboard')
                        }} className="font-body-sm text-body-sm cursor-pointer text-on-surface-variant">Dashboard</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">/</span>
                        <span className="font-body-sm text-body-sm text-primary font-medium">Products</span>
                    </nav>
                    <h2 className="font-headline-md text-headline-md text-primary">Products Management</h2>
                </div>
            </div>
        </>
    )
}
export default HeaderSection
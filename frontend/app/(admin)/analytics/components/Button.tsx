import { Plus } from "lucide-react"
const Button = () => {
    return (
        <>
            <button className="fixed bottom-8 right-8 h-14 w-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all z-50 group">
                <Plus />
                <span className="absolute right-full mr-4 px-3 py-1.5 bg-primary text-on-primary text-label-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Create New Report</span>
            </button>
        </>
    )
}
export default Button
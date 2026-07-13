import { Search, Bell, Settings } from "lucide-react";
const Header = () => {
    return (
        <>
            <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface/80 backdrop-blur-md z-40 shadow-md flex justify-between items-center px-gutter">
                <div className="flex items-center bg-surface-container-low px-4 py-2 rounded-full w-96 border border-outline-variant/30">
                    <Search />
                    <input className="bg-transparent border-none focus:ring-0 text-body-sm font-body-sm w-full ml-2" placeholder="Search analytics, reports, dates..." type="text" />
                </div>
                <div className="flex items-center space-x-4">
                    <button className="p-2 hover:bg-surface-variant/50 rounded-full transition-all relative">
                        <span className="material-symbols-outlined text-primary" data-icon="notifications"><Bell /></span>
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
                    </button>
                    <button className="p-2 hover:bg-surface-variant/50 rounded-full transition-all">
                        <span className="material-symbols-outlined text-primary" data-icon="settings"><Settings /></span>
                    </button>
                    <div className="h-8 w-px bg-outline-variant mx-2"></div>
                    <div className="flex items-center space-x-3 cursor-pointer p-1 pl-3 hover:bg-surface-variant/50 rounded-full transition-all">
                        <span className="text-right hidden sm:block">
                            <p className="font-label-md text-label-md text-primary leading-none">Alex Rivera</p>
                            <p className="font-label-sm text-label-sm text-secondary opacity-70">Senior Analyst</p>
                        </span>
                        <div className="h-10 w-10 rounded-full bg-primary-fixed overflow-hidden border-2 border-surface shadow-sm">
                            <img className="w-full h-full object-cover" data-alt="A professional headshot of a young Hispanic male executive with short dark hair, wearing a clean charcoal grey blazer and a crisp white shirt, photographed in a high-key studio setting with soft lighting and a minimalist light grey background, embodying a modern corporate minimalist aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGhYB5NnA77UJUBtsPFceL4NK0DVPeMSFaNH5FNESCM8pM91ZX1Z8rDszbSlNZAoI_jcjUDM41tAckMhA8g3d8_rle4SRtXr6NrIQNx2HrLfq06QO6jBiJVmbgF-C9FUqTs6kXlJ5w63bIpmxsFqb43TkMSRbf8sSC1B6yLzK-ig7VWDpODAVZjlzQiK_x-nZnwPv5YVHj0YmdeBSTiKLGnAe_MTKAUuXPCwWGz9PC24PqPXV6t0oe2si2moxLXS_FPLafLZzjmrM" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header
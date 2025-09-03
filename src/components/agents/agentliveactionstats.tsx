import { TfiHeadphoneAlt } from "react-icons/tfi"
import { BsFillPhoneVibrateFill } from "react-icons/bs"
import { MdSupportAgent } from "react-icons/md"

export function AgentLiveActionStats() {
    return (
        <div className="grid grid-cols-2 mb-4 gap-4">
            <div className="flex items-center justify-center bg-slate-800 px-2 py-2 text-white md:mt-3 gap-6">
                <div className="flex flex-col">
                <div className="flex items-center justify-center gap-2">
                    <TfiHeadphoneAlt className="w-6 h-6" />
                    <span className="text-2xl lg:text-3xl font-bold text-green-400">5</span>
                </div>
                <span className="text-slate-400">TOTAL TALKING AGENTS</span>
                </div>
                <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <BsFillPhoneVibrateFill className="w-6 h-6" />
                    <span className="text-2xl lg:text-3xl font-bold text-blue-400">4</span>
                </div>
                <span className="text-slate-400">CALLING</span>
                </div>
            </div>

             <div className="flex items-center justify-center bg-slate-800 px-2 py-2 text-white md:mt-3 gap-6">
                <div className="flex flex-col">
                <div className="flex items-center justify-center gap-2">
                    <MdSupportAgent className="w-6 h-6 text-green-400" />
                    <span className="text-2xl lg:text-3xl font-bold">5</span>
                </div>
                <span className="text-slate-400">LOGGED IN</span>
                </div>
                <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <MdSupportAgent className="w-6 h-6 text-rose-400" />
                    <span className="text-2xl lg:text-3xl font-bold">4</span>
                </div>
                <span className="text-slate-400">LOGGED OUT</span>
                </div>
            </div>
        </div>
    )
}
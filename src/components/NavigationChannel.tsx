import { RiCloseFill } from "react-icons/ri";

type NavigationChannelProps = {
    name: string
    icon: string
    status: "online" | "offline" | "dnd" | "iddle"
    close?: boolean
}

export function NavigationChannel({name, icon, status, close}: NavigationChannelProps) {
    return (
        <div className="flex items-center justify-between gap-3 px-2 py-1 text-gray-400 text-[15px] rounded-sm cursor-pointer transition-all duration-100 hover:bg-gray-600 group">
            <div className="flex items-center gap-3 hover:text-gray-50" >
                <div className="relative">
                    <img
                        className="w-8 h-8 rounded-full"
                        src={icon} 
                        alt={`${name}-icon`} 
                    />
                    <span className={
                        `absolute w-4 h-4 right-[-2px] bottom-[-2px] rounded-full border-4 border-gray-700
                        ${status == "online" ? "bg-green-600" : status == "offline" ? "bg-gray-500" : status == "dnd" ? "bg-red-600" : status == "iddle" && "bg-yellow-500"}
                        `} 
                    />
                </div>

                {name}
            </div>

            {close && (
                <div className="transition-all duration-100 scale-0 hover:text-gray-50 group-hover:scale-100">
                    <RiCloseFill
                        size={18} 
                    />
                </div>
            )}
        </div>
    );
}
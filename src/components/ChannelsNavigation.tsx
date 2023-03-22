import { BsFillPersonFill, BsPlus, BsGearFill } from "react-icons/bs";
import { RiVipDiamondFill, RiCloseFill } from "react-icons/ri";
import { MdMic, MdHeadset } from "react-icons/md";
import React from "react";
import { Button } from "./Button";
import { NavigationChannel } from "./NavigationChannel";

type NavigationItemsProps = {
    text: string
    icon: React.ReactNode
}

export function ChannelsNavigation() {
    return (
        <div className="h-screen w-[240px] bg-gray-700 relative" >
            <div className="h-12 border-b-[1px] p-2 border-gray-900">
                <input
                    className="w-[224px] h-7 bg-gray-900  p-1 rounded-sm text-[13px] text-slate-300 placeholder-gray-400"
                    type="text" 
                    placeholder="Encontre ou comece uma conver..." 
                />
            </div>

            <div className="flex flex-col gap-1 p-2">
                <NavigationItems 
                    text="Amigos" 
                    icon={<BsFillPersonFill size={24} />} 
                />
                <NavigationItems 
                    text="Nitro" 
                    icon={<RiVipDiamondFill size={24} />} 
                />
            </div>

            <div className="flex flex-col gap-1 p-2">
                <div className="flex justify-between px-2 text-[12px] text-gray-400 hover:text-gray-50">
                    MENSAGENS DIRETAS
                    <button className="relative w-5 flex items-center justify-center group">
                        <BsPlus className="cursor-pointer" size={20} />
                        <span className="absolute w-auto p-2 min-w-max top-[-42px] z-10
                            rounded-md shadow-md shadow-gray-900
                            text-gray-50 bg-zinc-900 text-xs
                            transition-all duration-100 scale-0 origin-bottom group-hover:scale-100" >
                            Criar DM
                        </span>
                    </button>

                </div>

                <NavigationChannel
                    key={1}
                    name="Ana"
                    icon="https://i.pinimg.com/236x/18/4a/58/184a5862d4385c23b54fd824fc855ae6.jpg"
                    status="dnd"
                    close
                />
                <NavigationChannel
                    key={2}
                    name="Niculinhas"
                    icon="https://i.pinimg.com/236x/ac/de/05/acde05cafccd81474903f9a2066ec19b.jpg"
                    status="offline"
                    close
                />
                <NavigationChannel
                    key={3}
                    name="uGabreeBr"
                    icon="https://i.pinimg.com/236x/fa/72/bc/fa72bc456386fbd7ddf664d6a3237f25.jpg"
                    status="online"
                    close
                />
                <NavigationChannel
                    key={4}
                    name="Edu"
                    icon="https://i.pinimg.com/236x/7b/5d/97/7b5d974ad1133dc9efb3080587420ffc.jpg"
                    status="offline"
                    close
                />
                <NavigationChannel
                    key={5}
                    name="Math"
                    icon="https://i.pinimg.com/236x/c5/28/da/c528da37d1077f7e38a3a2da6f9e1c5a.jpg"
                    status="iddle"
                    close
                />
            </div>

            <div className="absolute bottom-0 h-14 min-w-full flex justify-between items-center gap-2 p-1 bg-zinc-800">
                <div className="flex items-center gap-2 p-1 cursor-pointer rounded-sm hover:bg-gray-700 group">
                    <div className="relative">
                        <img
                            className="w-8 h-8 rounded-full"
                            src="https://i.pinimg.com/236x/d2/22/30/d2223095e7d02abd8da5977919d476b9.jpg"
                            alt="Minha foto"
                        />
                        <span className="absolute w-4 h-4 right-[-2px] bottom-[-2px] rounded-full border-4 border-gray-800 bg-red-600"/>
                    </div>
                    
                    <div className="flex flex-col justify-center">
                        <p className="text-[13px] font-bold text-white" >
                            Naomi Adr...
                        </p>
                        <div className="relative h-4 text-[12px] text-gray-400 overflow-hidden">
                            <div className="absolute transition-all duration-200 top-0 group-hover:top-[-16px]">
                                Numa vib...
                            </div>
                            <div className="absolute transition-all duration-200 top-4 group-hover:top-0 group-hover">
                                #2256
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center">
                    <Button 
                        icon={<MdMic size={20} />} 
                        description="Silenciar"
                    />
                    <Button 
                        icon={<MdHeadset size={20} />} 
                        description="Desativar o áudio"
                    />
                    <Button 
                        icon={<BsGearFill size={20} />} 
                        description="Configurações de Usuário"
                    />
                </div>
            </div>
        </div>
    );
}

function NavigationItems({text, icon}: NavigationItemsProps) {
    return (
        <div className="flex items-center gap-3 p-2 text-gray-400 text-[15px] rounded-sm cursor-pointer transition-all duration-100 hover:bg-gray-600 hover:text-gray-50">
            <span>{icon}</span>
            {text}
        </div>
    );
}


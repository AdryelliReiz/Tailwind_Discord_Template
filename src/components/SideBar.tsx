import { BsPlus, BsFillLightningFill, BsDiscord } from "react-icons/bs";
import {RiCompass3Fill} from "react-icons/ri"

import { SideBarIcon } from "./SidebarIcon";

export function SideBar() {
    return (
        <div className="h-screen w-[70px] m-0 flex flex-col bg-gray-900 text-white shadow-lg bg-primary text-secondary">
            <SideBarIcon
                text="Mensagens diretas"
                icon={
                    <BsDiscord size={28} />
                }
            />
            
            <span className="w-8 h-[2px] mx-auto bg-gray-700" />

            <SideBarIcon
                text="Flash Server"
                typeDefault
                icon={
                    <BsFillLightningFill size={28} />
                } 
            />
            <SideBarIcon 
                text="Adicionar um servidor"
                typeDefault
                icon={
                    <BsPlus size={28} />
                } 
            />
            <SideBarIcon
                text="Explore servidores públicos"
                typeDefault
                icon={
                    <RiCompass3Fill size={28} />
                } 
            />
        </div>
    );
}
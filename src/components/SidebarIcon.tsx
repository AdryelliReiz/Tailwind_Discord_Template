import { ReactNode } from "react";

type Props = {
    icon: ReactNode
    text: string
    typeDefault?: boolean
}

export function SideBarIcon({icon, text,typeDefault}: Props) {
    return (
        <div className="sidebar-icon-container group">
            <span className="indicate-actived group-hover:scale-100 group-hover:h-6 group-hover:rounded-xl group-hover:my-5" />

            <div className={
                `${typeDefault ? "icon-default" : "icon-customer"} sidebar-icon group`
            }>
                {icon}

                <span className="sidebar-tooltip group-hover:scale-100" >
                    {text}
                </span>
            </div>
        </div>
        
    );
}
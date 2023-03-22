import { MdAddReaction, MdMoreHoriz, MdReply } from "react-icons/md";
import { Button } from "./Button";

export type MessageProps = {
    id: number
    type: "author" | "default" | "notification"
    text: string
    date: Date
    author: {
        id: number
        name: string
        icon: string
    }
    icon?: React.ReactNode
    
    /*
    reactions: [{
        id: number
        name: string
        authors: [
            id: number
        ]
    }]
    */
}

export function Message({type, author, text, icon}: MessageProps) {
    return (
        <div className="group relative my-2 flex gap-4 w-full py-1 px-3 hover:bg-gray-700">
            {type === "author" || type === "default" 
                ? <img
                    className="w-10 h-10 rounded-3xl"
                    src={author.icon} 
                    alt={`${author.name}-${author.id}`} /> 
                : type === "notification" && icon && icon
            }

            <div className="">
                <p>
                    <span className="text-[16px] text-gray-100 cursor-pointer hover:underline">
                        {author.name}
                    </span>
                    <span className="text-[11px] text-zinc-400 ml-2" >
                        Hoje às 20:45
                    </span>
                </p>
                <p className="text-[14px] text-gray-400" >
                    {text}
                </p>
            </div>

            <div className="absolute flex scale-0 right-3 top-[-50%] bg-gray-600 border-[1px] border-gray-900 rounded-md hover:shadow-md group-hover:scale-100">
                <Button 
                    style="hover:bg-gray-500"
                    icon={<MdAddReaction size={22} />}
                    description="Adicionar Reação"
                />
                <Button 
                    style="hover:bg-gray-500"
                    icon={<MdReply size={22} />}
                    description="Responder"
                />
                <Button 
                    style="hover:bg-gray-500"
                    icon={<MdMoreHoriz size={22} />}
                    description="Mais"
                />
            </div>
        </div>
    );
}
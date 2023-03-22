import { MdAddIcCall, MdPeopleAlt, MdEmojiEmotions } from "react-icons/md";
import { BsFillCameraVideoFill, BsFillPersonPlusFill, BsFillQuestionCircleFill, BsStickyFill } from "react-icons/bs";
import { RiPushpinFill } from "react-icons/ri";
import { CgInbox } from "react-icons/cg"
import { AiFillPlusCircle, AiOutlineGif } from "react-icons/ai";
import { FaGift } from "react-icons/fa";
import { Message, MessageProps } from "./Message";

type ButtonProps = {
    icon: React.ReactNode
    description: string
}

const messages: MessageProps[] = [
    {
        id: 9,
        type: "author",
        text: "Agora sim... entra call hehehe",
        date: new Date(),
        author: {
            id: 1,
            name: "Naomi Adryan",
            icon: "https://i.pinimg.com/236x/d2/22/30/d2223095e7d02abd8da5977919d476b9.jpg"
        }
    },
    {
        id: 8,
        type: "author",
        text: "Bora poha",
        date: new Date(),
        author: {
            id: 1,
            name: "Edu",
            icon: "https://i.pinimg.com/236x/7b/5d/97/7b5d974ad1133dc9efb3080587420ffc.jpg"
        }
    },
    {
        id: 7,
        type: "author",
        text: "Nem chama...",
        date: new Date(),
        author: {
            id: 1,
            name: "Naomi Adryan",
            icon: "https://i.pinimg.com/236x/d2/22/30/d2223095e7d02abd8da5977919d476b9.jpg"
        }
    },
    {
        id: 6,
        type: "author",
        text: "Vou voltar pro cod",
        date: new Date(),
        author: {
            id: 1,
            name: "Edu",
            icon: "https://i.pinimg.com/236x/7b/5d/97/7b5d974ad1133dc9efb3080587420ffc.jpg"
        }
    },
    {
        id: 5,
        type: "author",
        text: "Ignora menor KKKKKKKK",
        date: new Date(),
        author: {
            id: 1,
            name: "Naomi Adryan",
            icon: "https://i.pinimg.com/236x/d2/22/30/d2223095e7d02abd8da5977919d476b9.jpg"
        }
    },
    {
        id: 4,
        type: "author",
        text: "Vei, pq vcs tão falando em inglês?",
        date: new Date(),
        author: {
            id: 1,
            name: "Edu",
            icon: "https://i.pinimg.com/236x/7b/5d/97/7b5d974ad1133dc9efb3080587420ffc.jpg"
        }
    },
    {
        id: 3,
        type: "author",
        text: "YO Guys",
        date: new Date(),
        author: {
            id: 1,
            name: "Niculinhas",
            icon: "https://i.pinimg.com/236x/ac/de/05/acde05cafccd81474903f9a2066ec19b.jpg"
        }
    },
    {
        id: 2,
        type: "author",
        text: "SUP!",
        date: new Date(),
        author: {
            id: 1,
            name: "uGabreeBr",
            icon: "https://i.pinimg.com/236x/fa/72/bc/fa72bc456386fbd7ddf664d6a3237f25.jpg"
        }
    },
    {
        id: 1,
        type: "author",
        text: "Hello, whats up?",
        date: new Date(),
        author: {
            id: 1,
            name: "Ana",
            icon: "https://i.pinimg.com/236x/18/4a/58/184a5862d4385c23b54fd824fc855ae6.jpg"
        }
    },
]

export function Chat() {
    return (
        <div className="h-screen w-full bg-gray-600 flex flex-col justify-between">
            <header className="h-16 flex items-center justify-between border-b-[1px] px-4 text-zinc-400 border-gray-900">
                <div className="flex items-center gap-2">
                    <MdPeopleAlt size={22} />
                    <p className="text-gray-400 font-semibold" >
                        Bate Papo
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Button 
                        icon={<MdAddIcCall size={22} />} 
                        description="Iniciar chamada de voz"
                    />
                    <Button 
                        icon={<BsFillCameraVideoFill size={22} />} 
                        description="Iniciar chamada de vídeo"
                    />
                    <Button 
                        icon={<RiPushpinFill size={22} />} 
                        description="Mensagens fixadas"
                    />
                    <Button 
                        icon={<BsFillPersonPlusFill size={22} />} 
                        description="Adicionar amigos à DM"
                    />
                    <Button 
                        icon={<MdPeopleAlt size={22} />} 
                        description="Ocultar lista de membros"
                    />

                    <input
                        className="w-[140px] h-6 outline-none bg-gray-900  p-2 rounded-sm text-[13px] text-slate-300 placeholder-gray-400"
                        type="text" 
                        placeholder="Buscar" 
                    />
                    
                    <Button 
                        icon={<CgInbox size={22} />} 
                        description="Caixa de Entrada"
                    />
                    <Button 
                        icon={<BsFillQuestionCircleFill size={22} />} 
                        description="Ajuda"
                    />
                </div>
            </header>

            <div className="h-full w-full flex flex-col-reverse overflow-y-scroll">
                {messages.map((message, i) => (
                    <Message 
                        key={i}
                        id={message.id}
                        type={message.type}
                        author={message.author}
                        text={message.text}
                        date={message.date}
                    />
                ))}
            </div>

            <div className="w-full px-3 pb-4">
                <div className="h-12 px-4 bg-gray-500 text-gray-400 rounded-md flex items-center gap-3">
                    <button className="hover:text-gray-50" >
                        <AiFillPlusCircle size={24} />
                    </button>

                    <input
                        className="w-full h-12 outline-none bg-transparent p-2 rounded-sm text-[15px] text-slate-300 placeholder-zinc-400"
                        type="text" 
                        placeholder="Conversar em Bate Papo" 
                    />

                    <button className="hover:text-gray-50" >
                        <FaGift size={24} />
                    </button>
                    <button className="hover:text-gray-50" >
                        <AiOutlineGif size={24} />
                    </button>
                    <button className="hover:text-gray-50" >
                        <BsStickyFill size={24} />
                    </button>
                    <button className="hover:text-gray-50" >
                        <MdEmojiEmotions size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
}

function Button({icon, description}: ButtonProps) {
    return (
        <button className="w-[22px] h-[22px] flex items-center justify-center rounded-sm text-gray-400 hover:text-gray-50 group" >
            {icon}

            <span className="absolute w-auto p-2 m-2 min-w-max top-[42px] z-10
                rounded-md shadow-md shadow-gray-900
                text-gray-50 bg-zinc-900 text-xs
                transition-all duration-100 scale-0 origin-top group-hover:scale-100" >
                {description}
            </span>
        </button>
    );
}
interface AutoButtonPros {
    icon: React.ReactNode
    description: string
    style?: string
}

export function Button({icon, description, style}: AutoButtonPros) {
    return (
        <div>
            <button className={`relative w-[32px] h-[32px] flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-700 hover:text-gray-50 group ${style}`} >
                {icon}

                <span className="absolute w-auto p-2 m-2 min-w-max top-[-48px] z-10
                    rounded-md shadow-md shadow-gray-900
                    text-gray-50 bg-zinc-900 text-xs
                    transition-all duration-100 scale-0 origin-bottom group-hover:group-first:scale-100">
                    {description}
                </span>
            </button>
        </div>
    );
}
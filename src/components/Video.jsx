import clsx from "clsx"

export default function Video({image,title,channel}){
    return(<article className={clsx('flex flex-col gap-2', {'hidden': !channel})}>
        <img src={image} alt="" className="w-full rounded-lg object-cover aspect-video"/>
        <footer className="grid gap-2 grid-cols-[3rem_1fr]">
            {
                channel ? (
                    <img src={`https://api.dicebear.com/8.x/notionists-neutral/svg?seed=${channel}`} alt="" className="col-start-1 col-end-2"/>
                ):(
                    <span>🤷‍♂️</span>
                )
            }
            <p className="col-start-2 col-end-3">{title}</p>
            <p className="col-start-2 col-end-3">{channel}</p>
        </footer>
    </article>
    )
}
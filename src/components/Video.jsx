import clsx from "clsx"

export default function Video({image,title,channel}){
    // const articleClassnames =
    // "video-card" + (channel === "Marques Brownlee" ? " special" : " ")

    return(<article className={clsx('video-card', {'special': !channel})}>
        <img src={image} alt="" />
        <footer>
            {/* {
                channel && (
                    <img src={`https://api.dicebear.com/8.x/notionists-neutral/svg?seed=${channel}`} alt="" />
                )
            }
            {
                !channel && <span>🤷‍♂️</span>
            } */}
            {
                channel ? (
                    <img src={`https://api.dicebear.com/8.x/notionists-neutral/svg?seed=${channel}`} alt="" />
                ):(
                    <span>🤷‍♂️</span>
                )
            }
            <p className="video-card-title">{title}</p>
            <p className="video-card-channel">{channel}</p>
        </footer>
    </article>
    )
}
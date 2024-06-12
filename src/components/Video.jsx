export default function Video({image,title,channel}){
    return(<article className="video-card">
        <img src={image} alt="" />
        <footer>
            <img src={`https://api.dicebear.com/8.x/notionists-neutral/svg?seed=${channel}`} alt="" />
            <p className="video-card-title">{title}</p>
            <p className="video-card-channel">{channel}</p>
        </footer>
    </article>
    )
}
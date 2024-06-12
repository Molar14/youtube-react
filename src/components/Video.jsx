export default function Video({image,title,channel}){
    return(<article className="video-card">
        <img src={image} alt="" />
        <footer>
            <img src="" alt="" />
            <p className="video-card-title">{title}</p>
            <p className="video-card-channel">{channel}</p>
        </footer>
    </article>
    )
}
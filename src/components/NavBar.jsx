import YouTube from "./YouTubeLogo"

export default function NavBar(){
    return <nav id="navbar">
        <div>
            <YouTube height="1.8rem" width="3rem" />
            <span>YouTube</span>
        </div>
        <div id="search-container">
            <input type="text" placeholder="Search" />
        </div>
        <div id="user-icon">
            <img src="https://api.dicebear.com/8.x/notionists-neutral/svg?seed=Luna" alt="user" />
        </div>
    </nav>
}
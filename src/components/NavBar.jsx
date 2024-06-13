import YouTube from "./YouTubeLogo"

export default function NavBar(){
    return <nav className="grid col-start-1 col-end-3 grid-cols-3" >
        <div className="flex flex-row items-center gap-1 pl-4">
            <YouTube height="1.8rem" width="3rem" />
            <span>YouTube</span>
        </div>
        <div className="flex items-center justify-center">
            <input type="text" placeholder="Search" className="w-full pl-4 pr-4 pt-2 pb-2  border-1 border-solid border-[#282828] bg-transparent rounded-[1rem]"/>
        </div>
        <div className="flex justify-end">
            <img src="https://api.dicebear.com/8.x/notionists-neutral/svg?seed=Luna" alt="user" className="w-8 h-8 rounded-full"/>
        </div>
    </nav>
}
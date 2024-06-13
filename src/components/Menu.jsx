export default function Menu(){
const menuItems = [
    {icon: "🏠", text:"Home"},
    {icon: "🩳", text:"Shorts"},
    {icon: "⏰", text:"Subscripcions"}]

    return <aside className="col-start-1 col-end-2 row-start-2 row-end-3 pl-0 pr-4 pt-0 pb-0">
        {menuItems.map((item)=>{
            return (
                <div key={`menu-items-${item.text}`} className="p-4 rounded-[20px] flex flex-row gap-2 items-center hover:bg-[#282828]">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                </div>
            )
        })}
    </aside>
}
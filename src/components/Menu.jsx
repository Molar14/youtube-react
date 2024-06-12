export default function Menu(){
const menuItems = [
    {icon: "🏠", text:"Home"},
    {icon: "🩳", text:"Shorts"},
    {icon: "⏰", text:"Subscripcions"}]

    return <aside id="menu">
        {menuItems.map((item)=>{
            return (
                <div key={`menu-items-${item.text}`} className="menu-item">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                </div>
            )
        })}
    </aside>
}
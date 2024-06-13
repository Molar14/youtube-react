export default function Categories(){
    const categories = [
        "All",
        "Music",
        "Gaming",
        "Code",
        "Programming",
        "Life Style",
        "Sports"
    ]

    return(
        <div className="flex flex-row gap-4">
            {categories.map((category)=>{
                return (
                    <span key={`category-${category}`} className="pl-4 pr-4 pt-2 pb-2 rounded-[20px] bg-[#282828]">
                        {category}
                    </span>
                )
            })}
        </div>
    )
}
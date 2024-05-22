
const Comment = () => {
    return (
        <div className="flex gap-2">
            <img src="/p2.jpeg" alt="" className="size-[40px] rounded-full" />
            <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                    <h1>Username</h1>
                    <span className="text-gray-500 text-sm">3 days ago</span>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi obcaecati aperiam, vel, nam laborum cupiditate amet earum autem illum delectus, nostrum quod rem accusantium!</p>            </div>
        </div>
    )
}

export default Comment
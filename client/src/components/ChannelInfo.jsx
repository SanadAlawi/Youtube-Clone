
const ChannelInfo = () => {
    return (
        <div className="flex gap-4">
            <img src="/p1.jpeg" alt="profile" className="size-[40px] rounded-full" />
            <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                    <div>
                        <h1>Username</h1>
                        <p className="text-gray-600 text-sm">150k subscibers</p>
                    </div>
                    <button className="text-white uppercase border border-red-600 bg-red-600 font-bold px-5 rounded-md">subscribe</button>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis totam quidem ducimus earum rerum voluptas!</p>
            </div>
        </div>
    )
}

export default ChannelInfo
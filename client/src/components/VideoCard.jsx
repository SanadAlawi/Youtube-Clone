import { Link } from "react-router-dom"

const VideoCard = ({ id, cover, date, profile, title, username, views, type }) => {

    return (
        <Link to={`/video/${id}`} className="flex flex-col gap-4">
            <img src={cover} alt="cover" className="w-full h-[202px] rounded-lg" />

            <div className="flex gap-2">
                {!type && <img src={profile} alt="profile" className="size-[40px] rounded-2xl" />}
                <div className="flex flex-col">
                    <p>{title}</p>
                    <span className="text-gray-500">{username}</span>
                    <span className="text-gray-400">{views} . {date}</span>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard
import { VideoCard } from "../components"
import { videos } from "../utils"

const Home = () => {
  return (
    <div className="p-4 h-full grid gap-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
        {videos.map(video => <VideoCard key={video.id} {...video} />)}
    </div>
  )
}

export default Home
import AddComment from "../components/AddComment"
import ChannelInfo from "../components/ChannelInfo"
import Comment from "../components/Comment"
import VideoInfo from "../components/VideoInfo"
import VideoCard from '../components/VideoCard'
import { videos } from "../utils"

const Video = () => {


  return (
    <div className="flex p-4 gap-4">

      {/* CONTENT */}
      <div className="flex-[5] flex flex-col gap-5">

        {/* VIDEO INFO */}
        <VideoInfo />
        <hr />

        {/* CHANNEL INFO */}
        <ChannelInfo />
        <hr />

        {/* ADD A COMMENT */}
        <AddComment />

        {/* COMMENTS */}
        <div className="flex flex-col gap-4 mt-8">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>

      </div>


      {/* VIDEOS */}
      <div className="flex-[2] flex flex-col gap-4">
        {
          videos.map(video =>
            <VideoCard key={video.id} {...video} type='vertical' />
          )
        }


      </div>

    </div>
  )
}

export default Video
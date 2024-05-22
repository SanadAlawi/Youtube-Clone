import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ReplyIcon from '@mui/icons-material/Reply';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const VideoInfo = () => {
  return (
    <div className="flex flex-col gap-2">
      <iframe
        width="750"
        height="415"
        src="https://www.youtube.com/embed/0FFLFcB9xfQ?si=RJ5DuFnl7obkDagg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>

      </iframe>
      <h1 className='text-xl'>React Testing Tutorial with React Testing Library and jest</h1>

      <div className="flex justify-between items-center">
        <p className="text-gray-600 text-sm">7,948,154 views . Jun 22,2022</p>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center cursor-pointer">
            <ThumbUpIcon />
            123
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <ThumbDownIcon />
            Dislike
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <ReplyIcon />
            Share
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <SaveAltIcon />
            Save
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoInfo
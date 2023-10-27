import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info,"info")
    // const {snippet,statistics}=info;
    // const {channelTitle,title,thumbnails}=snippet;
    // console.log(snippet,statistics)
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
    <img src={info?.snippet?.thumbnails?.medium?.url} alt="Video" />
    <ul>
        <li className="font-bold">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount}</li>
    </ul>
    </div>
  )
}
export const AdVideoCard= ({info})=>{
  return (<div className="p-1 m-1 border border-red-500">
      <VideoCard info={info}/>
      </div>)
}
export default VideoCard
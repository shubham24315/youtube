import React, { useEffect } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import { useState } from 'react'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { AdVideoCard } from './VideoCard'
const VideoContainer = () => { 
  
    const [videos,setVideos]=useState([])
    useEffect(() => {
      const getVideos=async()=>{
         const data=await fetch(YOUTUBE_VIDEOS_API);
            const response=await data.json();
            setVideos(response.items)
            // console.log(response)
      }
        getVideos()
    }, [])
  return (
    <div className="flex flex-wrap">
      <AdVideoCard info={videos[0]}/>
        {
            videos.map(video=>(
                <Link to={"/watch?v="+video.id}key={video.id} > 
            <VideoCard  info={video}/></Link>
            ))
        }
      
    </div>
  )
}


export default VideoContainer
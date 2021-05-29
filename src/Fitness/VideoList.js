import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, handleVideoSelect }) => {
  const renderedVideos = videos.map((video) => {
    return (
      <div
        style={{
          margin: 'auto',
          width: '60%',
          border: '5px solid black',
          padding: '10px',
          background: 'black',
        }}
        key={video.id.videoId}
      >
        <VideoItem
          key={video.id.videoId}
          video={video}
          handleVideoSelect={handleVideoSelect}
        />
      </div>
    )
  })

  return <div>{renderedVideos}</div>
}
export default VideoList

import React from 'react'
import '../styles/video.css'

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div
      onClick={() => handleVideoSelect(video)}
      style={{
        margin: 'auto',
        width: '60%',
        padding: '10px',
      }}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div style={{ color: 'white' }}>
        <div>{video.snippet.title}</div>
      </div>
    </div>
  )
}
export default VideoItem

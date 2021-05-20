import React from "react";


const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>
       <h1 style = {{color: "white", textAlign: "center"}}>Choose your workout!!</h1>
       <br></br>
       <br />
    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div style={{
      margin: 'auto',
      width: '60%',
      // border: "5px solid black",
      padding: '10px',
    }}>
      <div>
        <iframe 
          src={videoSrc} 
          allowFullScreen 
          title="Video player" 
          style={{ width: '840px', height: '420px' }}
        />
      </div>
      <div style={{ color: 'white' }}>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
import React, { Fragment } from 'react'

const VideoDetail = ({ selectedVideo }) => {
  if(!selectedVideo) {
    return <div>Loading...</div>
  }

  const videoId = selectedVideo.id.videoId; // 
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Fragment>
      {/* A JSX comment */}
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={videoUrl} frameBorder="0" title={selectedVideo.snippet.title} className="embed-responsive-item" allowFullScreen></iframe>
      </div>
      <h2>{selectedVideo.snippet.title}</h2>
      <p>{selectedVideo.snippet.description}</p>
    </Fragment>
  )
}

export default VideoDetail;

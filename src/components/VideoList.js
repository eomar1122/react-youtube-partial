import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, videoSelect }) => {
  const videoArray = videos.map(video => {
    return (
      <VideoListItem 
        video={ video } 
        key={ video.id.videoId }
        videoSelect={ videoSelect }
      />
    )
  })
  return (
    <ul>
      {videoArray}
    </ul>
  )
}

export default VideoList;

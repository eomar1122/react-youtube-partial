import React from 'react';
import "./style.css";

const VideoListItem = ({ video, videoSelect }) => {
  return (
    <li id="list" onClick={() => videoSelect(video)}>
      <img src={video.snippet.thumbnails.medium.url} />
    </li>
  )
}

export default VideoListItem;

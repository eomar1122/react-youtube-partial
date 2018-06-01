import React from 'react';

const VideoListItem = ({ video, videoSelect }) => {
  return (
    <li onClick={() => videoSelect(video)}>
      <img src={video.snippet.thumbnails.default.url} />
    </li>
  )
}

export default VideoListItem;

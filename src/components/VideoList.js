import React from 'react'

const VideoList = ({ videos }) => {
  const videoArray = videos.map(video => {
    return (
      <li>Video will go here</li>
    )
  })
  return (
    <ul>
      {videoArray}
    </ul>
  )
}

export default VideoList;

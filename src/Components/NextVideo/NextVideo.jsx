// import React from "react";
// import "../NextVideo/NextVideo.scss"

// function NextVideo({videoId, image, title, channel, handleVideoChange }) {

//   return (

//     <div onClick={() => {handleVideoChange(videoId)}} className="next-video__container">
//       <img className="next-video__thumbnail" src={image} alt="thumbnail" />
//       <div className="next-video__data">
//         <div className="next-video__title">{title}Test</div>
//         <div className="next-video__author">{channel}Test</div>
//       </div>
//     </div>
//   );
// }

// export default NextVideo;


import React from "react";
import "../NextVideo/NextVideo.scss";

function NextVideo({ video, handleVideoChange }) {
  const { id, image, title, channel } = video;

  return (
    <div onClick={() => handleVideoChange(id)} className="next-video__container">
      <img className="next-video__thumbnail" src={image} alt="thumbnail" />
      <div className="next-video__data">
        <div className="next-video__title">{title}</div>
        <div className="next-video__author">{channel}</div>
      </div>
    </div>
  );
}

export default NextVideo;

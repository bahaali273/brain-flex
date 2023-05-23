// import React from "react";
// // import '../VideoPlayer/VideoPlayer.scss';
// import "../../Components/VideoPlayer/VideoPlayer.scss";
// // import NextVideo from "../NextVideo/NextVideo";
// // import videosData from "../../../src/assets/Data/videos.json";

// function VideoPlayer({ currentVideo, handleVideoChange2 }) {
//   return (
//     <section className="video">
//         <video className="video__player" src="" controls poster={currentVideo.image}></video>
//       <div className="video__wrapper">
      
//       </div>
//     </section>
//   );
// }

// export default VideoPlayer;

import React from "react";
import "../VideoPlayer/VideoPlayer.scss";
 import viewsIcon from "../../assets/Icons/views.svg";
 import likesIcon from "../../assets/Icons/likes.svg";

function VideoPlayer({ currentVideo }) {
  return (
    <section className="video">
      
      <div className="video__wrapper">
      <video className="video__player" src={currentVideo.videoUrl} controls poster={currentVideo.image}></video>
      </div>
      <section className='vid-details'>
      <div className='vid-details__wrapper'>
      <div className="vid-details__title">{currentVideo.title}</div>
      <div className="vid-details__info-wrapper">
          <div className="vid-details__info-left">
            <div className="vid-details__info-left--by">
              <p className="vid-details__info-left--by-info">{currentVideo.channel}</p>
            </div>
            <div className="vid-details__info-left--date">
              {/* <p className="vid-details__info-left--date-info">{currentVideo.comments}</p> */}
            </div>
            <div className="vid-details__info-right">
            <div className="vid-details__info-right--views">
              <img
                className="vid-details__info-right--views-icon"
                src={viewsIcon}
                alt="views icon"
              />
              <p className="vid-details__info-right--views-info">
                {currentVideo.views.toLocaleString("en-US")}
              </p>
            </div>
            <div className="vid-details__info-right--likes">
              <img
                className="vid-details__info-right--likes-icon"
                src={likesIcon}
                alt="like icon"
              />
              <p className="vid-details__info-right--likes-info">
                {currentVideo.likes.toLocaleString("en-US")}
              </p>
            </div>
          </div>
        </div>
        <div className="vid-details__description-section">
          <p className="vid-details__description">{currentVideo.description}</p>
            </div>
            </div>

        </div>




        </section>
      {/* <h2>{currentVideo.title}</h2> */}
        {/* <p>{currentVideo.description}</p> */}
    </section>


      
    
  );
}

export default VideoPlayer;

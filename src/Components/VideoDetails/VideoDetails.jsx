import React from "react";
import "../VideoDetails/VideoDetails.scss";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import videosData from "../../../src/assets/Data/videos.json";
import videosDataDetails from "../../../src/assets/Data/video-details.json";

function VideoDetails({ activeVideoId, currentVideo }) {
  const activeVideo = videosDataDetails.find((video) => video.id === activeVideoId);

  if (!activeVideo) return null;

  const { title, channel, comments, views, likes } = activeVideo;

  return (
    
    <section className="vid-details">
      <div className="vid-details__wrapper">
        <div className="vid-details__title">{activeVideo.title}</div>
        <div className="vid-details__info-wrapper">
          <div className="vid-details__info-left">
            <div className="vid-details__info-left--by">
              <p className="vid-details__info-left--by-info">{activeVideo.channel}</p>
            </div>
            <div className="vid-details__info-left--date">
              <p className="vid-details__info-left--date-info">{activeVideo.comments}</p>
            </div>
          </div>
          <div className="vid-details__info-right">
            <div className="vid-details__info-right--views">
              <img
                className="vid-details__info-right--views-icon"
                src={viewsIcon}
                alt="views icon"
              />
              <p className="vid-details__info-right--views-info">
                {activeVideo.views.toLocaleString("en-US")}
              </p>
            </div>
            <div className="vid-details__info-right--likes">
              <img
                className="vid-details__info-right--likes-icon"
                src={likesIcon}
                alt="like icon"
              />
              <p className="vid-details__info-right--likes-info">
                {activeVideo.likes.toLocaleString("en-US")}
              </p>
            </div>
          </div>
        </div>
        <div className="vid-details__description-section">
          <p className="vid-details__description">{currentVideo.description}</p>
        </div>
      </div>
    </section>
  );
}

export default VideoDetails;

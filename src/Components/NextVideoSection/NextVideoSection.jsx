// export default NextVideoSection;
import React from "react";
import NextVideo from "../NextVideo/NextVideo";
import videosData from "../../../src/assets/Data/videos.json";
import "../NextVideoSection/NextVideoSection.scss";

function NextVideoSection({ currentVideo, handleVideoChange }) {
  const nextVideosData = videosData.filter((video) => video.id !== currentVideo.id);

  return (
    <section className="next-video__section">
      <div className="next-video__heading">NEXT VIDEOS</div>
      <div className="next-video__list">
        <div className="next-video__list-wrapper">
          {nextVideosData.map((video) => (
            <NextVideo
              key={video.id}
              video={video}
              handleVideoChange={handleVideoChange}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NextVideoSection;

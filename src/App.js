import React, { useState } from "react";
import "./App.scss";
import Comments from "./Components/Comments/Comments";
import CommentSection from "./Components/CommentSection/CommentSection";
import NewCommentForm from "./Components/NewCommentForm/NewCommentForm";
import PageHeader from "./Components/PageHeader/PageHeader";
import videosDetails from "../src/assets/Data/video-details.json";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import VideoDetails from "./Components/VideoDetails/VideoDetails";
import NextVideoSection from "./Components/NextVideoSection/NextVideoSection";

function App() {
  const [videos, setVideos] = useState(videosDetails);
  const [currentVideo, setCurrentVideo] = useState(videosDetails[0]);

  function getActiveVideo() {
    return videosDetails.find((video) => video.id === currentVideo.id) || {};
  }

  const handleVideoChange = (newVideoId) => {
    setCurrentVideo(videosDetails.find((video) => video.id === newVideoId));
  };

  return (
    <div className="App">
      <PageHeader />
      <VideoPlayer currentVideo={currentVideo} image={videosDetails[0].image} />
     <div className="video-container">
  <div className="video-details">
    <VideoDetails activeVideo={getActiveVideo()} />
  </div>
  <div className="comment-section">
    <CommentSection activeVideoId={currentVideo.id} currentVideo={currentVideo} />
  </div>
  <div className="next-video-section">
    <NextVideoSection handleVideoChange={handleVideoChange} currentVideo={currentVideo} />
  </div>
</div>

    </div>
  );
}

export default App;


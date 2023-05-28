import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Home from './Pages/Home/Home';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Upload from './Pages/Upload/Upload';


function App() {
    // const [videos, setVideos] = useState(videosDetails);
    // const [currentVideo, setCurrentVideo] = useState(videosDetails[0]);

   

  

    return (
        // <div className="App">
        //     <PageHeader />
        //     <VideoPlayer
        //         currentVideo={currentVideo}
        //         image={videosDetails[0].image}
        //     />
        //     <div className="video-container">
        //         <div className="video-details">
        //             <VideoDetails activeVideo={getActiveVideo()} />
        //         </div>
        //         <div className="comment-section">
        //             <CommentSection
        //                 activeVideoId={currentVideo.id}
        //                 currentVideo={currentVideo}
        //             />
        //         </div>
        //         <div className="next-video-section">
        //             <NextVideoSection
        //                 handleVideoChange={handleVideoChange}
        //                 currentVideo={currentVideo}
        //             />
        //         </div>
        //     </div>
        // </div>
        // <div className='App'>
			<BrowserRouter>
				<PageHeader />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/upload' element={<Upload />} />
					<Route path='/videos/:id' element={<Home />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		// </div>
    );
}

export default App;

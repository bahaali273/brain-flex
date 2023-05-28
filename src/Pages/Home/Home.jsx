import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../Components/VideoDetails/VideoDetails";
import CommentSection from "../../Components/CommentSection/CommentSection";
import NextVideoSection from "../../Components/NextVideoSection/NextVideoSection";
import PageNotFound from "../PageNotFound/PageNotFound";

const api_url = "https://project-2-api.herokuapp.com";
const apiKey = `0a56ac57-bab8-430a-9688-ee61d17553c0`;

export default function Home() {
    const { id } = useParams();
    const [nextVideoData, setNextVideoData] = useState([]);
    const [activeVideo, setActiveVideo] = useState(null);
    const [defaultVideoId, setDefaultVideoId] = useState(null);

    function getVideoListData() {
        axios
            .get(`${api_url}/videos?api_key=${apiKey}`)
            .then((response) => {
                setNextVideoData(response.data);
                setDefaultVideoId(response.data[0].id);
            })
            .catch((error) => {
                console.log("error", error);
            });
    }

    const handleVideoChange = (newVideoId) => {
        setActiveVideo(nextVideoData.find((video) => video.id === newVideoId));
    };

    function getActiveVideo() {
        return nextVideoData.find((video) => video.id === activeVideo.id) || {};
    }

    function getSingleVideo(videoID) {
        axios
            .get(`${api_url}/videos/${videoID}?api_key=${apiKey}`)
            .then((response) => {
                setActiveVideo(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getVideoListData();
        console.log(nextVideoData);
    }, []);

    useEffect(() => {
        if (id) {
            console.log("id", id);
            getSingleVideo(id);
        } else if (defaultVideoId) {
            console.log("def ", defaultVideoId);
            getSingleVideo(defaultVideoId);
        }
    }, [id, nextVideoData]);

    console.log("HERE");
    console.log(nextVideoData);
    console.log(activeVideo);

    return activeVideo && nextVideoData ? (
        <>
            <VideoPlayer activeVideo={activeVideo} />
            <div className="main-container">
                <div className="vid-details-comment-container">
                    <VideoDetails activeVideo={activeVideo} />
                    <CommentSection
                        commentData={activeVideo.comments}
                        api_url={api_url}
                        activeVideoId={activeVideo.id}
                    />
                </div>
                <NextVideoSection
                    handleVideoChange={handleVideoChange}
                    activeVideo={activeVideo}
                    nextVideoData={nextVideoData}
                />
            </div>
        </>
    ) : (
        <PageNotFound />
    );
}

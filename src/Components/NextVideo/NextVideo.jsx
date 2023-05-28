import React from "react";
import "../NextVideo/NextVideo.scss";
import { Link } from "react-router-dom";

function NextVideo({ id, image, title, channel, handleVideoChange }) {
    return (
        <Link to={`/videos/${id}`} className="next-video__container">
            <img
                className="next-video__thumbnail"
                src={image}
                alt="thumbnail"
            />
            <div className="next-video__data">
                <div className="next-video__title">{title}Test</div>
                <div className="next-video__author">{channel}Test</div>
            </div>
        </Link>
    );
}

export default NextVideo;

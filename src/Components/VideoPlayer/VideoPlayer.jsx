import React from "react";
import "../VideoPlayer/VideoPlayer.scss";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";

function VideoPlayer({ activeVideo }) {
    return (
        <section className="video">
            <div className="video__wrapper">
                <video
                    className="video__player"
                    src={activeVideo?.video}
                    controls
                    poster={activeVideo?.image}
                ></video>
            </div>
            <br></br>
            <section className="vid-details">
                <div className="vid-details__wrapper">
                    <div className="vid-details__title">
                        {activeVideo?.title}
                    </div>
                    <div className="vid-details__info-wrapper">
                        <div className="vid-details__info-left">
                            <div className="vid-details__info-left--by">
                                <p className="vid-details__info-left--by-info">
                                    {activeVideo?.channel}
                                </p>
                            </div>
                            <div className="vid-details__info-left--date"></div>

                            <div className="vid-details__info-right">
                                <div className="vid-details__info-right--views">
                                    <img
                                        className="vid-details__info-right--views-icon"
                                        src={viewsIcon}
                                        alt="views icon"
                                    />
                                    <p className="vid-details__info-right--views-info">
                                        {activeVideo?.views.toLocaleString(
                                            "en-US"
                                        )}
                                    </p>
                                </div>
                                <div className="vid-details__info-right--likes">
                                    <img
                                        className="vid-details__info-right--likes-icon"
                                        src={likesIcon}
                                        alt="like icon"
                                    />
                                    <p className="vid-details__info-right--likes-info">
                                        {activeVideo?.likes.toLocaleString(
                                            "en-US"
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </section>
            <section>
                            <div className="vid-details__description-section">
                                <p className="vid-details__description">
                                    {activeVideo?.description}
                                </p>
                            </div>
                        </section>
        </section>
    );
}

export default VideoPlayer;

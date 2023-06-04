import React from "react";
import{useState} from "react";
import "../Upload/Upload.scss";
// import { pi_url } from "../Home/Home";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import uploadThumbnail from "../../assets/Images/Upload-video-preview.jpg";
const api_url = "http://localhost:5001";

export default function Upload() {
    const navigate = useNavigate();
    const [videoTitle, setVideoTitle]= useState("");
    const [videoDescription, setVideoDescription]=useState("");
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const newVideo = {
    //         title: event.target.title.value,
    //         desc: event.target.desc.value,//description 
    //     };
    //     if (newVideo.title && newVideo.desc) {
    //         alert("Your video has been published to BrainFlix");
    //         event.target.reset();
    //         axios
    //             .post(`${api_url}/videos`, newVideo)
    //             .then(() => {
    //                 navigate("/");
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //     }
    // };
    const handleChangeDescription = (event) => {
        setVideoDescription(event.target.value);
      };
      const handleChangeTitle = (event) => {
        setVideoTitle(event.target.value);
      };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (videoTitle.trim() === "" || videoDescription.trim() === "") {
          alert("Please fill in all fields");
        } else {
          axios
            .post(`${api_url}/videos`, {
              title: videoTitle,
              description: videoDescription,
            })
            .then(() => {
              alert("Thank you for uploading!");
              navigate("/");
            })
            .catch((err) => {
              console.log(err);
            });
    
          event.target.reset();
        }
      };
    return (
        <section className="upload">
            <div className="upload__page-title-wrapper">
                <h1 className="upload__page-title">Upload Video</h1>
            </div>
            <div className="upload__wrapper">
                <form
                    className="upload__form"
                    action="submit"
                    onSubmit={handleSubmit}
                >
                    <div className="upload__form-wrapper">
                        <div className="upload__video-section">
                            <p className="upload__label">VIDEO THUMBNAIL</p>
                            <img
                                className="upload__thumbnail"
                                src={uploadThumbnail}
                                alt="Upload Video Thumbnail"
                            />
                        </div>
                        <div className="upload__details-wrapper">
                            <div className="upload__details">
                                <label
                                    className="upload__label"
                                    htmlFor="title"
                                >
                                    TITLE YOUR VIDEO
                                </label>
                                <input
                                    className="upload__title"
                                    // name="title"
                                    id="name"
                                    placeholder="Add a title to your video"
                                    type="text"
                                    name="videoTitle"
                  onChange={handleChangeTitle}
                  value={videoTitle}
                                />
                            </div>
                            <div className="upload__details">
                                <label className="upload__label" htmlFor="desc">
                                    ADD A VIDEO DESCRIPTION
                                </label>
                                <textarea
                                    className="upload__desc"
                                    // name="desc"
                                    id="desc"
                                    placeholder="Add a description to your video"
                                    cols="30"
                                    rows="5"
                                    name="videoDescription"
                                    onChange={handleChangeDescription}
                                    value={videoDescription}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="upload__btn-section">
                        <div className="upload__btn-wrapper">
                            <button
                                className="upload__btn-publish"
                                type="submit"
                            >
                                PUBLISH
                            </button>
                            <button className="upload__btn-cancel" type="reset">
                                CANCEL
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

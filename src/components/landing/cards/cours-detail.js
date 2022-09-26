import "./cours-detail.css";

import { useEffect } from "react";
import React, { useState } from "react";

const CoursesDetails = (props) => {
  const [vid, setVid] = useState(props.videos[0]);
  const [videos, setVideos] = useState([]);
  const onClickList = (vi) => {
    const currentVideo = document.getElementById(vid);
    const nextVideo = document.getElementById(vi);

    currentVideo.classList.remove("active");
    nextVideo.classList.add("active");
    setVid(vi);
  };
  useEffect(() => {
    setVideos(props.videos);
  }, []);

  return (
    <div className="container">
      <h3>all the course videos</h3>
      <div className="video-container">
        <div className="main-video">
          <div className="video">
            <video src={vid} controls muted autoPlay></video>
          </div>
        </div>
        <div className="video-list">
          {videos.map((video) => (
            <div
              id={video}
              key={video}
              className="vid"
              onClick={() => onClickList(video)}
            >
              <video src={video}></video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CoursesDetails;

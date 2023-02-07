import React from "react";
import ReactPlayer from "react-player";
import { RiArrowLeftLine } from "react-icons/ri";

const MainVideoPlayer = ({
    infoBox,
    setInfoBox,
    url,
    fullVideo,
    fullVideoPlaying,
    setFullVideoPlaying
}) => {

    const closeVideoPlayer = () => {
        setFullVideoPlaying(false);
        setInfoBox(false);
    };

    return (
        <div className="video-Page">
            <div className="main-video-player">
                <div className="back-button" onClick={closeVideoPlayer}>
                    <RiArrowLeftLine className="back-arrow" />
                    <p className="home">Home</p>
                </div>
                <video
                    className="main-video"
                    src={fullVideo}
                    width="100%"
                    height="100%"
                    muted={false}
                    loop={false}
                    playing={true}
                    controls={true}
                />
            </div>
        </div>
    );
};

export default MainVideoPlayer;

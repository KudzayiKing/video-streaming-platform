'use client';
import React, { useState, useRef } from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import ReactPlayer from "react-player";


const MainVideoPlayer = ({
    infoBox,
    setInfoBox,
    url,
    fullVideo,
}) => {

    const [fullVideoPlaying, setFullVideoPlaying] = useState(false)



    // const videoRef = useRef();


    const closeVideoPlayer = () => {
        setFullVideoPlaying(false);
        setInfoBox(false);
    };

    return (
        <>
            <div className="z-50 fixed top-0 w-screen h-screen lg:w-screen lg:h-screen xl:w-screen xl:h-screen 2xl:w-screen 2xl:h-screen 3xl:w-screen 3xl:h-screen">
                <div className="main-video-player">
                    <div className=" hover:text-orange-400 cursor-pointer  z-[100] w-[85px] h-[41px] xl:w-[125px] xl:h-[65px] absolute left-2 top-4 flex justify-center items-center" onClick={closeVideoPlayer}>
                        <RiArrowLeftLine onClick={closeVideoPlayer} className=" w-6 h-6 xl:w-8 xl:h-8" />
                        <p onClick={closeVideoPlayer} className=" text-[21px] xl:text-[30px]">Home</p>
                    </div>
                    <ReactPlayer
                        className="z-[100]"
                        url={fullVideo}
                        width="100vw"
                        height="100vh"
                        muted={false}
                        loop={false}
                        playing={true}
                        controls={true}
                    />
                </div>

            </div>
            <div className=" z-[41] fixed flex top-0 right-0 bottom-0 left-0 w-screen h-screen bg-black"></div>
        </>
    );
};

export default MainVideoPlayer;

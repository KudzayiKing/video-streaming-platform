'use client';
import { FaPlay } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from 'react-icons/fa';
import { RiCloseCircleLine } from 'react-icons/ri';
import React, { useContext, useState } from 'react';
import AppContext from "./context/AppContext";
import MainVideoPlayer from "./mainVideoPlayer";



const InfoBox = ({
    index,
    imageMobile,
    clickedShows,
    clickedShow,
    clickedShowIds,
    clickedShowId,
    clickedDocs,
    clickedDoc,
    infoBoxVisibility,
    setInfoBoxVisibility,
    showInfoBox,
    closeInfoBox,
    shows,
    id,
    title,
    image,
    fullVideo,
    videoID,
    url,
    trailer,
    writers,
    genreA,
    director,
    actors,
    duration,
    year,
    age,
    summary
}) => {
    // Global context.
    const { favourites, addToFavs, removeFromFavs } = useContext(AppContext);

    const [muted, setMuted] = useState(false);
    const [fullVideoPlaying, setFullVideoPlaying] = useState(false)


    // Close info modal.
    const hideInfoBox = (event) => {
        closeInfoBox(event);
    };

    // Adding show to favourites.
    const addFavs = (id) => {
        let program = {
            index: index,
            imageMobile: imageMobile,
            clickedShows: clickedShow,
            clickedShow: clickedShow,
            clickedShowIds: clickedShowIds,
            clickedShowId: clickedShowId,
            clickedDocs: clickedDocs,
            clickedDoc: clickedDoc,
            infoBoxVisibility: infoBoxVisibility,
            setInfoBoxVisibility: setInfoBoxVisibility,
            showInfoBox: showInfoBox,
            closeInfoBox: closeInfoBox,
            shows: shows,
            id: id,
            title: title,
            image: image,
            fullVideo: fullVideo,
            videoID: videoID,
            url: url,
            trailer: trailer,
            writers: writers,
            genreA: genreA,
            director: director,
            actors: actors,
            duration: duration,
            year: year,
            age: age,
            summary: summary
        };

        addToFavs(program);
        console.log('favourites', favourites)
    };

    // Adding and removing show from favourites.
    const checkFavs = (id) => {
        favourites.filter((item) => item.id == id).length ? removeFromFavs(id) : addFavs(id)

    }

    const playFullVideo = () => {
        setFullVideoPlaying(true);
        setMuted(true);
    };

    return (
        <>
            <div className="full-video-container">
                {fullVideoPlaying && (
                    <MainVideoPlayer
                        infoBox={infoBoxVisibility}
                        setInfoBox={setInfoBoxVisibility}
                        fullVideo={fullVideo}
                        fullVideoPlaying={fullVideoPlaying}
                        setFullVideoPlaying={setFullVideoPlaying}
                    />
                )}
            </div>

            {fullVideoPlaying == false && (<div
                className="flex justify-center items-center">
                <div className="z-40  fixed top-0 w-screen h-screen lg:w-[60%] lg:h-[100%] lg:bottom-10 xl:w-[60%] rounded-t-2xl  bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-[0.50]  shadow-lg  xl:bottom-0  xl:rounded-t-3xl 2xl:w-[60%] 2xl:bottom-0 3xl:w-[60%] 3xl:bottom-0">
                    <div className="z-40 flex">
                        {/*<div className="fixed pt-2 pl-2 top-0 left-0 z-40"><RiHome2Line size={20} color={"#fb923c"}/></div>*/}
                        <div className="fixed pt-2 pr-2 top-0 right-0 z-40 min-[1920px]:pr-4 min-[1920px]:w-[50px] min-[1920px]:h-[50px]"><RiCloseCircleLine onClick={() => hideInfoBox()} size={24} color={"#fb923c"} className='min-[1920px]:w-[50px] min-[1920px]:h-[50px] min-[1920px]:pr-4' /></div>
                    </div>
                    {/* Video Player */}
                    <video
                        className='video rounded-t-xl w-screen'
                        src={trailer}
                        controls='true'
                        autoPlay='true'
                    />
                    {/* Buttons section */}
                    <div className="z-50 flex justify-between space-x-2 items-center pt-4 h-15 xl:pt-2">
                        <div onClick={() => { checkFavs(id) }} className="flex flex-col justify-center items-center w-32 ">
                            {favourites.filter((item) => item.id == id).length ? <FaHeart size={22} color={'orange'} className='cursor-pointer 3xl:w-[35px] 3xl:h-[35px] xl:w-[18px] xl:h-[18px]' /> : <FaRegHeart size={22} color={'#FFFFFF'} className='cursor-pointer 3xl:w-[35px] 3xl:h-[35px] xl:w-[18px] xl:h-[18px]' />}

                            <p className="text-xs pt-1 text-shadow-lg font-medium text-white min-[1920px]:text-lg xl:text-xs ">My List</p>
                        </div>
                        <div>
                            <button
                                onClick={playFullVideo}
                                className="flex justify-center shadow-xl items-center p-3 h-11 w-40 min-[1920px]:w-[220px] min-[1920px]:h-[50px] xl:h-[34px] text-black text-lg rounded-3xl  font-bold bg-white space-x-1 ">
                                <FaPlay size={15} />
                                <p>Play</p>
                            </button>
                        </div>
                        <div className="flex flex-col justify-center items-center w-32 ">
                            <ImInfo size={22} color={'#FFFFFF'} className='min-[1920px]:w-[35px] min-[1920px]:h-[35px] xl:w-[18px] xl:h-[18px]' />
                            <p className="text-xs pt-1 text-shadow-lg font-medium text-white min-[1920px]:text-lg xl:text-xs">Info</p>
                        </div>
                    </div>
                    {/* Title and summary section */}
                    <div className='pt-4 pl-2 w-[96%] overflow-y-scroll'>
                        <p className='font-cinzel text-white text-2xl min-[1920px]:text-4xl xl:text-2xl'>{title}</p>
                        <div className='text-[#808080]  pt-2 flex items-center space-x-3 '><p className='text-sm text-orange-400 min-[1920px]:text-lg xl:text-xs'>{genreA}</p><p className='border border-[#808080]  py-[1px] px-[4px] rounded-sm text-xs  min-[1920px]:text-lg  min-[1920px]:py-[0px] min-[1920px]:px-[4px] xl:text-xs'> {age} </p><p className='border border-[#808080]  py-[1px] px-[4px] rounded-sm text-xs  min-[1920px]:text-lg min-[1920px]:py-[0px] min-[1920px]:px-[4px] xl:text-xs'>  HD  </p><p className='text-sm min-[1920px]:text-lg xl:text-xs'>{year}</p><p className='text-sm min-[1920px]:text-lg xl:text-xs'>{duration}</p></div>
                        <p className='text-white text-sm pt-2 min-[1920px]:text-lg xl:text-xs '>{summary}</p>
                        {/* Directors */}
                        <p className='flex items-center space-x-3  pt-4 w-[96%] xl:pt-[6px]'>
                            <span className='text-sm text-orange-400 min-[1920px]:text-lg'>
                                Directors:
                            </span>
                            <p className='text-sm text-white min-[1920px]:text-lg xl:pt-[2px] xl:text-xs'>{director}</p>
                        </p>
                        {/* Actors */}
                        <p className='flex justify-start items-start space-x-5 pt-4 w-[98%] xl:pt-[6px]'>
                            <p className='flex justify-start items-start text-sm text-orange-400 min-[1920px]:text-lg'>
                                Actors:
                            </p>
                            <p className='text-sm text-white min-[1920px]:text-lg xl:text-xs'>{actors}</p>
                        </p>
                        {/* Writers */}
                        <p className='flex justify-start items-start space-x-5 pt-4 w-[98%] xl:pt-[6px]'>
                            <p className='flex justify-start items-start text-sm text-orange-400 min-[1920px]:text-lg xl:text-xs'>
                                Writers:
                            </p>
                            <p className='text-sm text-white min-[1920px]:text-lg xl:text-xs'>{writers}</p>
                        </p>
                    </div>
                </div>
            </div>)}
        </>

    )
}

export default InfoBox;
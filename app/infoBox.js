'use client'
import ReactPlayer from 'react-player';
import { Cinzel } from "@next/font/google";
import { FaPlay } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa";
import {RiHome2Line} from 'react-icons/ri';
import { RiCloseCircleLine } from 'react-icons/ri';
import { useState } from 'react';
import MyListCarousel from './myListCarousel'

/* Variable storing Cinzel font values */
const cinzel = Cinzel({
    subsets: "latin",
    weight: ["800"],
});

const cinzelSmall = Cinzel({
    subsets: "latin",
    weight: ["600"],
});

const myList = [];

const InfoBox = ({
    index,
    imageMobile,
    clickedShowIds,
    clickedShowId,
    InfoBoxVisibility,
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
    writers,
    genreA,
    director,
    actors,
    duration,
    year,
    age,
    summary
}) => {

    const hideInfoBox = (event) => {
        closeInfoBox(event);
    }

    return (
        <div className="flex justify-center items-center">
            <div className="z-30 fixed bottom-0 w-screen h-4/6 rounded-t-2xl bg-black  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80  shadow-lg">
                <div className="z-40 flex">
                    {/*<div className="fixed pt-2 pl-2 top-0 left-0 z-40"><RiHome2Line size={20} color={"#fb923c"}/></div>*/}
                    <div  className="fixed pt-2 pr-2 top-0 right-0 z-40"><RiCloseCircleLine onClick={()=>hideInfoBox()} size={24} color={"#fb923c"}/></div>
                    </div>
                {/* Video Player */}
                <video 
                    className='video rounded-t-xl w-screen' 
                    src={url}
                    controls='true'
                    autoPlay='true'
                />
                {/* Buttons section */}
                <div className="z-30 flex justify-between space-x-2 items-center pt-4 h-15 ">
                    <div className="flex flex-col justify-center items-center w-32 ">
                        <FaRegHeart size={22} color={'#FFFFFF'}/>
                        <p className="text-xs pt-1 text-shadow-lg font-medium text-white">My List</p>
                    </div>
                    <div>
                        <button className="flex justify-center items-center p-3 h-11 w-40 text-black text-lg rounded-xl  font-bold bg-white space-x-1 shadow-xl">
                            <FaPlay size={15} />
                            <p>Play</p>
                        </button>
                    </div>
                    <div className="flex flex-col justify-center items-center w-32 ">
                        <ImInfo size={22} color={'#FFFFFF'}/>
                        <p className="text-xs pt-1 text-shadow-lg font-medium text-white">Info</p>
                    </div>
                {/* Title and summary section */}
                </div>
                <div className='pt-4 pl-2 w-[96%]'>
                <p style={cinzel.style} className='text-white text-3xl'>{title}</p>
                <div className='text-[#808080]  pt-2 flex items-center space-x-3'><p className='text-sm text-orange-400'>{genreA}</p><p className='border border-[#808080]  py-[1px] px-[4px] rounded-sm text-xs'> {age} </p><p className='text-sm'>{year}</p><p className='text-sm'>{duration}</p></div>
                <p  className='text-white text-sm pt-2'>{summary}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoBox;
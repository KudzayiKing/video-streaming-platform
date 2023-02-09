'use client'
//import { Cinzel } from "@next/font/google";
import { useEffect, useState, useRef } from "react";
import InfoBox from "./infoBox";

import { BiVolumeMute } from 'react-icons/bi'
import { BsFillPlayFill } from 'react-icons/bs'
import { BsFillVolumeUpFill } from 'react-icons/bs'


/* Variable storing Cinzel font values */
// const cinzel = Cinzel({
//     subsets: "latin",
//     weight: ["800"],
// });


/* Array storing shows info images and links */
const spotlightShows = [
    {
        id: 21,
        title: "Top Boy",
        imageMobile:
            "https://ik.imagekit.io/ojfedrprt/top-boy-_2022_-season-2-hindi-dubbed-nf-series-hdrip4.jpg",
        image:
            "https://ik.imagekit.io/ojfedrprt/top_boy.jpg",
        fullVideo: "https://thumbsnap.com/i/wU96a3p6.mp4",
        videoID: "7VAqY7nxauE",
        trailer:
            "https://ik.imagekit.io/ojfedrprt/Top_Boy_Season_2___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667252638530",
        writers: "Ronan Bennett",
        genreA: "Crime",
        genreB: "British",
        genreC: "TV Series",

        director: "Ronan Bennett",
        actors:
            "	Ashley Walters, Kane Robinson,Micheal Ward,Shone Romulus,Malcolm Kamulete",
        duration: "48min",
        year: "2022",
        age: "16+",
        summary:
            "This drama takes viewers into the housing estates of east London. There is tension between the drug gangs that operate almost openly and those who strive to live honest lives against the odds in the crime-riddled area."
    },
    {
        id: 22,
        title: "The Witcher",
        imageMobile: "https://ik.imagekit.io/ojfedrprt/henry-cavill-the-witcher-season-2-1639401516.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/maxresdefault__1_.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/THE_WITCHER___MAIN_TRAILER___NETFLIX.mp4",
        videoID: "ndl1W4ltcmg",
        trailer:
            "https://ik.imagekit.io/ojfedrprt/THE_WITCHER___MAIN_TRAILER___NETFLIX.mp4",
        writers: "Lauren Schmidt Hissrich",
        genreA: "Action",
        genreB: "USA",
        genreC: "TV Series",
        director: "Lauren Schmidt Hissrich",
        actors: "Henry Cavill, Anya Chalotra, Freya Allan",
        duration: "2h 04min",
        year: "2019",
        age: "18+",
        summary:
            "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts."
    },
    {
        id: 23,
        title: "The Sandman",
        imageMobile: "https://ik.imagekit.io/ojfedrprt/sandman_2.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/imagefffs.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/The_Sandman___Official_Trailer___Netflix.mp4",
        videoID: "7VAqY7nxauE",
        trailer:
            "https://ik.imagekit.io/ojfedrprt/The_Sandman___Official_Trailer___Netflix.mp4",
        writers: "Neil Gaiman, Joe Simon, Jack Kirby.",
        genreA: "Fantasy",
        genreB: "USA",
        genreC: "TV Series",
        director: "Neil Gaiman",
        actors: "Sam Kieth, Mike Dringenberg, Jill Thompson, Shawn McManus",
        duration: "1h 40min",
        year: "2020",
        age: "16+",
        summary:
            "Neil Gaiman's The Sandman was launched in 1989. This extremely popular series was bound into ten collections. Following Dream of the Endless, also known as Morpheus, Onieros and many other names, we explore a magical world filled with stories both horrific and beautiful."
    },
    {
        id: 24,
        title: "Anne with an 'E' ",
        imageMobile: "https://ik.imagekit.io/ojfedrprt/lucen-actores-anne-with-an.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/Anne.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Anne___Official_Trailer__HD____Netflix.mp4",
        videoID: "S5qJXYNNINo",
        trailer:
            "https://ik.imagekit.io/ojfedrprt/Anne___Official_Trailer__HD____Netflix.mp4",
        writers: "Moira Walley-Beckett",
        genreA: "Drama",
        genreB: "USA",
        genreC: "TV Series",
        director: "Moira Walley-Beckett",
        actors: "Amybeth McNulty, Geraldine James, R.H. Thomson",
        duration: "2h 02min",
        year: "2017",
        age: "18+",
        summary:
            "A plucky orphan whose passions run deep finds an unlikely home with a spinster and her soft-spoken bachelor brother. Based on Anne of Green Gables."
    },
    {
        id: 25,
        title: "Cargo",
        imageMobile: "https://ik.imagekit.io/ojfedrprt/cargo-2018.jpeg",
        image: "https://ik.imagekit.io/ojfedrprt/cargonew.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Cargo___Official_Trailer__HD____Netflix.mp4",
        videoID: "W5QJW0M5pik",
        trailer:
            "https://ik.imagekit.io/ojfedrprt/Cargo___Official_Trailer__HD____Netflix.mp4",
        writers:
            " Russell Ackerman, John Schoenfelder, Kristina Ceyton, Samantha Jennings, Mark Patterson, Кристина Кейтон",
        genreA: "Horror",
        genreB: "Australia",
        genreC: "Movie",
        director: "Yolanda Ramke, Ben Howling",
        actors: "Martin Freeman, Anthony Hayes, Susie Porter",
        duration: "1h 30min",
        year: "2017",
        age: "18+",
        summary:
            "Stranded in rural Australia in the aftermath of a violent pandemic, an infected father desperately searches for a new home for his infant child and a means to protect her from his own changing nature."
    },
    {
        id: 26,
        title: "Extraction",
        imageMobile: "https://ik.imagekit.io/ojfedrprt/ext_3.jpeg",
        image: "https://ik.imagekit.io/ojfedrprt/extraction__1_.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Extraction___Official_Trailer___Screenplay_by_JOE_RUSSO_Directed_by_SAM_HARGRAVE___Netflix.mp4",
        videoID: "L6P3nI6VnlY",
        trailer:
            "https://ik.imagekit.io/ojfedrprt/Extraction___Official_Trailer___Screenplay_by_JOE_RUSSO_Directed_by_SAM_HARGRAVE___Netflix.mp4",
        writers:
            "Chris Hemsworth, Joe Russo, Eric Gitter, Peter Schwerin, Mike Larocca, Anthony Russo.",
        genreA: "Action",
        genreB: "USA",
        genreC: "Movie",
        director: "Sam Hargrave",
        actors: "Chris Hemsworth, Rudhraksh Jaiswal, Randeep Hooda",
        duration: "1h 57min",
        year: "2020",
        age: "18+",
        summary:
            "A hardened mercenary's mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son."
    },
    {
        id: 27,
        title: "Mugabe",
        imageMobile: "https://ik.imagekit.io/ojfedrprt/ext_3.jpeg",
        image: "https://ik.imagekit.io/ojfedrprt/extraction__1_.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/mugabe.mp4",
        videoID: "L6P3nI6VnlY",
        trailer:
            "https://ik.imagekit.io/ojfedrprt/mugabe.mp4",
        writers:
            "Samantha Iwowo, Nyaradzo Mutsaauri",
        genreA: "Action",
        genreB: "Zimbabwe",
        genreC: "Movie",
        director: "Robert Peters",
        actors: "Hakeem Kae-Kazim, Jackie Appiah, Dhlodhlo Charity, Mzembi Charles, Adam Chasema",
        duration: "1h 57min",
        year: "2020",
        age: "18+",
        summary:
            "President Mugabe is a mind blowing feature film set in Zimbabwe.It chronicles how he rises from being a prisoner to power as a guerrilla fighter who defeats the British colonial rulers during the Zimbabwe liberation struggle."
    },
];



/* Banner component to show show image,info and have buttons to play and or save show */
const Banner = () => {

    const [infoBoxVisibility, setInfoBoxVisibility] = useState(false);
    const [pauseBannerVideo, setPauseBannerVideo] = useState(true)
    const [unmute, setUnmute] = useState(true);


    /*State to store random show */
    const [randomShow, setRandomShow] = useState({});
    /* useEffect to pick and store 1 show to randomShow every time the app renders hence dependeciy list is empty */
    useEffect(() => {
        /* Use Math.floor Math.random to randomly pick 1 show from spotlightShows array and set it to randomShow*/
        setRandomShow(spotlightShows[Math.floor(Math.random() * spotlightShows.length)]);
    }, []);


    const showInfoBox = () => {
        setInfoBoxVisibility(true);
        setPauseBannerVideo(false)
    };

    const closeInfoBox = () => {
        setInfoBoxVisibility(false);
        setPauseBannerVideo(true)
    };

    const unMuteSound = () => {
        setUnmute(false);

    };

    const muteSound = () => {
        setUnmute(true);

    };

    return (
        <div className="
            relative flex flex-col justify-center rounded-3xl   pb-1 top-0 
            min-[400px]:top-0 min-[400px]:w-screen min-[400px]:h-[320px] 
            min-[537px]:w-screen min-[537px]:h-[600px] min-[537px]:top-0
            sm:w-screen sm:h-[600px] sm:top-0 w-screen h-[240px] 
            lg:w-screen lg:h-[620px] lg:top-0  
            md:w-screen md:h-[600px] md:top-0 
            xl:w-screen xl:h-[790px] xl:top-0 
            2xl:w-screen 2xl:h-[700px] 2xl:top-0
            min-[1920px]:w-screen min-[1920px]:h-[1100px] min-[1920px]:top-0
            min-[1920px]:border-12"
        >
            {unmute ? <BiVolumeMute onClick={() => { unMuteSound() }} size={45} color={'white'} className='z-30 absolute right-5 top-5 p-1 min-[350px]:h-[25px] min-[350px]:w-[25px] lg:top-[47px] lg:h-[35px] lg:w-[35px] xl:top-[58px] xl:right-10 min-[1400px]:top-[30px] min-[1920px]:h-[45px] min-[1920px]:w-[45px] min-[1920px]:right-12' />
                : <BsFillVolumeUpFill onClick={() => { muteSound() }} size={45} color={'white'} className='z-30 absolute right-5 top-5 p-1 min-[350px]:h-[25px] min-[350px]:w-[25px] lg:top-[47px] lg:h-[35px] lg:w-[35px] xl:top-[58px] xl:right-10 min-[1400px]:top-[30px] min-[1920px]:h-[45px] min-[1920px]:w-[45px] min-[1920px]:right-12' />
            }
            <p className='z-10 absolute font-cinzel text-white text-sm text-shadow-lg pl-[18px] pt-[29px] lg:text-3xl xl:text-4xl 3xl:text-6xl'>New on ZBC TV</p>
            <p className='z-10 absolute font-cinzel text-white font-bold text-lg text-shadow-lg pl-4 pt-[80px] lg:text-5xl lg:pt-[112px] xl:text-7xl xl:pt-[145px] 3xl:text-8xl 3xl:pt-[185px]'>{randomShow.title}</p>
            <div onClick={showInfoBox} className="flex flex-row absolute  justify-evenly items-center h-6 w-32 ml-[8px] z-30 lg:h-11 lg:w-64  lg:pt-[70px] xl:h-12 xl:w-72 xl:pt-[135px] min-[1400px]:ml-[16px] min-[1920px]:h-[128px] min-[1920px]:w-[480px] min-[1920px]:pt-[210px]">
                <BsFillPlayFill size={17} className=' z-30 absolute left-[34px] text-orange-400 mt-36 lg:h-[30px] lg:w-[30px] lg:left-[74px] xl:left-[78px]  xl:h-[34px] xl:w-[34px]  min-[1920px]:w-[44px] min-[1920px]:h-[44px] min-[1920px]:left-[158px] 2xl:mt-20' />
                <p className=' z-30 absolute  text-[12px] font-semibold  right-5 text-orange-400 mt-36 lg:text-[20px] lg:right-[65px] xl:text-[22px] xl:right-[75px] min-[1920px]:text-[28px] min-[1920px]:right-[148px] 2xl:mt-20'>More Info</p>
                <div className='z-10 absolute justify-center align-center h-6 w-32 lg:h-11 lg:w-64 xl:h-12 lg:rounded-3xl xl:w-72 xl:rounded-3xl min-[1920px]:rounded-full 2xl:mt-20 bg-white mt-36 ml-[14px] shadow-xl xl:shadow-xl rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border-white border-[0.7px] min-[1920px]:h-[60px] min-[1920px]:w-[500px]'>
                </div>
            </div>
            <div className="
                flex 
                relative 
                top-0 
                h-[224px]
                rounded-3xl 
                self-center 
                align-center 
                overflow-hidden 
                border-4 
                border-[#2d2c2c] 
                min-[400px]:top-0 min-[400px]:w-screen min-[400px]:h-[320px] 
                min-[537px]:w-screen min-[537px]:h-[600px] min-[537px]:top-0
                sm:w-screen sm:h-[600px] sm:top-0 w-screen 
                lg:w-screen lg:h-[582px] lg:top-0  lg:rounded-[44px]
                md:w-screen md:h-[600px] md:top-0 
                xl:w-screen xl:h-[726px] xl:top-0 
                2xl:w-screen 2xl:h-[700px] 2xl:top-0 2xl:rounded-[74px]
                min-[1920px]:w-screen min-[1920px]:h-[1100px] min-[1920px]:top-0 min-[1920px]:rounded-[100px]
                min-[1920px]:border-12
                ">
                {/* Video Player */}
                <video
                    src={randomShow.trailer}
                    height='100%'
                    width='100%'
                    poster="https://ik.imagekit.io/ojfedrprt/ztv-poster.jpg"
                    autoPlay={true}
                    controls={false}
                    pause='false'
                    muted={unmute}

                />

            </div>
            <div>
                {
                    infoBoxVisibility && <InfoBox
                        imageMobile={randomShow.imageMobile}
                        randomShow={randomShow}
                        infoBoxVisibility={setInfoBoxVisibility}
                        showInfoBox={showInfoBox}
                        closeInfoBox={closeInfoBox}
                        id={randomShow.id}
                        title={randomShow.title}
                        image={randomShow.image}
                        fullVideo={randomShow.fullVideo}
                        trailer={randomShow.trailer}
                        writers={randomShow.writers}
                        genreA={randomShow.genreA}
                        director={randomShow.director}
                        actors={randomShow.actors}
                        duration={randomShow.duration}
                        year={randomShow.year}
                        age={randomShow.age}
                        summary={randomShow.summary}
                    />
                }
            </div>



        </div>



    );
};

export default Banner;

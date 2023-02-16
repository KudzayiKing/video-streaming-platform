'use client'
import { useEffect, useState, useRef, useContext } from "react";
import InfoBox from "./infoBox";
import { BiVolumeMute } from 'react-icons/bi'
import { BsFillVolumeUpFill } from 'react-icons/bs'
import { FaPlay } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import MainVideoPlayer from "./mainVideoPlayer";
import AppContext from "./context/AppContext";
import { RiArrowLeftLine } from "react-icons/ri";
import ReactPlayer from "react-player";

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
            "This drama takes viewers into the housing estates of east London. There is tension between the drug gangs that operate almost openly and those who strive to live honest lives against the odds."
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
            "Neil Gaiman's The Sandman was launched in 1989. This popular series was bound into ten collections. Following Dream of the Endless, we explore a magical world filled with stories both horrific and beautiful."
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
            "President Mugabe is a mind blowing film set in Zimbabwe.It chronicles how he rises from being a prisoner to power as a guerrilla fighter who defeats the British colonial rulers during the liberation struggle."
    },
];



/* Banner component to show show image,info and have buttons to play and or save show */
const Banner = () => {

    // Global context.
    const { fullVidTuggle, fullVideoTuggle } = useContext(AppContext);

    const [infoBoxVisibility, setInfoBoxVisibility] = useState(false);
    const [pauseBannerVideo, setPauseBannerVideo] = useState(true)
    const [unmute, setUnmute] = useState(true);
    const [fullVideoPlaying, setFullVideoPlaying] = useState(false)
    const [playing, setPlaying] = useState(true)


    /*State to store random show */
    const [randomShow, setRandomShow] = useState({});
    /* useEffect to pick and store 1 show to randomShow every time the app renders hence dependeciy list is empty */
    useEffect(() => {
        /* Use Math.floor Math.random to randomly pick 1 show from spotlightShows array and set it to randomShow*/
        setRandomShow(spotlightShows[Math.floor(Math.random() * spotlightShows.length)]);

        setInterval(() => {
            /* Use Math.floor Math.random to randomly pick 1 show from spotlightShows array and set it to randomShow*/
            setRandomShow(spotlightShows[Math.floor(Math.random() * spotlightShows.length)]);

        }, 300000)

    }, []);

    const playFullVideo = () => {
        setFullVideoPlaying(true);
        //fullVideoTuggle(true)
        //console.log(fullVidTuggle)
    };

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

    const closeVideoPlayer = () => {
        setFullVideoPlaying(false);
    };

    return (
        <>
            <>
                {fullVideoPlaying && (
                    <>
                        <div className="z-[100] fixed top-0 w-screen h-screen lg:w-screen lg:h-screen xl:w-screen xl:h-screen 2xl:w-screen 2xl:h-screen 3xl:w-screen 3xl:h-screen">
                            <div className="main-video-player">
                                <div className=" hover:text-orange-400 cursor-pointer  z-[100] w-[85px] h-[41px] xl:w-[125px] xl:h-[65px] absolute left-2 top-4 flex justify-center items-center" onClick={closeVideoPlayer}>
                                    <RiArrowLeftLine onClick={closeVideoPlayer} className=" w-6 h-6 xl:w-8 xl:h-8" />
                                    <p onClick={closeVideoPlayer} className=" text-[21px] xl:text-[30px]">Home</p>
                                </div>
                                <ReactPlayer
                                    className="z-[100]"
                                    url={randomShow.fullVideo}
                                    width="100vw"
                                    height="100vh"
                                    muted={false}
                                    loop={false}
                                    playing={playing}
                                    controls={true}
                                />
                            </div>

                        </div>
                        <div className=" z-[41] fixed flex top-0 right-0 bottom-0 left-0 w-screen h-screen bg-black"></div></>)}
            </>
            <div
                className="
                    flex 
                    relative 
                    top-0 
                    w-screen
                    sm:w-screen sm:h-[360px] sm:top-0 
                    md:w-screen md:h-[432px] md:top-0 
                    lg:w-screen lg:h-[544px] lg:top-0 
                    xl:w-screen xl:h-[720px] xl:top-0 
                    2xl:w-screen 2xl:h-[854px] 2xl:top-0 
                    3xl:w-screen  3xl:h-[1079px]
                    "
            >
                {unmute ? <BiVolumeMute onClick={() => { unMuteSound() }} size={45} color={'white'} className='z-30 absolute right-5 top-5 p-1 w-[25px] h-[25px] lg:top-[47px] lg:h-[35px] lg:w-[35px] xl:top-[58px] xl:right-10 min-[1400px]:top-[30px] min-[1919px]:h-[45px] min-[1919px]:w-[45px] min-[1919px]:right-12' />
                    : <BsFillVolumeUpFill onClick={() => { muteSound() }} size={45} color={'white'} className='z-30 absolute right-5 top-5 p-1 w-[25px] h-[25px] lg:top-[47px] lg:h-[35px] lg:w-[35px] xl:top-[58px] xl:right-10 min-[1400px]:top-[30px] min-[1919px]:h-[45px] min-[1919px]:w-[45px] min-[1919px]:right-12' />
                }
                <div className="z-10 absolute flex flex-col justify-start items-start w-[170px] h-[100px] pl-2 top-[100px] xl:top-[250px] lg:top-[200px] lg:w-[550px] lg:h-[250px] xl:w-[650px] xl:h-[300px] 2xl:top-[350px] 2xl:w-[500px] 2xl:h-[300px] 2xl:left-0  3xl:top-[470px] 3xl:left-0 3xl:w-[900px] 3xl:h-[380px]  ">
                    <p className='z-10 font-cinzel text-white text-sm text-shadow-lg  lg:text-3xl xl:text-4xl 3xl:text-6xl'>New on ZBC TV</p>
                    <p className='z-10  pb-2 font-cinzel text-white font-bold text-lg text-shadow-lg  lg:text-5xl   xl:text-7xl  3xl:text-8xl '>{randomShow.title}</p>
                    <p className='max-lg:hidden z-30 cursor-pointer absolute text-[12px] font-normal text-shadow-lg lg:pl-1 lg:mt-[90px] lg:text-[16px]  text-white mt-38 xl:text-xl xl:mt-[110px] 2xl:mt-[10px] 3xl:text-[28px]  3xl:mt-[155px] '>{randomShow.summary}</p>
                    <button onClick={() => { playFullVideo() }} className="absolute flex justify-center items-center  text-orange-500 lg:hover:text-white p-3 h-9 w-36 mt-[50px] lg:mt-[170px] xl:w-44 xl:h-12 xl:mt-[210px] xl:rounded-3xl 2xl:mt-[255px] 2xl:w-52 2xl:h-16 2xl:rounded-full text-sm xl:text-lg rounded-2xl  font-bold  3xl:shadow-2xl bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-[0.05] space-x-1 shadow-xl border-[rgba(220,220,220,0.3)] border-[1px] ">
                        <FaPlay onClick={() => { playFullVideo() }} className="w-3 h-3 xl:h-4 xl:w-4 2xl:h-5 2xl:w-5 " />
                        <p onClick={() => { playFullVideo() }}>Play</p>
                    </button>
                </div>

                <div className="flex flex-row absolute  justify-start items-center h-12 w-60 pt-[180px] ml-[8px] z-30 lg:h-11 lg:w-2/4 lg:ml-[4px] lg:pt-[285px] xl:h-12 xl:w-2/4 xl:pt-[380px] 2xl:ml-[8px] 3xl:h-[70px] 3xl:w-2/4 3xl:mt-[180px]">


                </div>
                <div className="
                flex 
                relative 
                top-0 
                w-screen 
                sm:w-screen sm:h-[360px] sm:top-0 
                md:w-screen md:h-[432px] md:top-0 
                lg:w-screen lg:h-[576px] lg:top-0  
                xl:w-screen xl:h-[720px] xl:top-0 
                2xl:w-screen 2xl:h-[854px] 2xl:top-0 
                3xl:w-screen  3xl:h-[1079px]
                aspect-w-16 aspect-h-9
                ">
                    {/* Video Player */}
                    <video
                        src={randomShow.trailer}
                        poster="https://ik.imagekit.io/ojfedrprt/ztv-poster.jpg"
                        autoPlay={true}
                        controls={false}
                        pause='false'
                        muted={unmute}
                        className="rounded-2xl lg:rounded-3xl xl:rounded-[30px]

                         "

                    />
                </div>

            </div>
        </>



    );
};

export default Banner;

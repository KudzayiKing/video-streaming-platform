'use client'
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa";
import { Cinzel } from "@next/font/google";
import { useEffect, useState } from "react";

/* Variable storing Cinzel font values */
const cinzel = Cinzel({
    subsets: "latin",
    weight: ["800"],
});

/* Array storing shows info images and links */
const spotlightShows = [
    {
        id: 21,
        title: "Top Boy",
        imageMobile:
            "https://ik.imagekit.io/ojfedrprt/top-boy-_2022_-season-2-hindi-dubbed-nf-series-hdrip4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667252273889",
        image:
            "https://ik.imagekit.io/ojfedrprt/top-boy-_2022_-season-2-hindi-dubbed-nf-series-hdrip4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667252273889",
        fullVideo: "https://thumbsnap.com/i/wU96a3p6.mp4",
        videoID: "7VAqY7nxauE",
        url:
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
        image: "https://i.ibb.co/wCFMTRX/maxresdefault.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/THE_WITCHER___MAIN_TRAILER___NETFLIX.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667253435297",
        videoID: "ndl1W4ltcmg",
        url:
            "https://ik.imagekit.io/ojfedrprt/THE_WITCHER___MAIN_TRAILER___NETFLIX.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667253435297",
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
        image: "https://i.ibb.co/m5NF1tb/imagefffs.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/The_Sandman___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667253741578",
        videoID: "7VAqY7nxauE",
        url:
            "https://ik.imagekit.io/ojfedrprt/The_Sandman___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667253741578",
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
        image: "https://i.ibb.co/pn3CtGM/Anne-With-An-E-Season-4.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Anne___Official_Trailer__HD____Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667253957372",
        videoID: "S5qJXYNNINo",
        url:
            "https://ik.imagekit.io/ojfedrprt/Anne___Official_Trailer__HD____Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667253957372",
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
        image: "https://i.ibb.co/s9Byr0q/fe6e7-cargoposter.png",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Cargo___Official_Trailer__HD____Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667254224095",
        videoID: "W5QJW0M5pik",
        url:
            "https://ik.imagekit.io/ojfedrprt/Cargo___Official_Trailer__HD____Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667254224095",
        writers:
            " Russell Ackerman, John Schoenfelder, Kristina Ceyton, Samantha Jennings, Mark Patterson, Кристина Кейтон",
        genreA: "Horror",
        genreB: "Australia",
        genreC: "Movie",
        director: "Yolanda Ramke, Ben Howling",
        actors: "Martin Freeman, Anthony Hayes, Susie Porter",
        duration: "",
        year: "2017",
        age: "18+",
        summary:
            "Stranded in rural Australia in the aftermath of a violent pandemic, an infected father desperately searches for a new home for his infant child and a means to protect her from his own changing nature."
    },
    {
        id: 26,
        title: "Extraction",
        imageMobile: "https://ik.imagekit.io/ojfedrprt/ext_3.jpeg",
        image: "https://i.ibb.co/Qk2CthD/extraction.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Extraction___Official_Trailer___Screenplay_by_JOE_RUSSO_Directed_by_SAM_HARGRAVE___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667254445116",
        videoID: "L6P3nI6VnlY",
        url:
            "https://ik.imagekit.io/ojfedrprt/Extraction___Official_Trailer___Screenplay_by_JOE_RUSSO_Directed_by_SAM_HARGRAVE___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667254445116",
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
];


/* Banner component to show show image,info and have buttons to play and or save show */
const Banner = () => {
    /*State to store random show */
    const [randomShow, setRandomShow] = useState({});
    /* useEffect to pick and store 1 show to randomShow every time the app renders hence dependeciy list is empty */
    useEffect(() => {
        /* Use Math.floor Math.random to randomly pick 1 show from spotlightShows array and set it to randomShow*/
        setRandomShow(spotlightShows[Math.floor(Math.random() * spotlightShows.length)]);
    }, [])


    return (
        <div
            className=""
            style={{ position: "relative", width: "100vw", height: "534px" }}
        >
            <div className="absolute top-3/4  text-white z-10  left-0 right-0 ">
                <div className="flex flex-col justify-center items-center ">
                    <div style={cinzel.style} className="text-4xl text-shadow-xl" >
                        <p className="">{randomShow.title}</p>
                    </div>
                    <div className="text-lg flex text-shadow-xl" style={cinzel.style}>
                        {randomShow.genreA} <div className="text-orange-500 px-2 font-bold ">|</div>{" "}
                        {randomShow.genreC} <div className="text-orange-500 px-2 font-bold">|</div>{" "}
                        {randomShow.genreB}
                    </div>
                </div>
                <div className="flex justify-between space-x-6 items-center pt-4 h-15">
                    <div className="flex flex-col justify-center items-center w-32 ">
                        <FaRegHeart size={22} />
                        <p className="text-xs pt-1 font-light">My List</p>
                    </div>
                    <div>
                        <button className="flex justify-center items-center p-3 h-11 w-40 text-black text-lg rounded-xl  font-bold bg-white space-x-1 shadow-xl">
                            <FaPlay size={15} />
                            <p>Play</p>
                        </button>
                    </div>
                    <div className="flex flex-col justify-center items-center w-32 ">
                        <ImInfo size={22} />
                        <p className="text-xs pt-1 font-light text-shadow-lg ">Info</p>
                    </div>
                </div>
            </div>
            <div className="">
                <Image
                    src={randomShow.imageMobile}
                    alt="movie-poster"
                    placeholder="blur"
                    blurDataURL="https://ik.imagekit.io/ojfedrprt/10x10-5f5f5f7f.png"
                    /*style={imageStyle}*/
                    fill={true}
                    className="rounded-xl"
                />
            </div>
        </div>


    );
};

export default Banner;

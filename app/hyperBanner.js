"use client";
import Image from "next/image";
//import { Cinzel } from "@next/font/google";
import { MdArrowForwardIos } from "react-icons/md";
//import { Carousel } from "@trendyol-js/react-carousel";
import Carousel from "react-elastic-carousel";
import CardLandscape from "./cardLandscape";
import { useState } from "react";
import InfoBox from "./infoBox";
import { BsPlay } from "react-icons/bs";
import LandscapeCarousel from "react-elastic-carousel";
import CardCarousel from "./cardCarousel";

// Show data.
const succession = [
    {
        id: 1,
        name: "Succession",
        season: "SE 1",
        episode: "EP 1",
        title: "Celebration",
        imageMobile:
            "https://ik.imagekit.io/ojfedrprt/Succession/succession-hyper-poster.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/Succession/se1ep1.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        videoID: "W5QJW0M5pik",
        trailer: "https://ik.imagekit.io/ojfedrprt/Succession/1.mp4",
        writers: "Jesse Armstrong, Georgia Pritchett, Jonathan Glatzer",
        genreA: "Dark Comedy",
        genreB: "USA",
        genreC: "TV Series",
        director: "Jesse Armstrong",
        actors:
            "	Hiam Abbass,Nicholas Braun,Brian Cox,Kieran Culkin,Peter Friedman,Natalie Gold,Matthew Macfadyen, Alan Ruck",
        duration: "1h 10min",
        year: "2018 - Present",
        age: "18+",
        summary:
            "Media magnate Logan Roy shocks his family on his 80th birthday by announcing he is staying on indefinitely as CEO of Waystar Royco; Logan's children raise objections over their father's desire to change the way his eventual successor will be chosen.",
    },

    {
        id: 2,
        name: "Succession",
        season: "SE 1",
        episode: "EP 2",
        title: "S... Show at the Factory",
        imageMobile:
            "https://ik.imagekit.io/ojfedrprt/Succession/succession-hyper-poster.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/Succession/se1ep2.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        videoID: "W5QJW0M5pik",
        trailer: "https://ik.imagekit.io/ojfedrprt/Succession/2.mp4",
        writers: "Jesse Armstrong, Georgia Pritchett, Jonathan Glatzer",
        genreA: "Dark Comedy",
        genreB: "USA",
        genreC: "TV Series",
        director: "Jesse Armstrong",
        actors:
            "	Hiam Abbass,Nicholas Braun,Brian Cox,Kieran Culkin,Peter Friedman,Natalie Gold,Matthew Macfadyen, Alan Ruck",
        duration: "1h 10min",
        year: "2018 - Present",
        age: "18+",
        summary:
            "Logan's incapacitation sets off a heated succession debate among his children; Greg is tasked with retrieving important items from the Roy apartment;Kendall makes an impassioned final plea to keep Waystar Royco in the family.",
    },

    {
        id: 3,
        name: "Succession",
        season: "SE 1",
        episode: "EP 3",
        title: "Lifeboats",
        imageMobile:
            "https://ik.imagekit.io/ojfedrprt/Succession/succession-hyper-poster.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/Succession/se1ep3.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        videoID: "W5QJW0M5pik",
        trailer: "https://ik.imagekit.io/ojfedrprt/Succession/3.mp4",
        writers: "Jesse Armstrong, Georgia Pritchett, Jonathan Glatzer",
        genreA: "Dark Comedy",
        genreB: "USA",
        genreC: "TV Series",
        director: "Jesse Armstrong",
        actors:
            "	Hiam Abbass,Nicholas Braun,Brian Cox,Kieran Culkin,Peter Friedman,Natalie Gold,Matthew Macfadyen, Alan Ruck",
        duration: "1h 10min",
        year: "2018 - Present",
        age: "18+",
        summary:
            "Kendall confronts a major crisis involving a secret bank debt as Waystar's stock plunges to dangerous lows;Kendall and Roman attend their first big meeting in their new roles; Kendall tries to convince Rava to give their marriage a second chance.",
    },

    {
        id: 4,
        name: "Succession",
        season: "SE 1",
        episode: "EP 4",
        title: "Sad Sack Wasp Trap",
        imageMobile:
            "https://ik.imagekit.io/ojfedrprt/Succession/succession-hyper-poster.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/Succession/se1ep4.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        videoID: "W5QJW0M5pik",
        trailer: "https://ik.imagekit.io/ojfedrprt/Succession/4.mp4",
        writers: "Jesse Armstrong, Georgia Pritchett, Jonathan Glatzer",
        genreA: "Dark Comedy",
        genreB: "USA",
        genreC: "TV Series",
        director: "Jesse Armstrong",
        actors:
            "	Hiam Abbass,Nicholas Braun,Brian Cox,Kieran Culkin,Peter Friedman,Natalie Gold,Matthew Macfadyen, Alan Ruck",
        duration: "1h 10min",
        year: "2018 - Present",
        age: "18+",
        summary:
            "Kendall polishes up his speech for the company's annual foundation gala fundraiser; Shiv tries to minimize damage from a sordid photo that threatens a client's political future; Tom shares a disturbing file with Greg.",
    },

    {
        id: 5,
        name: "Succession",
        season: "SE 1",
        episode: "EP 5",
        title: "I Went To Market",
        imageMobile:
            "https://ik.imagekit.io/ojfedrprt/Succession/succession-hyper-poster.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/Succession/se1ep5.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        videoID: "W5QJW0M5pik",
        trailer: "https://ik.imagekit.io/ojfedrprt/Succession/5.mp4",
        writers: "Jesse Armstrong, Georgia Pritchett, Jonathan Glatzer",
        genreA: "Dark Comedy",
        genreB: "USA",
        genreC: "TV Series",
        director: "Jesse Armstrong",
        actors:
            "	Hiam Abbass,Nicholas Braun,Brian Cox,Kieran Culkin,Peter Friedman,Natalie Gold,Matthew Macfadyen, Alan Ruck",
        duration: "1h 10min",
        year: "2018 - Present",
        age: "18+",
        summary:
            "After hearing Logan's plan to expand to local TV, Kendall begins to plot a vote of no confidence against his father; Greg drives his ornery grandfather,Ewan, from Canada to New York for a Thanksgiving reunion with Logan.",
    },

    {
        id: 6,
        name: "Succession",
        season: "SE 1",
        episode: "EP 6",
        title: "Which Side Are You On",
        imageMobile:
            "https://ik.imagekit.io/ojfedrprt/Succession/succession-hyper-poster.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/Succession/se1ep6.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        videoID: "W5QJW0M5pik",
        trailer: "https://ik.imagekit.io/ojfedrprt/Succession/6.mp4",
        writers: "Jesse Armstrong, Georgia Pritchett, Jonathan Glatzer",
        genreA: "Dark Comedy",
        genreB: "USA",
        genreC: "TV Series",
        director: "Jesse Armstrong",
        actors:
            "	Hiam Abbass,Nicholas Braun,Brian Cox,Kieran Culkin,Peter Friedman,Natalie Gold,Matthew Macfadyen, Alan Ruck",
        duration: "1h 10min",
        year: "2018 - Present",
        age: "18+",
        summary:
            "Logan arrives in Washington to meet the president but worries he has been snubbed following a last-minute cancellation;after successfully thwarting a potential scandal, Tom introduces Greg to fine dining; Shiv explores her options..",
    },

    {
        id: 7,
        name: "Succession",
        season: "SE 1",
        episode: "EP 7",
        title: "Austerlitz",
        imageMobile:
            "https://ik.imagekit.io/ojfedrprt/Succession/succession-hyper-poster.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/Succession/se1ep7.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        videoID: "W5QJW0M5pik",
        trailer: "https://ik.imagekit.io/ojfedrprt/Succession/7.mp4",
        writers: "Jesse Armstrong, Georgia Pritchett, Jonathan Glatzer",
        genreA: "Dark Comedy",
        genreB: "USA",
        genreC: "TV Series",
        director: "Jesse Armstrong",
        actors:
            "	Hiam Abbass,Nicholas Braun,Brian Cox,Kieran Culkin,Peter Friedman,Natalie Gold,Matthew Macfadyen, Alan Ruck",
        duration: "1h 10min",
        year: "2018 - Present",
        age: "18+",
        summary:
            "In an effort to fix his public image, Logan agrees to a family therapy session at Connor's New Mexico ranch; Shiv is pushed to join the Gil Eavis' team, a potential presidential candidate who goes against everything Shiv's father stands for.",
    },

    {
        id: 8,
        name: "Succession",
        season: "SE 1",
        episode: "EP 8",
        title: "Prague",
        imageMobile:
            "https://ik.imagekit.io/ojfedrprt/Succession/succession-hyper-poster.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/Succession/se1ep8.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        videoID: "W5QJW0M5pik",
        trailer: "https://ik.imagekit.io/ojfedrprt/Succession/8.mp4",
        writers: "Jesse Armstrong, Georgia Pritchett, Jonathan Glatzer",
        genreA: "Dark Comedy",
        genreB: "USA",
        genreC: "TV Series",
        director: "Jesse Armstrong",
        actors:
            "	Hiam Abbass,Nicholas Braun,Brian Cox,Kieran Culkin,Peter Friedman,Natalie Gold,Matthew Macfadyen, Alan Ruck",
        duration: "1h 10min",
        year: "2018 - Present",
        age: "18+",
        summary:
            "Tom has a bachelor party to remember; Kendall eyes a new business opportunity with a pair of idealistic entrepreneurs;Roman looks to land a deal for local TV stations with his father's longtime nemesis; Shiv and Gil get ambushed during an interview.",
    },

    {
        id: 9,
        name: "Succession",
        season: "SE 1",
        episode: "EP 9",
        title: "Pre Nuptial",
        imageMobile:
            "https://ik.imagekit.io/ojfedrprt/Succession/succession-hyper-poster.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/Succession/se1ep9.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        videoID: "W5QJW0M5pik",
        trailer: "https://ik.imagekit.io/ojfedrprt/Succession/9.mp4",
        writers: "Jesse Armstrong, Georgia Pritchett, Jonathan Glatzer",
        genreA: "Dark Comedy",
        genreB: "USA",
        genreC: "TV Series",
        director: "Jesse Armstrong",
        actors:
            "	Hiam Abbass,Nicholas Braun,Brian Cox,Kieran Culkin,Peter Friedman,Natalie Gold,Matthew Macfadyen, Alan Ruck",
        duration: "1h 10min",
        year: "2018 - Present",
        age: "18+",
        summary:
            "The Roys assemble at Eastnor Castle in England to prepare for Shiv and Tom's wedding;Kendall learns from Stewy and Sandy that their plot for a hostile takeover of Waystar has been fast-tracked in order to catch Logan off guard.",
    },

    {
        id: 10,
        name: "Succession",
        season: "SE 1",
        episode: "EP 10",
        title: "Nobody Is Ever Missing",
        imageMobile:
            "https://ik.imagekit.io/ojfedrprt/Succession/succession-hyper-poster.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/Succession/se1ep10.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        videoID: "W5QJW0M5pik",
        trailer: "https://ik.imagekit.io/ojfedrprt/Succession/10.mp4",
        writers: "Jesse Armstrong, Georgia Pritchett, Jonathan Glatzer",
        genreA: "Dark Comedy",
        genreB: "USA",
        genreC: "TV Series",
        director: "Jesse Armstrong",
        actors:
            "	Hiam Abbass,Nicholas Braun,Brian Cox,Kieran Culkin,Peter Friedman,Natalie Gold,Matthew Macfadyen, Alan Ruck",
        duration: "1h 10min",
        year: "2018 - Present",
        age: "18+",
        summary:
            "Logan defaults to crisis mode as news of a hostile takeover breaks; Kendall eyes an escape outlet; Tom takes advantage of an opportunity.",
    },
];
// Season data.
const successionInfo = [
    {
        id: 11,
        name: "Succession",
        season: "Season 1",
        potrait: "https://ik.imagekit.io/ojfedrprt/Succession/successiont.jpg",
        landscape: "https://ik.imagekit.io/ojfedrprt/h-succession.jpg",
        summary:
            "Media magnate Logan Roy shocks his family on his 80th birthday by announcing he is staying on indefinitely as CEO of Waystar Royco; Logan's children raise objections over their father's desire to change the way his eventual successor will be chosen.",
    },
];

const breakPoints2 = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1, pagination: false },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 92, itemsToShow: 5, itemsToScroll: 5, pagination: false },
    { width: 1150, itemsToShow: 4, itemsToScroll: 4, pagination: false },
    { width: 1450, itemsToShow: 5, itemsToScroll: 5, pagination: false },
    { width: 1750, itemsToShow: 6, itemsToScroll: 6, pagination: false },
];

const breakPointsMobile = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 550, itemsToShow: 2, pagination: false },
    { width: 92, itemsToShow: 2.2, itemsToScroll: 2, pagination: false },
    { width: 1150, itemsToShow: 4, pagination: false },
    { width: 1450, itemsToShow: 5, pagination: false },
    { width: 1750, itemsToShow: 6, pagination: false }
];

const HyperBanner = () => {
    const [infoBoxVisibility, setInfoBoxVisibility] = useState(false);
    const [showIndex, setShowIndex] = useState();
    const clickedShows = [succession[showIndex]];
    // Function to show info modal.
    const showInfoBox = (event, index) => {
        setInfoBoxVisibility(true);
        setShowIndex(index);
    };
    // Function to close info modal.
    const closeInfoBox = () => {
        setInfoBoxVisibility(false);
    };
    return (
        <>
            <div className=" relative w-screen  h-[534px] lg:h-[482px] max-[1279]:h-[681px] lg:max-xl:h-[640px] xl:h-[800px] 2xl:h-[1050px] 2xl:pt-3">
                <p

                    className="flex  items-center  px-3 font-cinzel text-white text-base font-semibold pt-1 py-[1px]  pl-2 lg:pl-[60px] xl:pl-[60px] xl:max-2xl:text-xl xl:max-2xl:pt-4 2xl:text-2xl"
                >
                    Must Watch Series
                    <div>
                        <MdArrowForwardIos
                            size={16}
                            color={"#FFFFF"}
                            className="2xl:w-[24px] 2xl:h-[24px] 2xl:pl-1"
                        />
                    </div>
                </p>
                {successionInfo.map((info, index) => (
                    <div
                        key={info.id}
                        className="absolute w-[98%]  bottom-0 flex flex-col items-start"
                    >
                        <p

                            className=" font-cinzel text-white text-2xl font-normal text-shadow-lg absolute bottom-48 z-20 pl-2 pb-5 lg:pl-[75px] lg:text-4xl xl:text-5xl"
                        >
                            {info.name}
                        </p>
                        <p className="text-orange-400 text-sm font-normal text-shadow-lg absolute bottom-44 z-20 pl-2 pt-2 pb-5 lg:pl-[75px] lg:bottom-[165px] lg:text-xl xl:text-2xl">
                            {info.season}
                        </p>
                        <p className="text-white text-sm font-normal text-shadow-lg absolute bottom-24 z-20 pl-2 lg:pl-[75px] lg:bottom-[100px] lg:text-lg lg:w-[920px] xl:text-xl">
                            {info.summary}
                        </p>
                    </div>
                ))}
                {/* Glassmorphism layer */}
                <div className="overflow-hidden absolute z-10 top-[285px] justify-self-center w-[100%] h-[52.5%] lg:top-[390px] lg:w-[887px] lg:flex lg:ml-[58px] lg:h-[45.7%] lg:shadow-xl lg:rounded-b-2xl lg:rounded-t-none xl:top-[527px] xl:ml-[51.5px] xl:w-[1155px] xl:h-[48%] xl:shadow-xl 2xl:w-[1790px] 2xl:top-[780px] 2xl:h-[36.5%] 2xl:shadow-2xl 3xl:w-[1785px] 3xl:ml-[56.5px] bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-[0.05] rounded-t-none"></div>
                {successionInfo.map((info, index) => (
                    <div
                        key={info.id}
                        className="flex absolute w-screen h-[534px]  justify-center items-center"
                    >
                        {/* Mobile Image */}
                        <div
                            key={info.id}
                            className="min-[1023px]:hidden lg:hidden relative pt-3 w-screen h-[534px]"
                        >
                            <Image
                                src={info.potrait}
                                alt="movie-poster"
                                placeholder="blur"
                                blurDataURL="https://ik.imagekit.io/ojfedrprt/10x10-5f5f5f7f.png"
                                fill={true}
                                className="rounded-2xl"
                            />
                        </div>
                        {/* Tablet Image */}
                        <div
                            key={info.id}
                            className="max-lg:hidden xl:hidden 2xl:hidden  absolute top-0 flex justify-center items-center pt-3 w-screen h-[616px] min-[1023px]:h-[370px] lg:h-[482px] lg:pt-[5px] lg:pr-[22px]  "
                        >
                            <Image
                                src={info.landscape}
                                alt="movie-poster"
                                placeholder="blur"
                                blurDataURL="https://ik.imagekit.io/ojfedrprt/10x10-5f5f5f7f.png"
                                width={887}
                                height={482}
                                className="rounded-2xl"
                            />
                        </div>
                        {/* HD */}
                        <div
                            key={info.id}
                            className="max-lg:hidden lg:max-xl:hidden  absolute top-0 flex justify-center items-center pt-3 w-screen h-[616px] min-[1023px]:h-[370px] lg:h-[483px] lg:pt-[5px] lg:pr-[22px] xl:h-[643px] xl:max-2xl:pt-0"
                        >
                            <Image
                                src={info.landscape}
                                alt="movie-poster"
                                placeholder="blur"
                                blurDataURL="https://ik.imagekit.io/ojfedrprt/10x10-5f5f5f7f.png"
                                width={1153}
                                height={627}
                                className="rounded-2xl"
                            />
                        </div>
                        <div
                            key={info.id}
                            className="max-lg:hidden 2xl:hidden lg:hidden absolute top-0 flex justify-center items-center pt-3 w-screen h-[616px] min-[1023px]:h-[370px] lg:h-[483px] lg:pt-[5px] lg:pr-[22px] xl:h-[681px]"
                        >
                            <Image
                                src={info.landscape}
                                alt="movie-poster"
                                placeholder="blur"
                                blurDataURL="https://ik.imagekit.io/ojfedrprt/10x10-5f5f5f7f.png"
                                width={1253}
                                height={681}
                                className="rounded-2xl"
                            />
                        </div>
                        {/* 2xl */}
                        <div
                            key={info.id}
                            className="max-lg:hidden sm:max-2xl:hidden absolute top-0 flex justify-center items-center pt-3 w-screen h-[616px] min-[1023px]:h-[370px] lg:h-[483px] lg:pt-[5px] lg:pr-[22px] xl:h-[681px] 2xl:h-[990px]"
                        >
                            <Image
                                src={info.landscape}
                                alt="movie-poster"
                                placeholder="blur"
                                blurDataURL="https://ik.imagekit.io/ojfedrprt/10x10-5f5f5f7f.png"
                                width={1785}
                                height={971}
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                ))}
                {/* Mobile carousel */}
                <div
                    style={{ WebkitTapHighlightColor: "transparent" }}
                    className="z-20 lg:hidden absolute bottom-0 w-[100%] h-[93px] "
                >
                    <Carousel
                        breakPoints={breakPointsMobile}
                        itemPadding={[1, 5]}
                        focusOnSelect={true}
                        enableSwipe={true}
                        enableMouseSwipe={true}
                        showArrows={false}
                        showEmptySlots
                    >
                        {succession.map((series, index) => (
                            <div
                                key={series.id}
                                className="z-20 flex flex-col items-start"
                                onClick={(event) => {
                                    showInfoBox(event, index);
                                }}
                            >
                                <BsPlay
                                    size={28}
                                    color={"orange"}
                                    className="absolute top-8 z-50 self-center justify-self-center "
                                />
                                <CardLandscape image={series.image} />
                                <div className="flex ">
                                    <p className="text-orange-400 text-[12px] font-light text-shadow-xl ">
                                        {series.episode} :{" "}
                                        <span className="text-white">{series.title}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
                {/* Non-Mobile carousel */}
                <div
                    style={{ WebkitTapHighlightColor: "transparent" }}
                    className="z-20 max-lg:hidden lg:h-[93px] absolute bottom-0 left-0 right-0 h-[93px] pl-2  lg:bottom-0  lg:left-0 lg:right-0 lg:pt-0"
                >
                    <LandscapeCarousel
                        breakPoints={breakPoints2}
                        itemPadding={[10, 17, 0, 0]}
                        outerSpacing={0}
                        focusOnSelect={true}
                        enableSwipe={true}
                        enableMouseSwipe={true}
                        showEmptySlots
                    >
                        {succession.map((series, index) => (
                            <div
                                key={series.id}
                                className="z-20 flex flex-col items-start"
                                onClick={(event) => {
                                    showInfoBox(event, index);
                                }}
                            >
                                <BsPlay
                                    size={28}
                                    color={"orange"}
                                    className="absolute top-8 z-50 self-center justify-self-center lg:top-10 xl:w-[44px] xl:h-[44px] xl:padding-2 xl:top-[70px] xl:rounded-full"
                                />
                                <CardCarousel image={series.image} />
                                <div className="flex">
                                    <p className="text-orange-400 text-[12px] font-light text-shadow-xl xl:text-[18px]">
                                        {series.episode} :{" "}
                                        <span className="text-white">{series.title}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </LandscapeCarousel>
                </div>
                {infoBoxVisibility &&
                    clickedShows.map((clickedShow, index) => (
                        <div key={clickedShow.id}>
                            <InfoBox
                                index={index}
                                imageMobile={clickedShow.imageMobile}
                                clickedShows={clickedShows}
                                clickedShow={clickedShow}
                                infoBoxVisibility={setInfoBoxVisibility}
                                showInfoBox={showInfoBox}
                                closeInfoBox={closeInfoBox}
                                id={clickedShow.id}
                                title={clickedShow.title}
                                image={clickedShow.image}
                                fullVideo={clickedShow.fullVideo}
                                trailer={clickedShow.trailer}
                                writers={clickedShow.writers}
                                genreA={clickedShow.genreA}
                                director={clickedShow.director}
                                actors={clickedShow.actors}
                                duration={clickedShow.duration}
                                year={clickedShow.year}
                                age={clickedShow.age}
                                summary={clickedShow.summary}
                            />
                        </div>
                    ))}
            </div>
        </>
    );
};

export default HyperBanner;

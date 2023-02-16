'use client';
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import React, { useReducer } from 'react'

const succession = [

    {
        id: 1,
        name: "Succession",
        season: "SE 1",
        episode: "EP 1",
        title: "Celebration",
        imageMobile: "https://ik.imagekit.io/ojfedrprt/Succession/succession-hyper-poster.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/Succession/se1ep1.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        videoID: "W5QJW0M5pik",
        trailer:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        writers:
            "Jesse Armstrong, Georgia Pritchett, Jonathan Glatzer",
        genreA: "Drama",
        genreB: "USA",
        genreC: "TV Series",
        director: "Jesse Armstrong",
        actors: "	Hiam Abbass,Nicholas Braun,Brian Cox,Kieran Culkin,Peter Friedman,Natalie Gold,Matthew Macfadyen, Alan Ruck",
        duration: "1h 10min",
        year: "2018 - Present",
        age: "18+",
        summary:
            "Media magnate Logan Roy shocks his family on his 80th birthday by announcing he is staying on indefinitely as CEO of Waystar Royco; Logan's children raise objections over their father's desire to change the way his eventual successor will be chosen."
    },

    {
        id: 2,
        name: "Succession",
        season: "SE 1",
        episode: "EP 2",
        title: "S... Show at the F... Factory",
        imageMobile: "https://ik.imagekit.io/ojfedrprt/Succession/succession-hyper-poster.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/Succession/se1ep2.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        videoID: "W5QJW0M5pik",
        trailer:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        writers:
            "Jesse Armstrong, Georgia Pritchett, Jonathan Glatzer",
        genreA: "Drama",
        genreB: "USA",
        genreC: "TV Series",
        director: "Jesse Armstrong",
        actors: "	Hiam Abbass,Nicholas Braun,Brian Cox,Kieran Culkin,Peter Friedman,Natalie Gold,Matthew Macfadyen, Alan Ruck",
        duration: "1h 10min",
        year: "2018 - Present",
        age: "18+",
        summary:
            "Logan's incapacitation sets off a heated succession debate among his children; Greg is tasked with retrieving important items from the Roy apartment;Kendall makes an impassioned final plea to keep Waystar Royco in the family."
    },

    {
        id: 3,
        name: "Succession",
        season: "SE 1",
        episode: "EP 3",
        title: "Lifeboats",
        imageMobile: "https://ik.imagekit.io/ojfedrprt/Succession/succession-hyper-poster.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/Succession/se1ep3.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        videoID: "W5QJW0M5pik",
        trailer:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        writers:
            "Jesse Armstrong, Georgia Pritchett, Jonathan Glatzer",
        genreA: "Drama",
        genreB: "USA",
        genreC: "TV Series",
        director: "Jesse Armstrong",
        actors: "	Hiam Abbass,Nicholas Braun,Brian Cox,Kieran Culkin,Peter Friedman,Natalie Gold,Matthew Macfadyen, Alan Ruck",
        duration: "1h 10min",
        year: "2018 - Present",
        age: "18+",
        summary:
            "Kendall confronts a major crisis involving a secret bank debt as Waystar's stock plunges to dangerous lows;Kendall and Roman attend their first big meeting in their new roles; Kendall tries to convince Rava to give their marriage a second chance."
    },

    {
        id: 4,
        name: "Succession",
        season: "SE 1",
        episode: "EP 4",
        title: "Sad Sack Wasp Trap",
        imageMobile: "https://ik.imagekit.io/ojfedrprt/Succession/succession-hyper-poster.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/Succession/se1ep4.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        videoID: "W5QJW0M5pik",
        trailer:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        writers:
            "Jesse Armstrong, Georgia Pritchett, Jonathan Glatzer",
        genreA: "Drama",
        genreB: "USA",
        genreC: "TV Series",
        director: "Jesse Armstrong",
        actors: "	Hiam Abbass,Nicholas Braun,Brian Cox,Kieran Culkin,Peter Friedman,Natalie Gold,Matthew Macfadyen, Alan Ruck",
        duration: "1h 10min",
        year: "2018 - Present",
        age: "18+",
        summary:
            "Kendall polishes up his speech for the company's annual foundation gala fundraiser; Shiv tries to minimize damage from a sordid photo that threatens a client's political future; Tom shares a disturbing file with Greg."
    },

    {
        id: 5,
        name: "Succession",
        season: "SE 1",
        episode: "EP 5",
        title: "I Went To Market",
        imageMobile: "https://ik.imagekit.io/ojfedrprt/Succession/succession-hyper-poster.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/Succession/se1ep5.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        videoID: "W5QJW0M5pik",
        trailer:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        writers:
            "Jesse Armstrong, Georgia Pritchett, Jonathan Glatzer",
        genreA: "Drama",
        genreB: "USA",
        genreC: "TV Series",
        director: "Jesse Armstrong",
        actors: "	Hiam Abbass,Nicholas Braun,Brian Cox,Kieran Culkin,Peter Friedman,Natalie Gold,Matthew Macfadyen, Alan Ruck",
        duration: "1h 10min",
        year: "2018 - Present",
        age: "18+",
        summary:
            "After hearing Logan's plan to expand to local TV, Kendall begins to plot a vote of no confidence against his father; Greg drives his ornery grandfather,Ewan, from Canada to New York for a Thanksgiving reunion with Logan."
    },

    {
        id: 6,
        name: "Succession",
        season: "SE 1",
        episode: "EP 6",
        title: "Which Side Are You On",
        imageMobile: "https://ik.imagekit.io/ojfedrprt/Succession/succession-hyper-poster.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/Succession/se1ep6.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        videoID: "W5QJW0M5pik",
        trailer:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        writers:
            "Jesse Armstrong, Georgia Pritchett, Jonathan Glatzer",
        genreA: "Drama",
        genreB: "USA",
        genreC: "TV Series",
        director: "Jesse Armstrong",
        actors: "	Hiam Abbass,Nicholas Braun,Brian Cox,Kieran Culkin,Peter Friedman,Natalie Gold,Matthew Macfadyen, Alan Ruck",
        duration: "1h 10min",
        year: "2018 - Present",
        age: "18+",
        summary:
            "Logan arrives in Washington to meet the president but worries he has been snubbed following a last-minute cancellation;after successfully thwarting a potential scandal, Tom introduces Greg to fine dining; Shiv explores her options.."
    },

    {
        id: 7,
        name: "Succession",
        season: "SE 1",
        episode: "EP 7",
        title: "Austerlitz",
        imageMobile: "https://ik.imagekit.io/ojfedrprt/Succession/succession-hyper-poster.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/Succession/se1ep7.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        videoID: "W5QJW0M5pik",
        trailer:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        writers:
            "Jesse Armstrong, Georgia Pritchett, Jonathan Glatzer",
        genreA: "Drama",
        genreB: "USA",
        genreC: "TV Series",
        director: "Jesse Armstrong",
        actors: "	Hiam Abbass,Nicholas Braun,Brian Cox,Kieran Culkin,Peter Friedman,Natalie Gold,Matthew Macfadyen, Alan Ruck",
        duration: "1h 10min",
        year: "2018 - Present",
        age: "18+",
        summary:
            "In an effort to fix his public image, Logan agrees to a family therapy session at Connor's New Mexico ranch; Shiv is pushed to join the Gil Eavis' team, a potential presidential candidate who goes against everything Shiv's father stands for."
    },

    {
        id: 8,
        name: "Succession",
        season: "SE 1",
        episode: "EP 8",
        title: "Prague",
        imageMobile: "https://ik.imagekit.io/ojfedrprt/Succession/succession-hyper-poster.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/Succession/se1ep8.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        videoID: "W5QJW0M5pik",
        trailer:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        writers:
            "Jesse Armstrong, Georgia Pritchett, Jonathan Glatzer",
        genreA: "Drama",
        genreB: "USA",
        genreC: "TV Series",
        director: "Jesse Armstrong",
        actors: "	Hiam Abbass,Nicholas Braun,Brian Cox,Kieran Culkin,Peter Friedman,Natalie Gold,Matthew Macfadyen, Alan Ruck",
        duration: "1h 10min",
        year: "2018 - Present",
        age: "18+",
        summary:
            "Tom has a bachelor party to remember; Kendall eyes a new business opportunity with a pair of idealistic entrepreneurs;Roman looks to land a deal for local TV stations with his father's longtime nemesis; Shiv and Gil get ambushed during an interview."
    },

    {
        id: 9,
        name: "Succession",
        season: "SE 1",
        episode: "EP 9",
        title: "Pre Nuptial",
        imageMobile: "https://ik.imagekit.io/ojfedrprt/Succession/succession-hyper-poster.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/Succession/se1ep9.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        videoID: "W5QJW0M5pik",
        trailer:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        writers:
            "Jesse Armstrong, Georgia Pritchett, Jonathan Glatzer",
        genreA: "Drama",
        genreB: "USA",
        genreC: "TV Series",
        director: "Jesse Armstrong",
        actors: "	Hiam Abbass,Nicholas Braun,Brian Cox,Kieran Culkin,Peter Friedman,Natalie Gold,Matthew Macfadyen, Alan Ruck",
        duration: "1h 10min",
        year: "2018 - Present",
        age: "18+",
        summary:
            "The Roys assemble at Eastnor Castle in England to prepare for Shiv and Tom's wedding;Kendall learns from Stewy and Sandy that their plot for a hostile takeover of Waystar has been fast-tracked in order to catch Logan off guard."
    },

    {
        id: 10,
        name: "Succession",
        season: "SE 1",
        episode: "EP 10",
        title: "Nobody Is Ever Missing",
        imageMobile: "https://ik.imagekit.io/ojfedrprt/Succession/succession-hyper-poster.jpg",
        image: "https://ik.imagekit.io/ojfedrprt/Succession/se1ep10.jpg",
        fullVideo:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        videoID: "W5QJW0M5pik",
        trailer:
            "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
        writers:
            "Jesse Armstrong, Georgia Pritchett, Jonathan Glatzer",
        genreA: "Drama",
        genreB: "USA",
        genreC: "TV Series",
        director: "Jesse Armstrong",
        actors: "	Hiam Abbass,Nicholas Braun,Brian Cox,Kieran Culkin,Peter Friedman,Natalie Gold,Matthew Macfadyen, Alan Ruck",
        duration: "1h 10min",
        year: "2018 - Present",
        age: "18+",
        summary:
            "Logan defaults to crisis mode as news of a hostile takeover breaks; Kendall eyes an escape outlet; Tom takes advantage of an opportunity."
    },

]

const AppState = (props) => {
    // Initial state.
    const initialState = {
        favourites: [],
        fullVidTuggle: false
    };

    // Function to add show to favourites.
    const addToFavs = (show) => {
        dispatch({
            type: 'ADD_FAVS',
            payload: show
        })
    };

    // Function to remove show from favourites.
    const removeFromFavs = (id) => {
        dispatch({
            type: 'REMOVE_FROM_FAVS',
            payload: id
        })
    }

    // Function to open or close full video.
    const fullVideoTuggle = (x) => {
        dispatch({
            type: 'FULL_VIDEO_TUGGLE',
            payload: x
        })
    }

    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{ addToFavs, removeFromFavs, favourites: state.favourites, fullVideoTuggle, fullVidTuggle: state.fullVidTuggle }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;


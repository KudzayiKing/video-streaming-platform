'use client'; // When we use hooks we need to use use client side rendering.
import Card from './card';
import { MdArrowForwardIos } from 'react-icons/md';
import InfoBox from './infoBox';
import { useState } from 'react';
import LandscapeCarousel from "react-elastic-carousel";
import Carousel from "react-elastic-carousel";
import CardCarousel from './cardCarousel';
import CarouselMobile from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Show data.
const shows = [
  {
    id: 1,
    title: "Narcos",
    imageMobile: "https://ik.imagekit.io/ojfedrprt/narcos.jpg",
    image: "https://ik.imagekit.io/ojfedrprt/netflix-narcos-main-1280x720__1_.jpg",
    fullVideo:
      "https://ik.imagekit.io/ojfedrprt/Narcos_-_Main_Trailer_-_Netflix__HD___2_.mp4",
    videoID: "7VAqY7nxauE",
    trailer:
      "https://ik.imagekit.io/ojfedrprt/Narcos_-_Main_Trailer_-_Netflix__HD___2_.mp4",
    writers: " Chris Brancato, Eric Newman, Carlo Bernard.",
    genreA: "Drama",
    genreB: "USA",
    genreC: "TV Series",
    director: "Chris Brancato, Carlo Bernard, Doug Miro",
    actors:
      "Wagner Moura, Wagner Moura, Boyd Holbrook, Pedro Pascal, Joanna Christie, Maurice Compte,André Mattos",
    duration: "1h 45min",
    year: "2015",
    age: "18+",
    summary:
      "The Medellin cartel - the most violent, ruthless and wealthy criminal organization in the history of modern crime. And the one man who lorded over them all... Pablo Escobar. NARCOS is the true story of the US and Colombian efforts to battle the Medellin cartel during the cocaine-fueled drug wars of the 1980's."
  },
  {
    id: 2,
    title: "Succession",
    imageMobile: "https://ik.imagekit.io/ojfedrprt/succession_2.jpg",
    image: "https://ik.imagekit.io/ojfedrprt/succession-landscape.jpg",
    fullVideo:
      "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
    videoID: "W5QJW0M5pik",
    trailer:
      "https://ik.imagekit.io/ojfedrprt/Succession__Season_1___Official_Trailer___HBO.mp4",
    writers:
      "Jesse Armstrong, Georgia Pritchett, Jonathan Glatzer",
    genreA: "Dark Comedy",
    genreB: "USA",
    genreC: "TV Series",
    director: "Jesse Armstrong",
    actors: "	Hiam Abbass,Nicholas Braun,Brian Cox,Kieran Culkin,Peter Friedman,Natalie Gold,Matthew Macfadyen, Alan Ruck",
    duration: "1h 10min",
    year: "2018 - Present",
    age: "18+",
    summary:
      "The Logan family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps down from the company."
  },
  {
    id: 3,
    title: "Power",
    imageMobile: "https://ik.imagekit.io/ojfedrprt/images.jpg",
    image: "https://ik.imagekit.io/ojfedrprt/powerl.jpg",
    fullVideo:
      "https://ik.imagekit.io/ojfedrprt/Power_-_Season_1___Trailer___Streaming_On_SonyLIV.mp4",
    videoID: "L6P3nI6VnlY",
    trailer:
      "https://ik.imagekit.io/ojfedrprt/Power_-_Season_1___Trailer___Streaming_On_SonyLIV.mp4",
    writers:
      "Chris Hemsworth, Joe Russo, Eric Gitter, Peter Schwerin, Mike Larocca, Anthony Russo.",
    genreA: "Crime",
    genreB: "USA",
    genreC: "Movie",
    director: "Courtney A. Kemp",
    actors: "Omari Hardwick,Lela Loren,Naturi Naughton,Joseph Sikora,Adam Huss,Kathrine Narducci,Luis Antonio Ramos,Greg Serano",
    duration: "1h 57min",
    year: "2014 - 2020",
    age: "18+",
    summary:
      "Power tells the story of James St. Patrick , an intelligent, smooth, yet, ruthless drug dealer who goes by the alias of Ghost He wishes to leave the criminal world to pursue legitimate business interests as a nightclub owner. St. Patrick aims to balance those two lives."
  },
  {
    id: 4,
    title: "The Witcher",
    imageMobile: "https://ik.imagekit.io/ojfedrprt/witcher.jpg",
    image: "https://ik.imagekit.io/ojfedrprt/maxresdefault__1_.jpg",
    fullVideo:
      "https://ik.imagekit.io/ojfedrprt/THE_WITCHER___MAIN_TRAILER___NETFLIX.mp4",
    videoID: "ndl1W4ltcmg",
    trailer:
      "https://ik.imagekit.io/ojfedrprt/THE_WITCHER___MAIN_TRAILER___NETFLIX.mp4",
    writers: "Lauren Schmidt Hissrich",
    genreA: "Adventure",
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
    id: 5,
    title: "The Sandman",
    imageMobile: "https://ik.imagekit.io/ojfedrprt/Morpheus-Tom-Sturridge.jpg",
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
    id: 6,
    title: "Anne with an 'E' ",
    imageMobile: "https://ik.imagekit.io/ojfedrprt/anne.jpg",
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
    id: 7,
    title: "Clickbait",
    imageMobile: "https://ik.imagekit.io/ojfedrprt/clickbait.jpg",
    image: "https://ik.imagekit.io/ojfedrprt/maxresdefault-1__1_.jpg",
    fullVideo:
      "https://ik.imagekit.io/ojfedrprt/Clickbait___Official_Teaser___Netflix.mp4",
    videoID: "QwVLObz0MGs",
    trailer:
      "https://ik.imagekit.io/ojfedrprt/Clickbait___Official_Teaser___Netflix.mp4",
    writers: "Tony Ayres, Christian White",
    genreA: "Mystery",
    genreB: "USA",
    genreC: "TV Series",
    director: "	Tom Hoffie, Joanna Werner",
    actors: "Zoe Kazan, Betty Gabriel, Adrian Grenier",
    duration: "1h 02min",
    year: "2021",
    age: "18+",
    summary:
      "When family man Nick Brewer is abducted in a crime with a sinister online twist, those closest to him race to uncover who is behind it and why."
  }
];

// Breakpoints for carousel, controling how many card to be displayed.
const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 550, itemsToShow: 2, pagination: false },
  { width: 92, itemsToShow: 5, itemsToScroll: 5, pagination: false },
  { width: 1150, itemsToShow: 4, pagination: false },
  { width: 1450, itemsToShow: 5, pagination: false },
  { width: 1750, itemsToShow: 6, pagination: false }
];
// Breakpoints for mobile carousel, controling how many card to be displayed.
const breakPointsMobile = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 550, itemsToShow: 2, pagination: false },
  { width: 92, itemsToShow: 3, itemsToScroll: 3, pagination: false },
  { width: 1150, itemsToShow: 4, pagination: false },
  { width: 1450, itemsToShow: 5, pagination: false },
  { width: 1750, itemsToShow: 6, pagination: false }
];

const ShowsCarousel = () => {
  // State to show and hide Info modal.
  const [infoBoxVisibility, setInfoBoxVisibility] = useState(false);
  // State to store index of clicked show.
  const [showIndex, setShowIndex] = useState();
  // New array with clicked show.
  const clickedShowIds = [shows[showIndex]]
  // Function to show info modal.
  const showInfoBox = (event, index) => {
    setShowIndex(index)
    setInfoBoxVisibility(true);
  }
  // Function to hide info modal.
  const closeInfoBox = (event) => {
    setInfoBoxVisibility(false);
  }

  return (
    <div className='z-10 flex flex-col'>
      <p className='flex  items-center  px-1 font-cinzel text-white text-base font-semibold pt-1 py-[1px] pl-2 min-[1920px]:pl-[54px] xl:max-2xl:text-xl 2xl:text-2xl min-[1023px]:pl-[60px]'>TV Series<div><MdArrowForwardIos size={16} className='min-[1920px]:w-[24px] min-[1920px]:h-[24px] min-[1920px]:pl-1' /></div></p>
      {/* Mobile potrait carousel */}
      <div className='lg:hidden 3xl:hidden w-[100%] h-[200px]'>
        <Carousel
          breakPoints={breakPointsMobile}
          itemPadding={[1, 62.7]}
          focusOnSelect={true}
          enableSwipe={true}
          enableMouseSwipe={true}
          showArrows={false}
          showEmptySlots
        >
          {shows.map((show, index) => (
            <div key={show.id} onClick={(event) => { showInfoBox(event, index) }}>
              <Card
                imageMobile={show.imageMobile}
                id={show.id}
                trailer={show.trailer}
                fullVideo={show.fullVideo}
                index={index}
              />
            </div>
          ))}
        </Carousel>
      </div>
      {/*Landscape carousel for non mobile devices*/}
      <div className='max-[1020px]:hidden  h-[180px] lg:max-xl:h-[110px]'>
        <LandscapeCarousel
          breakPoints={breakPoints}
          itemPadding={[10, 10, 20, 0]}
          outerSpacing={0}
          focusOnSelect={true}
          enableSwipe={true}
          enableMouseSwipe={true}
        >
          {shows.map((show, index) => (
            <div key={show.id} onClick={(event) => { showInfoBox(event, index) }}>
              <CardCarousel
                image={show.image}
                id={show.id}
                trailer={show.trailer}
                fullVideo={show.fullVideo}
                index={index}
              />
            </div>
          ))}
        </LandscapeCarousel>
      </div>
      {/*Modal*/}
      {infoBoxVisibility && clickedShowIds.map((clickedShowId, index) => (
        <div key={clickedShowId.id}>
          <InfoBox
            index={index}
            imageMobile={clickedShowId.imageMobile}
            clickedShowIds={clickedShowIds}
            clickedShowId={clickedShowId}
            shows={shows}
            setInfoBoxVisibility={setInfoBoxVisibility}
            infoBoxVisibility={infoBoxVisibility}
            showInfoBox={showInfoBox}
            closeInfoBox={closeInfoBox}
            id={clickedShowId.id}
            title={clickedShowId.title}
            image={clickedShowId.image}
            fullVideo={clickedShowId.fullVideo}
            trailer={clickedShowId.trailer}
            writers={clickedShowId.writers}
            genreA={clickedShowId.genreA}
            director={clickedShowId.director}
            actors={clickedShowId.actors}
            duration={clickedShowId.duration}
            year={clickedShowId.year}
            age={clickedShowId.age}
            summary={clickedShowId.summary}
          />
        </div>

      ))
      }
    </div>
  )
}

export default ShowsCarousel;
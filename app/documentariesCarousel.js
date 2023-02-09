'use client';
import Card from './card';
//import { Carousel } from '@trendyol-js/react-carousel';
//import { Cinzel } from '@next/font/google';
import { MdArrowForwardIos } from 'react-icons/md';
import InfoBox from './infoBox';
import { useState } from 'react';
import LandscapeCarousel from "react-elastic-carousel";
import CardCarousel from './cardCarousel';
import Carousel from "react-elastic-carousel";


// const cinzel = Cinzel({
//   subsets: 'latin',
//   weight: ['800']
// })

const documentaries = [
  {
    id: 11,
    title: "Untold",
    imageMobile: "https://ik.imagekit.io/ojfedrprt/p20388625-b-v13-ab.jpg",
    image: "https://ik.imagekit.io/ojfedrprt/netflix-untold.jpg",
    fullVideo:
      "https://ik.imagekit.io/ojfedrprt/Untold__The_Girlfriend_Who_Didn_t_Exist___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667254718355",
    videoID: "7VAqY7nxauE",
    trailer:
      "https://ik.imagekit.io/ojfedrprt/Untold__The_Girlfriend_Who_Didn_t_Exist___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667254718355",
    writers: "	Ryan Duffy, Miguel Tamayo, Chapman Way, Maclain Way",
    genreA: "Documentary",
    genreB: "USA",
    genreC: "Sports",
    director: "Chris Brancato, Carlo Bernard, Doug Miro",
    actors: "Mardy Fish, Reggie Miller, Caitlyn Jenner, Christy Martib",
    duration: "1h 45min",
    year: "2022",
    age: "16+",
    summary:
      "Under pressure to continue a winning tradition in American tennis, Mardy Fish faced mental health challenges that changed his life on and off the court."
  },
  {
    id: 12,
    title: "Jeen-yuhs",
    imageMobile: "https://ik.imagekit.io/ojfedrprt/poster-780.jpg",
    image: "https://ik.imagekit.io/ojfedrprt/maxresdefault.jpg",
    fullVideo:
      "https://ik.imagekit.io/ojfedrprt/jeen-yuhs__A_Kanye_Trilogy___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667254957389",
    videoID: "ndl1W4ltcmg",
    trailer:
      "https://ik.imagekit.io/ojfedrprt/jeen-yuhs__A_Kanye_Trilogy___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667254957389",
    writers: "J. Ivy,Coodie Simmons",
    genreA: "Documentary",
    genreB: "USA",
    genreC: "Music / Hip Hop",
    director: "	Coodie Simmons,Chike Ozah",
    actors: "Kanye West",
    duration: "2h 20min",
    year: "2022",
    age: "18+",
    summary:
      "The lives of an emerging superstar and a filmmaker intertwine in this intense, intimate docuseries charting Kanye West's career, filmed over two decades."
  },
  {
    id: 13,
    title: "Defiant Ones",
    imageMobile:
      "https://ik.imagekit.io/ojfedrprt/defient-ones.jpg",
    image: "https://ik.imagekit.io/ojfedrprt/defiant-ones.jpg",
    fullVideo:
      "https://ik.imagekit.io/ojfedrprt/The_Defiant_Ones_I_Official_Trailer__HD__I_Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667255131234",
    videoID: "7VAqY7nxauE",
    trailer:
      "https://ik.imagekit.io/ojfedrprt/The_Defiant_Ones_I_Official_Trailer__HD__I_Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667255131234",
    writers: "Allen Hughes,Lasse Järvi,Doug Pray",
    genreA: "Documentary",
    genreB: "USA",
    genreC: "Music / Hip Hop",
    director: "	Allen Hughes",
    actors: "Dr Dre, Jimmy Lovine",
    duration: "4h 10min",
    year: "2017",
    age: "16+",
    summary:
      "The Defiant Ones is a four-part American television documentary series, directed by Allen Hughes, that aired on HBO from July 9 to July 12, 2017. It focuses on the careers of and partnership between Jimmy Iovine and Dr. Dre, co-founders of Beats Electronics."
  },
  {
    id: 14,
    title: "Anelka ",
    imageMobile:
      "https://ik.imagekit.io/ojfedrprt/anelka.jpg",
    image: "https://ik.imagekit.io/ojfedrprt/maxresdefault-1.jpg",
    fullVideo:
      "https://ik.imagekit.io/ojfedrprt/Anelka__Misunderstood___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667255261246",
    videoID: "S5qJXYNNINo",
    trailer:
      "https://ik.imagekit.io/ojfedrprt/Anelka__Misunderstood___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667255261246",
    writers: "Franck Nataf",
    genreA: "Documentary",
    genreB: "France",
    genreC: "Sports / Biography",
    actors: "Nicolas Anelka",
    duration: "2h 35min",
    year: "2021",
    age: "18+",
    summary:
      "Inscrutable, incomparable or both? Famed French footballer Nicolas Anelkas controversial legacy is explored in this in-depth documentary"
  },
  {
    id: 15,
    title: "Neymar",
    imageMobile:
      "https://ik.imagekit.io/ojfedrprt/Is-Netflix-premiering-the-documentary-film-called-Neymar-The-Perfect-Chaos.jpg",
    image: "https://ik.imagekit.io/ojfedrprt/maxresdefault-2.jpg",
    fullVideo:
      "https://ik.imagekit.io/ojfedrprt/Neymar__The_Perfect_Chaos___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667255415315",
    videoID: "W5QJW0M5pik",
    trailer:
      "https://ik.imagekit.io/ojfedrprt/Neymar__The_Perfect_Chaos___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667255415315",
    writers:
      " Russell Ackerman, John Schoenfelder, Kristina Ceyton, Samantha Jennings, Mark Patterson, Кристина Кейтон",
    genreA: "Documentary",
    genreB: "Brasil",
    genreC: "Sports / Biography",
    director: "Yolanda Ramke, Ben Howling",
    actors: "Neymar j, David Backham",
    duration: "1h 30min",
    year: "2022",
    age: "16+",
    summary:
      "Beloved worldwide but also a lightning rod for criticism, Neymar shares the highs and lows of his personal life and brilliant football career."
  },
  {
    id: 16,
    title: "Turning Point",
    imageMobile:
      "https://ik.imagekit.io/ojfedrprt/turning-point.jpg",
    image: "https://ik.imagekit.io/ojfedrprt/turning-point2.jpg",
    fullVideo:
      "https://ik.imagekit.io/ojfedrprt/Turning_Point__9_11_and_the_War_on_Terror___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667255572524",
    videoID: "L6P3nI6VnlY",
    trailer:
      "https://ik.imagekit.io/ojfedrprt/Turning_Point__9_11_and_the_War_on_Terror___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667255572524",
    writers:
      "Chris Hemsworth, Joe Russo, Eric Gitter, Peter Schwerin, Mike Larocca, Anthony Russo.",
    genreA: "Documentary",
    genreB: "USA",
    genreC: "Political / History",
    director: "Brian Knappenberger",
    actors: "Chris Hemsworth, Rudhraksh Jaiswal, Randeep Hooda",
    duration: "1h 57min",
    year: "2021",
    age: "18+",
    summary:
      "This unflinching series documents the 9/11 terrorist attacks, from Al Qaeda's roots in the 1980s to America's response, both at home and abroad."
  },
  {
    id: 17,
    title: "The Last Dance",
    imageMobile: "https://ik.imagekit.io/ojfedrprt/last-dance.png",
    image: "https://ik.imagekit.io/ojfedrprt/maxresdefault-3.jpg",
    fullVideo:
      "https://ik.imagekit.io/ojfedrprt/The_Last_Dance___Relive_the_Phenomenon___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667255690982",
    videoID: "QwVLObz0MGs",
    trailer:
      "https://ik.imagekit.io/ojfedrprt/The_Last_Dance___Relive_the_Phenomenon___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667255690982",
    writers: "Jason Hehir",
    genreA: "Documentary",
    genreB: "USA",
    genreC: "Sports / Biography",
    director: "	Tom Hoffie, Joanna Werner",
    actors: "Michael Jordan, Scottie Pippen, Dennis Rodman",
    duration: "1h 02min",
    year: "2020",
    age: "16+",
    summary:
      "This docuseries chronicles the rise of superstar Michael Jordan and the 1990s Chicago Bulls, with unaired footage from an unforgettable 1997-98 season."
  }
];

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 550, itemsToShow: 2, pagination: false },
  { width: 92, itemsToShow: 5, pagination: false },
  { width: 1150, itemsToShow: 4, pagination: false },
  { width: 1450, itemsToShow: 5, pagination: false },
  { width: 1750, itemsToShow: 6, pagination: false }
];

const breakPointsMobile = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 550, itemsToShow: 2, pagination: false },
  { width: 92, itemsToShow: 3, itemsToScroll: 3, pagination: false },
  { width: 1150, itemsToShow: 4, pagination: false },
  { width: 1450, itemsToShow: 5, pagination: false },
  { width: 1750, itemsToShow: 6, pagination: false }
];


const DocumentariesCarousel = () => {

  const [infoBoxVisibility, setInfoBoxVisibility] = useState(false);

  const [docIndex, setDocIndex] = useState();

  const clickedDocs = [documentaries[docIndex]]

  const showInfoBox = (event, id) => {
    setDocIndex(id)
    setInfoBoxVisibility(true);
  }

  const closeInfoBox = (event) => {
    setInfoBoxVisibility(false);
  }


  return (
    <div className='flex flex-col'>
      <p className='flex  items-center  px-1 font-cinzel text-white text-base font-semibold pt-1 py-[1px] pl-2 min-[1920px]:pl-[54px] xl:max-2xl:text-xl 2xl:text-2xl min-[1023px]:pl-[60px]'>Documentaries<div><MdArrowForwardIos size={16} className='min-[1920px]:w-[24px] min-[1920px]:h-[24px] min-[1920px]:pl-1' /></div></p>
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
          {documentaries.map((documentary, index) => (
            <div key={documentary.id} onClick={(event) => { showInfoBox(event, index) }}>
              <Card
                imageMobile={documentary.imageMobile}
                id={documentary.id}
                trailer={documentary.trailer}
                fullVideo={documentary.fullVideo}
                index={index}
              />
            </div>
          ))}
        </Carousel>
      </div>
      {/*Landscape carousel for non mobile devices*/}
      <div className='max-[1020px]:hidden right-0 h-[170px] lg:max-xl:h-[110px]'>
        <LandscapeCarousel
          breakPoints={breakPoints}
          itemPadding={[10, 10, 20, 0]}
          outerSpacing={0}
          focusOnSelect={true}
          enableSwipe={true}
          enableMouseSwipe={true}
        >
          {documentaries.map((documentary, index) => (
            <div key={documentary.id} onClick={(event) => { showInfoBox(event, index) }}>
              <CardCarousel
                image={documentary.image}
                id={documentary.id}
                trailer={documentary.trailer}
                fullVideo={documentary.fullVideo}
                index={index}
              />
            </div>
          ))}
        </LandscapeCarousel>
      </div>
      {infoBoxVisibility && clickedDocs.map((clickedDoc, index) => (
        <div key={clickedDoc.id}>
          <InfoBox
            index={index}
            imageMobile={clickedDoc.imageMobile}
            clickedDocs={clickedDocs}
            clickedDoc={clickedDoc}
            infoBoxVisibility={setInfoBoxVisibility}
            showInfoBox={showInfoBox}
            closeInfoBox={closeInfoBox}
            id={clickedDoc.id}
            title={clickedDoc.title}
            image={clickedDoc.image}
            fullVideo={clickedDoc.fullVideo}
            trailer={clickedDoc.trailer}
            writers={clickedDoc.writers}
            genreA={clickedDoc.genreA}
            director={clickedDoc.director}
            actors={clickedDoc.actors}
            duration={clickedDoc.duration}
            year={clickedDoc.year}
            age={clickedDoc.age}
            summary={clickedDoc.summary}
          />
        </div>
      ))

      }
    </div>
  )
}

export default DocumentariesCarousel;
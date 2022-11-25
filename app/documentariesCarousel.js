'use client';
import Card from './card';
import { Carousel } from '@trendyol-js/react-carousel';
import { Cinzel } from '@next/font/google';
import { MdArrowForwardIos } from 'react-icons/md';

const cinzel = Cinzel({
    subsets: 'latin',
    weight: ['800']
})

const documentaries = [
    {
      docsId: 11,
      title: "Untold",
      imageMobile: "https://ik.imagekit.io/ojfedrprt/p20388625-b-v13-ab.jpg",
      image: "https://ik.imagekit.io/ojfedrprt/netflix-untold.jpg",
      fullVideo:
        "https://ik.imagekit.io/ojfedrprt/Untold__The_Girlfriend_Who_Didn_t_Exist___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667254718355",
      videoID: "7VAqY7nxauE",
      url:
        "https://ik.imagekit.io/ojfedrprt/Untold__The_Girlfriend_Who_Didn_t_Exist___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667254718355",
      writers: "	Ryan Duffy, Miguel Tamayo, Chapman Way, Maclain Way",
      genre: "Documentary Films, Sports Movies",
      director: "Chris Brancato, Carlo Bernard, Doug Miro",
      actors: "Mardy Fish, Reggie Miller, Caitlyn Jenner, Christy Martib",
      duration: "1h 45min",
      year: "2022",
      age: "16+",
      summary:
        "Under pressure to continue a winning tradition in American tennis, Mardy Fish faced mental health challenges that changed his life on and off the court."
    },
    {
      docsId: 12,
      title: "Jeen-yuhs",
      imageMobile: "https://ik.imagekit.io/ojfedrprt/poster-780.jpg",
      image: "https://ik.imagekit.io/ojfedrprt/maxresdefault.jpg",
      fullVideo:
        "https://ik.imagekit.io/ojfedrprt/jeen-yuhs__A_Kanye_Trilogy___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667254957389",
      videoID: "ndl1W4ltcmg",
      url:
        "https://ik.imagekit.io/ojfedrprt/jeen-yuhs__A_Kanye_Trilogy___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667254957389",
      writers: "J. Ivy,Coodie Simmons",
      genre: "HipHop",
      director: "	Coodie Simmons,Chike Ozah",
      actors: "Kanye West",
      duration: "2h 20min",
      year: "2022",
      age: "18+",
      summary:
        "The lives of an emerging superstar and a filmmaker intertwine in this intense, intimate docuseries charting Kanye West's career, filmed over two decades."
    },
    {
      docsId: 13,
      title: "Defiant Ones",
      imageMobile:
        "https://ik.imagekit.io/ojfedrprt/defient-ones.jpg",
      image: "https://ik.imagekit.io/ojfedrprt/defiant-ones.jpg",
      fullVideo:
        "https://ik.imagekit.io/ojfedrprt/The_Defiant_Ones_I_Official_Trailer__HD__I_Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667255131234",
      videoID: "7VAqY7nxauE",
      url:
        "https://ik.imagekit.io/ojfedrprt/The_Defiant_Ones_I_Official_Trailer__HD__I_Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667255131234",
      writers: "Allen Hughes,Lasse Järvi,Doug Pray",
      genre: "Fantasy TV Shows, TV Dramas, US TV Shows",
      director: "	Allen Hughes",
      actors: "Dr Dre, Jimmy Lovine",
      duration: "4h 10min",
      year: "2017",
      age: "16+",
      summary:
        "The Defiant Ones is a four-part American television documentary series, directed by Allen Hughes, that aired on HBO from July 9 to July 12, 2017. It focuses on the careers of and partnership between Jimmy Iovine and Dr. Dre, co-founders of Beats Electronics."
    },
    {
      docsId: 14,
      title: "Anelka ",
      imageMobile:
        "https://ik.imagekit.io/ojfedrprt/anelka.jpg",
      image: "https://ik.imagekit.io/ojfedrprt/maxresdefault-1.jpg",
      fullVideo:
        "https://ik.imagekit.io/ojfedrprt/Anelka__Misunderstood___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667255261246",
      videoID: "S5qJXYNNINo",
      url:
        "https://ik.imagekit.io/ojfedrprt/Anelka__Misunderstood___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667255261246",
      writers: "Franck Nataf",
      genre:
        "Period drama, Coming-of-ageDocumentary Films, Biographical Documentaries, French, Sports Movies",
      actors: "Nicolas Anelka",
      duration: "2h 35min",
      year: "2021",
      age: "18+",
      summary:
        "Inscrutable, incomparable or both? Famed French footballer Nicolas Anelkas controversial legacy is explored in this in-depth documentary"
    },
    {
      docsId: 15,
      title: "Neymar",
      imageMobile:
        "https://ik.imagekit.io/ojfedrprt/Is-Netflix-premiering-the-documentary-film-called-Neymar-The-Perfect-Chaos.jpg",
      image: "https://ik.imagekit.io/ojfedrprt/maxresdefault-2.jpg",
      fullVideo:
        "https://ik.imagekit.io/ojfedrprt/Neymar__The_Perfect_Chaos___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667255415315",
      videoID: "W5QJW0M5pik",
      url:
        "https://ik.imagekit.io/ojfedrprt/Neymar__The_Perfect_Chaos___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667255415315",
      writers:
        " Russell Ackerman, John Schoenfelder, Kristina Ceyton, Samantha Jennings, Mark Patterson, Кристина Кейтон",
      genre:
        "Social & Cultural Docs, Docuseries, Biographical Documentaries, US TV Shows",
      director: "Yolanda Ramke, Ben Howling",
      actors: "Neymar j, David Backham",
      duration: "1h 30min",
      year: "2022",
      age: "16+",
      summary:
        "Beloved worldwide but also a lightning rod for criticism, Neymar shares the highs and lows of his personal life and brilliant football career."
    },
    {
      docsId: 16,
      title: "Turning Point",
      imageMobile:
        "https://ik.imagekit.io/ojfedrprt/turning-point.jpg",
      image: "https://ik.imagekit.io/ojfedrprt/turning-point2.jpg",
      fullVideo:
        "https://ik.imagekit.io/ojfedrprt/Turning_Point__9_11_and_the_War_on_Terror___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667255572524",
      videoID: "L6P3nI6VnlY",
      url:
        "https://ik.imagekit.io/ojfedrprt/Turning_Point__9_11_and_the_War_on_Terror___Official_Trailer___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667255572524",
      writers:
        "Chris Hemsworth, Joe Russo, Eric Gitter, Peter Schwerin, Mike Larocca, Anthony Russo.",
      genre:
        "Docuseries, Political Documentaries, Political TV Shows, US TV Shows",
      director: "Brian Knappenberger",
      actors: "Chris Hemsworth, Rudhraksh Jaiswal, Randeep Hooda",
      duration: "1h 57min",
      year: "2021",
      age: "18+",
      summary:
        "This unflinching series documents the 9/11 terrorist attacks, from Al Qaeda's roots in the 1980s to America's response, both at home and abroad."
    },
    {
      docsId: 17,
      title: "The Last Dance",
      imageMobile: "https://ik.imagekit.io/ojfedrprt/last-dance.png",
      image: "https://ik.imagekit.io/ojfedrprt/maxresdefault-3.jpg",
      fullVideo:
        "https://ik.imagekit.io/ojfedrprt/The_Last_Dance___Relive_the_Phenomenon___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667255690982",
      videoID: "QwVLObz0MGs",
      url:
        "https://ik.imagekit.io/ojfedrprt/The_Last_Dance___Relive_the_Phenomenon___Netflix.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1667255690982",
      writers: "Jason Hehir",
      genre: "Social & Cultural Docs, Docuseries, US TV Shows",
      director: "	Tom Hoffie, Joanna Werner",
      actors: "Michael Jordan, Scottie Pippen, Dennis Rodman",
      duration: "1h 02min",
      year: "2020",
      age: "16+",
      summary:
        "This docuseries chronicles the rise of superstar Michael Jordan and the 1990s Chicago Bulls, with unaired footage from an unforgettable 1997-98 season."
    }
  ];

const DocumentariesCarousel = () => {
    return(
        <div>
            <p style={cinzel.style} className='flex  items-center px-1 text-white text-base font-semibold py-[1px] pl-1'>Documentaries<div><MdArrowForwardIos size={16}/></div></p>
            <div className='z-10 left-0 right-0 h-[200px]'>
                <Carousel show={3} slide={3} swiping={true} leftArrow={true} rightArrow={true} infinite={true}>
                {documentaries.map(documentary =>(
                        <div key={documentary.id}>
                            <Card imageMobile={documentary.imageMobile} id={documentary.id} trailer={documentary.url} fullVideo={documentary.fullVideo}/>
                        </div>
                    ))}

                </Carousel>
            </div>
        </div>
    )
}

export default DocumentariesCarousel;
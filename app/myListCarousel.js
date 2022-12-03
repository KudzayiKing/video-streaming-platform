'use client';
import Card from './card';
import { Carousel } from '@trendyol-js/react-carousel';
import { Cinzel } from '@next/font/google';
import { MdArrowForwardIos } from 'react-icons/md';

const cinzel = Cinzel({
    subsets: 'latin',
    weight: ['800']
})

const myList = [];

const MyListCarousel = ({
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
    return(
        <div>
            <p style={cinzel.style} className='flex  items-center  px-1 text-white text-base font-semibold py-[1px] pl-1'>My List<div><MdArrowForwardIos size={16}/></div></p>
            <div className='z-10 left-0 right-0 h-[200px]'>
                <Carousel show={3} slide={3} swiping={true} leftArrow={true} rightArrow={true} infinite={false}>

                        <div key={id} onClick={(event)=>{showInfoBox(event, index)}}>
                            <Card 
                            imageMobile={imageMobile} 
                            id={id} 
                            trailer={url} 
                            fullVideo={fullVideo} 
                            index={index}
                            />
                            </div>

                </Carousel>
            </div>
        </div>
    )
}

export default MyListCarousel;
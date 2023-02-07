'use client'
import Image from 'next/image';
import React, { useState } from 'react';



const CardCarousel = ({ image, trailer }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='flex justify-center items-center'
            onMouseEnter={() => {
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
            }}
        >
            <Image
                src={image}
                alt="show_poster"
                placeholder="blur"
                blurDataURL="https://ik.imagekit.io/ojfedrprt/10x10-5f5f5f7f.png"
                height="160"
                width="290"
                className='z-20 h-[160px] w-[290px] rounded-3xl lg:max-xl:rounded-xl lg:max-xl:h-[93px] lg:max-xl:w-[165px] xl:rounded-2xl'
            />
            {isHovered && <video src={trailer} autoPlay={true} muted={false} className='w-[290px] h-[160px] scale-150 absolute top-[6px]  rounded-3xl z-30' />}

        </div>
    )
}

export default CardCarousel;
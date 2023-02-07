'use client'
import Image from 'next/image';
import React, { useState } from 'react';



const CardSeries = ({ image, trailer }) => {
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
                height="93"
                width="165"
                className=' h-[93px] w-[165px] rounded-3xl lg:rounded-3xl xl:rounded-3xl'
            />
            {isHovered && <video src={trailer} autoPlay={true} muted={false} className='w-[165px] h-[93px] scale-150 absolute top-[6px]  rounded-3xl z-10' />}

        </div>
    )
}

export default CardSeries;
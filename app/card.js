'use client'
import Image from 'next/image';
import { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";

const Card = ({ imageMobile, id, trailer, fullVideo, index, showInfoBox }) => {
    return (


        <div className='justify-end align-center flex h-[190px] w-[120px]'>
            <Image
                src={imageMobile}
                alt="show_poster"
                placeholder="blur"
                blurDataURL="https://ik.imagekit.io/ojfedrprt/10x10-5f5f5f7f.png"
                height="190"
                width="120"
                className='h-[190px] w-[120px] rounded-lg'
            />
        </div>

    )
}

export default Card;
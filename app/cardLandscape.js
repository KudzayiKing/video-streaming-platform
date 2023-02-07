'use client'
import Image from 'next/image';



const CardLandscape = ({ image }) => {
    return (
        <div>
            <Image
                src={image}
                alt="show_poster"
                placeholder="blur"
                blurDataURL="https://ik.imagekit.io/ojfedrprt/10x10-5f5f5f7f.png"
                width="165"
                height="93"
                className='h-[93px] w-[165px] rounded-lg drop-shadow-xl'
            />
        </div>
    )
}

export default CardLandscape;
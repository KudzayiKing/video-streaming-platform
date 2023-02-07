import Image from "next/image"

const CardMain = ({ image }) => {
    return (
        <div>
        <div className=''>
            <Image 
            src={image}
            alt="show_poster" 
            placeholder="blur"
            blurDataURL="https://ik.imagekit.io/ojfedrprt/10x10-5f5f5f7f.png"
            height="112" 
            width="200" 
            className='h-[112px] w-[200px] rounded-lg drop-shadow-xl'
            />
        </div>
        </div>
    )
}

export default CardMain;
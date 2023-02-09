import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineSearch } from 'react-icons/hi';
import { RiAccountCircleLine } from 'react-icons/ri';

// logo.
const logo = 'https://ik.imagekit.io/ojfedrprt/ztv-logo_hd.png'

const Navigation = () => {
    return (
        <div
            className='z-40 fixed top-0  flex items-center justify-evenly translate-y-full ease-in-out'>
            <div className='z-40 fixed top-0 h-12 left-0 right-0 mx-auto shadow-xl flex items-center justify-between  text-sm  text-white w-screen bg-grey  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 transform-scale-x-100' >
                <Image alt='logo' src={logo} width={24} height={24} className='z-10 ml-2' />
                <Link href={'./'} className='pl-10 lg:pl-[75px] '><p className="text-orange-400 font-cinzel font-semibold pt-0.5 text-lg">ZBC TV</p></Link>
                <div className='flex flex-row pr-4 w-20 justify-between min-[350px]:pr-[28px] xl:pr-6 2xl:w-24 2xl:pr-8'>
                    <RiAccountCircleLine size={28} color={'orange'} className='' />
                    <HiOutlineSearch size={28} color={'orange'} />
                </div>
            </div>
        </div>
    )
}

export default Navigation;

'use client';
import {RiAccountCircleLine} from 'react-icons/ri';
import {RiSearchLine } from 'react-icons/ri';
import {RiHeartLine} from 'react-icons/ri'
import {RiHome2Line} from 'react-icons/ri'
import Link from 'next/link';





const Footer = () => {

    return(
        <div className='z-20 relative h-screen w-screen md:hidden flex justify-start pl-1 shadow-lg'>
            <div className='fixed bottom-2 flex items-center justify-evenly  text-white  h-14 w-10/12 bg-white  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100/10 rounded-2xl'>
                <Link  href='/' className="flex flex-col justify-center items-center"><RiHome2Line color="#FFFFFF" size="26px"/><p className="text-xs font-normal space-y-1 text-shadow-xl">Home</p></Link>
                <Link href='/search' className="flex flex-col justify-center items-center"><RiSearchLine color="#FFFFFF" size="26px"/><p className="text-xs font-normal space-y-1 text-shadow-xl">Search</p></Link>
                <Link href='/myList' className="flex flex-col justify-center items-center"><RiHeartLine color="#FFFFFF" size="26px"/><p className="text-xs font-normal space-y-1 text-shadow-xl">My List</p></Link>
                <Link href='/profile' className="flex flex-col justify-center items-center"><RiAccountCircleLine color="#FFFFFF" size="26px"/><p className="text-xs font-normal space-y-1 text-shadow-xl">Profile</p></Link>
            </div> 

        </div>
    )
}

export default Footer;
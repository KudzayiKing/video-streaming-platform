/* Use client side rendering for components with state and hooks https://beta.nextjs.org/docs/rendering/server-and-client-components */
'use client';
import { TiThMenuOutline } from 'react-icons/ti'; 
import Footer from './footer';
import { useState } from 'react';

const ButtomMenu = () => {
    /* State to store and change footer visibility */
    const [footerVisibility, setFooterVisibility] = useState(false);
    /* Function to toggle bottom menu */
    const toggleFooterVisibility = () => {
        setFooterVisibility(!footerVisibility);
    }
    return(
        <div className='relative '>
        <div className='z-20 fixed h-14 w-14  right-1 bottom-2 rounded-full  bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100/10 shadow-lg'>
        <button style={{ WebkitTapHighlightColor: 'transparent' }} onClick={toggleFooterVisibility}  className="z-10 relative pl-3 top-[6px] text-white flex flex-col justify-center items-center"><TiThMenuOutline color="#FFFFFF" size="26px"/><p className='text-xs font-normal'>Menu</p>
        </button>

        </div>
        <div>
        {/* Conditionally render footer using && logic statement */}
        {footerVisibility && <Footer/>}
        </div>
        </div>
    )
}

export default ButtomMenu;
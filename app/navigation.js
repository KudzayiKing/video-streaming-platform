import Link from 'next/link';
import { Cinzel } from '@next/font/google'

const cinzel = Cinzel({
    subsets: 'latin',
    weight: ['800']
})



const Navigation = () => {
    return(
        <div className='relative'>
        <div className='z-20 fixed top-0 h-12 left-0 right-0 mx-auto shadow-xl flex items-center justify-start  text-sm  text-white w-screen bg-black  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50' >
            <Link href={'./'} className='pl-2 pr-2'><p style={cinzel.style} className="text-orange-400 font-semibold pt-0.5 text-sm">STREAMING</p></Link>
            <nav className='flex justify-between space-x-4 md:space-x-7 ' > 
                <Link href={'/tvShows'} ><p  className='drop-shadow-sm font-semibold  shadow-black  text-xs'>TV Shows</p></Link>
                <Link href={'/movies'}  className='drop-shadow-sm font-semibold shadow-black  text-xs'>Movies</Link>
                <Link href={'/documentaries'}   className='drop-shadow-sm font-semibold shadow-black  text-xs'>Documentaries</Link>
                <Link href={'/myList'}   className='drop-shadow-sm font-semibold shadow-black  text-xs'>My List</Link>
            </nav>
        </div>
        </div>
    )
}

export default Navigation;
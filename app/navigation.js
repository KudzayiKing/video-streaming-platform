import Link from 'next/link';
import { Cinzel } from '@next/font/google'

const cinzel = Cinzel({
    subsets: 'latin',
    weight: ['800']
})



const Navigation = () => {
    return(
        <div className='relative'>
        <div className='z-20 fixed top-0 h-12 mx-auto shadow-xl flex items-center justify-start pl-1 text-sm  text-white w-screen bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100/10
' >
            <Link href={'./'} className='pr-2'><p style={cinzel.style} className="text-orange-400 font-semibolds pt-0.5 text-shadow-sm">STREAMING</p></Link>
            <nav className='flex justify-between space-x-2 md:space-x-7 ' > 
                <Link href={'/tvShows'} ><p className='drop-shadow-sm font-semibold  shadow-black text-shadow-sm'>TV Shows</p></Link>
                <Link href={'/movies'} className='drop-shadow-sm font-semibold shadow-black text-shadow-sm'>Movies</Link>
                <Link href={'/documentaries'} className='drop-shadow-sm font-semibold shadow-black text-shadow-sm'>Documentaries</Link>
                <Link href={'/myList'} className='drop-shadow-sm font-semibold shadow-black text-shadow-sm'>My List</Link>
            </nav>
        </div>
        </div>
    )
}

export default Navigation;
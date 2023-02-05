import { signOut, useSession } from 'next-auth/react'
import {House, Book, MagnifyingGlass, PlusCircle, HeartStraight, Rss} from 'phosphor-react'


export function Sidebar(){

    const {data:session} = useSession();

    
    return(
        <div className="w-60 h-screen text-gray-500 text-sm p-5 border-r border-gray-900" >
           <div className='space-y-4'>
                {session?.user && <button onClick={() =>{signOut()}}>{session.user.name} - Log Out</button>}
                <button className='flex items-center space-x-2 hover:text-white'>
                    <House className='w-5 h-5' weight="fill" />
                    <p>Home</p>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <MagnifyingGlass className='w-5 h-5' weight="fill" />
                    <p>Search</p>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <Book className='w-5 h-5' weight="fill" />
                    <p>Your Library</p>
                </button>

                <hr className='border-t-[0.1px] border-gray-900'/>

                <button className='flex items-center space-x-2 hover:text-white'>
                    <PlusCircle className='w-5 h-5' weight="fill" />
                    <p>Create playlist</p>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <HeartStraight className='w-5 h-5' weight="fill" />
                    <p>Liked Songs</p>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <Rss className='w-5 h-5' weight="fill" />
                    <p>Your Episodes</p>
                </button>

                <hr className='border-t-[0.1px] border-gray-900'/>

                {/* Playlist */}
                <p className='cursor-pointer hover:text-white'> Playlist name</p>
                <p className='cursor-pointer hover:text-white'> Playlist name</p>
                <p className='cursor-pointer hover:text-white'> Playlist name</p>
                <p className='cursor-pointer hover:text-white'> Playlist name</p>
                <p className='cursor-pointer hover:text-white'> Playlist name</p>
                <p className='cursor-pointer hover:text-white'> Playlist name</p>
           </div>
        </div>
    )
}
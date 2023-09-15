
// Assets
import { BiHomeCircle } from 'react-icons/bi'
import { HiOutlineHashtag } from 'react-icons/hi'
import { BsBell, BsEnvelope, BsThreeDots, BsTwitter } from 'react-icons/bs'
import { BsBookmark } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import Link from 'next/link'

const NAVIGATION_ITEMS = [
    {
        title: "Twitter",
        icon: BsTwitter,
    },
    {
        title: "Home",
        icon: BiHomeCircle
    },
    {
        title: "Explore",
        icon: HiOutlineHashtag
    },
    {
        title: "Notifications",
        icon: BsBell,
    },
    {
        title: "Messages",
        icon: BsEnvelope
    },
    {
        title: "Bookmarks",
        icon: BsBookmark
    },
    {
        title: "Profile",
        icon: BiUser
    },

]

const LeftSideBar = () => {
    return (
        <section className='fixed w-[275px] flex flex-col h-screen items-stretch px-6'>

            <div className='flex flex-col items-stretch h-full space-y-4 mt-4'>
                {
                    NAVIGATION_ITEMS.map((item) => (
                        <div key={item.title}>
                            <Link className='hover:bg-white/10 text-2xl transition duration-200 rounded-3xl py-2 px-6 flex items-start w-fit justify-center space-x-4' href={`/${item.title.toLowerCase()}`} key={item.title}>
                                <div><item.icon /> </div>
                                {
                                    item.title !== 'Twitter' && <div>{item.title}</div>
                                }
                            </Link>
                        </div>
                    ))
                }
                <button className='rounded-full m-4 bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200'>
                    Tweet
                </button>
            </div>

            <button className='rounded-full flex items-center space-x-2 m-4 bg-transparent p-4 text-center hover:bg-white/20 transition duration-200 w-full justify-between'>
                <div className='flex items-center space-x-2'>

                    <div className='rounded-full bg-slate-400 w-10 h-10'></div>

                    <div className='text-left text-sm' >
                        <div className='font-semibold'>Club of Coders</div>
                        <div className=''>@clubofcoderscom</div>
                    </div>
                </div>

                <div>
                    <BsThreeDots />
                </div>
            </button>
        </section>)
}

export default LeftSideBar
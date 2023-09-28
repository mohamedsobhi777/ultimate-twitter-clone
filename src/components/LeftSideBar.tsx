'use client';

// Assets
import { BiHomeCircle } from 'react-icons/bi'
import { HiOutlineHashtag } from 'react-icons/hi'
import { BsBell, BsEnvelope, BsThreeDots, BsTwitter } from 'react-icons/bs'
import { BsBookmark } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import Link from 'next/link'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

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
    const supabase = createClientComponentClient()

    async function signInWithEmail() {
        const { data, error } = await supabase.auth.signInWithOtp({
            email: 'example@email.com',
            options: {
                emailRedirectTo: 'https://example.com/welcome',
            },
        })
    }

    return (
        <section className='sticky top-0 w-[23%] xl:flex hidden flex-col h-screen items-stretch text-white'>

            <div className='flex flex-col items-stretch h-full mt-4 space-y-4'>
                {
                    NAVIGATION_ITEMS.map((item) => (
                        <div key={item.title}>
                            <Link className='flex items-start justify-center px-6 py-2 space-x-4 text-2xl text-white transition duration-200 hover:bg-white/10 rounded-3xl w-fit' href={`/${item.title.toLowerCase()}`} key={item.title}>
                                <div><item.icon /> </div>
                                {
                                    item.title !== 'Twitter' && <div>{item.title}</div>
                                }
                            </Link>
                        </div>
                    ))
                }
                <button className='p-4 m-4 text-2xl text-center transition duration-200 rounded-full bg-twitterColor hover:bg-opacity-70'>
                    Tweet
                </button>
            </div>

            <button className='flex items-center justify-between w-full p-4 space-x-2 text-center transition duration-200 bg-transparent rounded-full hover:bg-white/20'>
                <div className='flex items-center space-x-2'>

                    <div className='w-10 h-10 rounded-full bg-slate-400'></div>

                    <div className='text-sm text-left' >
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
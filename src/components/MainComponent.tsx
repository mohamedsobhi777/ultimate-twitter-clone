import React from 'react'

// Assets
import { BsChat, BsDot, BsThreeDots } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai'
import { IoShareOutline, IoStatsChart } from 'react-icons/io5'
import ComposeTweet from './server-components/compose-tweet'


const MainComponent = () => {
    return (
        <main className='flex w-full xl:w-[50%] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600 '>
            <h1 className='sticky top-0 p-6 text-xl font-bold text-white bg-black/10 backdrop-blur'>Home</h1>

            <div className='border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-4 space-x-2 border-gray-600 relative'>
                <div className='flex-none w-10 h-10 rounded-full bg-slate-400'></div>

                <ComposeTweet />
            </div>
            <div className='flex flex-col w-full '>
                {
                    Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className='border-b-[0.5px] border-gray-600 p-2 flex space-x-4 ove'>
                            <div>
                                <div className='w-10 h-10 rounded-full bg-slate-200' />
                            </div>
                            <div className='flex flex-col space-y-4'>
                                <div className='flex items-center justify-between'>

                                    <div className='flex items-center w-full space-x-1'>
                                        <div className='font-bold text-white'>Club of Coders</div>
                                        <div className='text-gray-500'>@clubofcoderscom</div>
                                        <div className='text-gray-500'><BsDot /></div>
                                        <div className='text-gray-500'>1 hour ago</div>
                                    </div>
                                    <div>
                                        <BsThreeDots />
                                    </div>
                                </div>
                                <div className='text-base text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate excepturi assumenda unde atque doloremque totam aspernatur laboriosam et vitae aliquid repudiandae esse sapiente voluptatibus maxime dolores, odit fuga commodi sequi.
                                    Culpa dolore officiis eveniet inventore a repudiandae minima dolorum quae iste id modi, quo vel reprehenderit itaque nesciunt eius sint neque iure unde eaque quaerat perferendis maiores, provident veritatis. </div>
                                <div className='w-full mt-2 bg-slate-400 aspect-square h-80 rounded-xl'>

                                </div>
                                <div className='flex items-center justify-start w-full mt-2 space-x-20'>
                                    <div className='p-3 transition duration-200 rounded-full cursor-pointer hover:bg-white/10'>
                                        <BsChat />
                                    </div>
                                    <div className='p-3 transition duration-200 rounded-full cursor-pointer hover:bg-white/10'>
                                        <AiOutlineRetweet />
                                    </div>
                                    <div className='p-3 transition duration-200 rounded-full cursor-pointer hover:bg-white/10'>
                                        <AiOutlineHeart />
                                    </div>
                                    <div className='p-3 transition duration-200 rounded-full cursor-pointer hover:bg-white/10'>
                                        <IoStatsChart />
                                    </div>
                                    <div className='p-3 transition duration-200 rounded-full cursor-pointer hover:bg-white/10'>
                                        <IoShareOutline />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>


        </main>)
}

export default MainComponent
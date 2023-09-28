import React from 'react'
import { BsSearch } from 'react-icons/bs'

const RightComponent = () => {
    return (
        <section className='sticky flex-col items-stretch hidden w-full h-screen px-6 mt-2 overflow-scroll xl:flex top-2'>
            <div>
                <div className='relative w-full h-full group'>
                    <input
                        type="text"
                        placeholder="Search Twitter"
                        className='w-full h-full px-8 py-4 outline-none peer focus:border-primary focus:border bg-neutral-900/90 rounded-xl pl-14'
                        id="searchBox"
                    />
                    <label
                        htmlFor='searchBox'
                        className='absolute top-0 left-0 flex items-center justify-center h-full p-4 text-gray-500 peer-focus:text-primary'
                    >
                        <BsSearch className='w-5 h-5' />
                    </label>
                </div>
            </div>
            <div className='flex flex-col my-4 rounded-xl bg-neutral-900'>
                <h3 className='p-2 px-4 my-2 text-xl font-bold text-white'>What&apos;s happening</h3>
                <div>
                    {
                        Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className='p-4 transition duration-200 hover:bg-white/10 last:rounded-b-xl'>
                                <div className='text-lg font-bold text-white'>#trending ${i + 1}</div>
                                <div className='text-xs text-neutral-400'>35.4k</div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex flex-col my-4 rounded-xl bg-neutral-900'>
                <h3 className='p-2 px-4 my-2 text-xl font-bold text-white'>Who to Follow</h3>
                <div>
                    {
                        Array.from({ length: 3 }).map((_, i) => (
                            <div
                                key={i}
                                className='flex items-center justify-between p-4 space-x-4 transition duration-200 hover:bg-white/10 last:rounded-b-xl'
                            >
                                <div className='flex items-center space-x-2'>
                                    <div className='flex-none w-10 h-10 rounded-full bg-neutral-600'></div>
                                    <div className='flex flex-col'>
                                        <div className='font-bold text-white'>Other User</div>
                                        <div className='text-xs text-gray-500'>@otheruser1223</div>
                                    </div>
                                </div>

                                <button className='px-6 py-2 bg-white rounded-full text-neutral-950'>Follow</button>

                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}

export default RightComponent
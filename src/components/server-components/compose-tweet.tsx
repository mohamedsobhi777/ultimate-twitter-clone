import { Database } from '@/lib/supabase.types';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import React from 'react'
import { cookies, headers } from 'next/headers'
import { randomUUID } from 'crypto';

const ComposeTweet = () => {


    async function submitTweet(formData: FormData) {
        'use server'

        // const cartId = cookies().get("cartID")?.value
        console.log("formData", formData);
        const tweet = formData.get("tweet");
        if (!tweet) return;


        const supabase = createRouteHandlerClient<Database>({
            cookies
        })

        const { data: userData, error: userError } = await supabase.auth.getUser();

        if (userError) return;

        await supabase.from("tweets").insert({
            profile_id: userData.user.id,
            text: tweet.toString(),
            id: randomUUID()
        })

    }

    return (
        <form action={submitTweet as any} className='flex flex-col w-full h-full'>

            <input type="text" name="tweet" className='w-full h-full placeholder:text-2xl placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none text-white' placeholder="What's happening?" />

            <div className='flex items-center justify-between w-full'>
                <div></div>
                <div className='w-full max-w-[100px]'>
                    <button type="submit" className='w-full px-4 py-2 text-lg font-bold text-center text-white transition duration-200 rounded-full bg-twitterColor hover:bg-opacity-70'>
                        Tweet
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ComposeTweet
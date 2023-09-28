'use client';

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from './ui/input';
import { Button } from './ui/button';
import { SupabaseClient, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Toaster, toast } from 'sonner';



const AuthModel = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const supabase = createClientComponentClient()

    useEffect(() => {

        const getAuthUser = async () => {
            console.log("bef")
            const {
                data: { user },
                error
            } = await supabase.auth.getUser()

            if (!user) {
                setIsOpen(true);
            }

        }
        getAuthUser();

    }, [supabase.auth])


    return (
        <>
            <Toaster />
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className='p-6 bg-white'>
                    <h3 className='my-1 text-lg'>Please sign in to continue</h3>
                    <form onSubmit={async (e) => {
                        e.preventDefault();
                        setIsLoading(true);
                        const { data, error } = await supabase.from("profiles").select().eq("username", username.trim());

                        if (data && data?.length > 0) {

                            setIsLoading(false);
                            return toast.error(
                                "username already exists, please use another."
                            )
                        }
                        await supabase.auth.signInWithOtp({
                            email: email.trim(),
                            options: {
                                data: {
                                    username
                                }
                            }
                        })
                        setIsLoading(false);
                        setIsOpen(false);
                    }}>
                        <Input type="email" placeholder='email' onChange={e => setEmail(e.target.value)} />
                        <Input type="text" placeholder='username' min={3} className='my-2' onChange={e => setUsername(e.target.value)} />
                        <p className='my-2 text-sm text-gray-900'>
                            you will receive a magic link here!
                        </p>
                        <div className='flex justify-end w-full'>
                            <Button type="submit" disabled={isLoading}>
                                Login
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>

    )
}
export default AuthModel
// Components
import LeftSideBar from '@/components/LeftSideBar'
import MainComponent from '@/components/MainComponent'
import RightComponent from '@/components/RightComponent'
import { useCallback, useEffect, useState } from 'react'
import AuthModel from '@/components/AuthModel'



const Page = async () => {

  // const [isOpen, setIsOpen] = useState(false);


  // useEffect(() => {

  //   const getAuthUser = async () => {
  //     const {
  //       data: { user },
  //       error
  //     } = await supabase.auth.getUser()

  //     console.log("user", user)
  //   }
  //   getAuthUser();


  // }, [supabase.auth])

  // const signInWithEmail = useCallback(async () => {
  //   const { data, error } = await supabase.auth.signInWithOtp({
  //     email: 'mohamedsobhi777@email.com',
  //     options: {
  //       emailRedirectTo: 'localhost:3000/',
  //     },
  //   })
  // }, [supabase.auth])

  // useEffect(() => {
  //   signInWithEmail();
  // }, [signInWithEmail])

  return (
    <>
      <AuthModel />
      <div className='relative flex items-center justify-center w-full h-full bg-black'>

        {/* <AuthModel isNotAuth={error?.status == 401} /> */}
        {/* <AuthModel isNotAuth={true} /> */}
        <div className='xl:max-w-[70vw] w-full h-full flex relative '>

          <LeftSideBar />
          <MainComponent />
          <RightComponent />

        </div>
      </div>
    </>
  )
}

export default Page
import React, { useContext } from 'react'
import axios from 'axios';
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Lookup from '@/data/Lookup'
import { Button } from '../ui/button';
import { useGoogleLogin } from '@react-oauth/google';
import { UserDetailContext } from '@/context/UserDetailContext';
import uuid4 from 'uuid4';
  
function SigninDialog({openDialog , closeDialog}) {

const { userDetail, setUserDetail } = useContext(UserDetailContext);
const createUser = useMutation(api.user.CreateUser);

const googleLogin = useGoogleLogin({
  onSuccess: async (tokenResponse) => {
    
      const userInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        { headers: { Authorization: `Bearer ${tokenResponse?.access_token}` } },
      );
      console.log(userInfo);
      const user = userInfo.data;
      await createUser({
        name: user?.name,
        email: user?.email,
        picture: user?.picture,
        uid:uuid4()
      });
      if(typeof window!== undefined)
      {
        localStorage.setItem('user', JSON.stringify(user));
      }
      // const userData = { ...userInfo.data, _id: result };
      // localStorage.setItem('userDetail', JSON.stringify(userData));
      setUserDetail(userInfo?.data);
      closeDialog(false);
    
  },
  onError: errorResponse => console.log(errorResponse),
});
  return (
    <div><Dialog open={openDialog} onOpenChange={closeDialog}>
    
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="flex flex-col items-center justify-center">
        <h2 className='text-white font-bold text-2xl'>{Lookup.SIGNIN_HEADING}</h2>
        </DialogTitle>
        <DialogDescription className="flex flex-col items-center justify-center" >
           <div className="flex flex-col items-center justify-center">
           <h1 className='text-gray-400 font-bold text-md'>{Lookup.SIGNIN_SUBHEADING}</h1>
           <Button className='bg-sky-500  text-white mt-5'
           onClick={googleLogin}>Sign in</Button>
           </div>
        
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  </div>
  )
}

export default SigninDialog
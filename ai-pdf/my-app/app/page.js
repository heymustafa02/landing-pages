"use client"
import Image from "next/image";

import { SignIn, UserButton, useUser} from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useEffect } from "react";
export default function Home() {

  const {user}=useUser();
  const createUser=useMutation(api.user.createUser);

 useEffect (()=>{
  user&&CheckUser()
 }, [user])

  const CheckUser=async()=>{
    const result= await createUser({
      email:user?.primaryEmailAddress?.emailAddress,
      imageUrl:user?.imageUrl,
      userName:user?.fullName,
    })
console.log(result);
  }
  return (
   <div>
    <Button>Sign In</Button>
    <UserButton/>
   </div>
  )
}

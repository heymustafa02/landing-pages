"use client";
import Lookup from '@/data/Lookup'
import { ArrowRight } from 'lucide-react'
import React, { useState, useContext } from 'react'
import { Link } from 'lucide-react'
import Colors from '@/data/Colors';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { MessagesContext } from '@/context/MessagesContext';
import SigninDialog from './SigninDialog';
import { useRouter } from 'next/navigation';
import { UserDetailContext } from '@/context/UserDetailContext';

function Hero() {
    const [userInput, setUserInput] = useState(false);
    const {messages, setMessages} = useContext(MessagesContext);
    const {userDetail, setUserDetail} = useContext(UserDetailContext);
    const [openDialog, setOpenDialog] = useState(false);
    const CreateWorkspace = useMutation(api.workspace.CreateWorkspace);
    const router = useRouter();
    const onGenerate = async(input) => {
        if (!userDetail?.name) {
            setOpenDialog(true);
         
        }
        const msg ={
            role:'user',
            content:input
        }
        setMessages(msg);

        const workspaceId = await CreateWorkspace({
            messages:[msg],
            user:userDetail.id
        });
        console.log(workspaceId);
        router.push('/workspace/' + workspaceId);
           
    }

  return (
    <div className='flex flex-col items-center mt-36 gap-2'>
       <h2 className='font-bold text-4xl'> {Lookup.HERO_HEADING}</h2>
       <p className='text-gray-400 font-medium'>
         {Lookup.HERO_DESC}</p>
        <div className='p-5 border rounded-xl max-w-3xl w-full mt-5'
        style={{
            backgroundColor:Colors.BACKGROUND
        }}>
        <div className='flex gap-2'>
           <textarea placeholder = {Lookup.INPUT_PLACEHOLDER} 
           onChange={(event) => setUserInput(event.target.value)}
           className="outline-none bg-transparent w-full h-32 max-h-56 resize-none" />
           {userInput&& <ArrowRight 
           className="bg-blue-500 p-2 h-10 w-10 rounded-md cursor-pointer"  
           onClick={() => onGenerate(userInput)} />}
        </div>
        <div>
            <Link/>
        </div>
        </div>
        <div className='flex mt-5 flex-wrap max-w-2xl items-center justify-center gap-3 '>
            {Lookup.SUGGESTIONS.map((suggestion, index) => (
               <h2 key={index}
               onClick={() => onGenerate(suggestion)}
               className='p-1 px-2 border rounded-full text-sm
        text-gray-400 hover:text-white cursor-pointer'>{suggestion}</h2>
            ))}
        </div>
        <SigninDialog openDialog={openDialog} closeDialog={(v) => setOpenDialog(v)} />
    </div>
  )
}

export default Hero
// "use client";

// import Lookup from "@/data/Lookup";
// import { ArrowRight, Link } from "lucide-react";
// import React, { useContext, useState } from "react";
// import { Textarea } from "../ui/textarea";
// import Colors from "@/data/Colors";
// import { MessagesContext } from "@/context/MessagesContext";
// import { UserDetailContext } from "@/context/UserDetailContext";
// import SigninDialog from "./SigninDialog";

// function Hero() {
//   const [userInput, setuserInput] = useState(false);
//   const [openDialog, setOpenDialog] = useState(false);

//   const { messages, setMessages } = useContext(MessagesContext);
//   const { userDetails, setUserDetails } = useContext(Us);

//   const onGenerate = (input) => {
//     if (!userDetails?.name) {
//       setOpenDialog(true);
//     }
//     setMessages({
//       role: "user",
//       content: input,
//     });
//   };

//   return (
//     <div className="flex flex-col items-center mt-24 xl:mt-32 gap-2">
//       <h2 className="font-bold text-5xl"> {Lookup.HERO_HEADING}</h2>
//       <p className="text-gray-400 text-medium text-md mt-1">
//         {Lookup.HERO_DESC}
//       </p>
//       <div
//         className="border w-full mt-3 p-5 rounded-xl max-w-xl"
//         style={{
//           backgroundColor: Colors.BACKGROUND,
//         }}
//       >
//         <div className="flex gap-2">
//           <Textarea
//             className="bg-transparent h-36 max-h-56 w-full outline-none resize-none"
//             onChange={(event) => setuserInput(event.target.value)}
//             placeholder={Lookup.INPUT_PLACEHOLDER}
//           />
//           {userInput && (
//             <ArrowRight
//               onClick={() => {
//                 onGenerate(userInput);
//               }}
//               className="bg-blue-500 hover:bg-gray-700 rounded-sm p-1 h-8 w-8 cursor-pointer"
//             />
//           )}
//         </div>
//         <div>
//           <Link className="h-5 w-5" />
//         </div>
//       </div>
//       <div className="flex flex-wrap max-w-2xl justify-center gap-2">
//         {Lookup.SUGGSTIONS.map((item, index) => (
//           <h2
//             onClick={() => {
//               onGenerate(item);
//             }}
//             className="p-3 border rounded-full text-sm cursor-pointer text-gray-500 hover:text-white"
//             key={index}
//           >
//             {item}
//           </h2>
//         ))}
//       </div>
//       <SigninDialog
//         openDialog={openDialog}
//         closeDialog={(value) => {
//           setOpenDialog(false);
//         }}
//       />
//     </div>
//   );
// }

// export default Hero;
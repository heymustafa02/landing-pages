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
    const [userInput, setUserInput] = useState();
    const {messages, setMessages} = useContext(MessagesContext);
    const {userDetail, setUserDetail} = useContext(MessagesContext);
    const [openDialog, setOpenDialog] = useState(false);
    const CreateWorkspace = useMutation(api.workspace.CreateWorkspace);
    const router = useRouter();
    const onGenerate = async(input) => {
        if (!userDetail?.name) {
            setOpenDialog(true);
            return;
        }

        try {
            const msg = {
                role: 'user',
                content: input
            };
            setMessages(msg);

            const workspaceId = await createWorkspace({
                user: userDetail._id,
                messages: [msg]
            });

            if (workspaceId) {
                router.push(`/workspace/${workspaceId}`);
            } else {
                console.error("No workspace ID returned");
            }
        } catch (error) {
            console.error("Error creating workspace:", error);
        }
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
"use client"
import { MessagesContext } from '@/context/MessagesContext';
import { api } from '@/convex/_generated/api';
import { useConvex } from 'convex/react';
import { useParams } from 'next/navigation'
import React, { useContext, useEffect } from 'react'
import Colors from '@/data/Colors';
function ChatView() {
    const {id}= useParams();
    const convex= useConvex();
    const [messages, setMessages] = useContext(MessagesContext);
    useEffect(() => {
        id&&GetWorkspaceData();
    },[id])
    // use to get workspace data
    const GetWorkspaceData = async () => {
        const result = await convex.query(api.workspace.GetWorkspaceData, {
            workspaceId:id
        });
        setMessages(result?.messages);
        console.log(result);
    };
  return (
    <div>
      <div>
        {messages?.map((msg, index) => (
          <div key={index} style={{
            backgroundColor:Colors.CHAT_BACKGROUND,
          }
            
          }>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatView
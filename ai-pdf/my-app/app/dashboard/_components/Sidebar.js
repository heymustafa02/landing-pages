import React from 'react'
import Image from 'next/image'
import {Button} from '/components/ui/button'
import { Layout, Shield } from 'lucide-react'

function Sidebar() {
  return (
    <div className='shadow-md h-screen p-7'>
      <Image src={"/PDF.svg"} alt='logo' 
      width={120} height={120}/>  
     <div className='mt-5'>
        <Button className='w-full'>+ Upload PDF</Button>

      <div className='flex gap-2 items-center p-3 mt-3
       hover:bg-slate-100 rounded-lg cursor-pointer'>
        <Layout/>
        <h2>Workspace</h2>
      </div>
      <div className='flex gap-2 items-center p-3 mt-1
       hover:bg-slate-100 rounded-lg cursor-pointer'>
        <Shield/>
        <h2>Upgrade</h2>
      </div>
      <div className='flex gap-2 items-center p-3 mt-1
       hover:bg-slate-100 rounded-lg cursor-pointer'>
        <Layout/>
        <h2>Workspace</h2>
      </div>
      
     </div>
     <div>
      
      </div>
    </div>
  )
}

export default Sidebar
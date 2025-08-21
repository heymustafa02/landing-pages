import Image from "next/image";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import { UserDetailContext } from '@/context/UserDetailContext';

function Header() {
  const { userDetail,setUserDetail } = useContext(UserDetailContext);
  
 
  return (
    <div className="p-4 flex justify-between items-center">
      <Image src={"/logo.png"} width={70} height={70} alt="hello ji" />
     <div className="flex gap-5">
        <Button className="ghost">Sign in</Button>
        <Button className="text-white bg-sky-500">Get Started</Button>
      </div>
    </div>
  );
}

export default Header;

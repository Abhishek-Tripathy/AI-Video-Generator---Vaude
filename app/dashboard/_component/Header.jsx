import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="p-3 px-5 flex items-center justify-between shadow-md bg-white sticky top-0 z-50">
      <div className="cursor-pointer">
        <Image src={"/logo.png"} width={100} height={100} alt="logo" />
      </div>
      <div className="flex gap-3 items-center">
        <Button>Dashboard</Button>
        <UserButton />
      </div>
    </div>
  );
}


export default Header;

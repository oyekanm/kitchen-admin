import React from "react";
import SideNav from "./SideNav";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { LoginButton } from "../auth/buttons.components";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default async function Layout ({ children }: Props)  {
  const session = await getServerSession(authOptions);
  // console.log(session); 
  

  if (!session) {
//  return   redirect("/auth/signin?callbackurl=/products")
    return (
      <LoginButton />
    );
  }

  return (
    <div className="flex">
      <SideNav />
      <main className="min-h-screen p-8 px-12 w-full">{children}</main>
    </div>
  );
};



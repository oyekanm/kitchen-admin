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
    return (
      <section className="min-h-screen w-full flex items-center justify-center">
        <LoginButton />
      </section>
    );
  }

  return (
    <div className="flex">
      <SideNav />
      <main className="min-h-screen p-8 px-12 w-full">{children}</main>
    </div>
  );
};



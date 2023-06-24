import React from "react";
import SideNav from "./SideNav";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { LoginButton } from "../auth/buttons.components";
import { redirect } from "next/navigation";
import { Colors } from "../Color";

type Props = {
  children: React.ReactNode;
};

export default async function Layout({ children }: Props) {
  const session = await getServerSession(authOptions);
  // console.log(session);

  if (!session) {
    return (
      <section className="min-h-screen relative w-full flex flex-col items-center justify-center">
        <p className={`${Colors.primary} text-[2.5rem] font-bold absolute top-[3rem] left-[2rem]`}>
         This is a Protected Route!!! <br/>
         You need an Admin access
        </p>
        <div >
          <LoginButton />
        </div>
      </section>
    );
  }

  return (
    <div className="flex">
      <SideNav />
      <main className="min-h-screen p-8 px-12 w-full">{children}</main>
    </div>
  );
}

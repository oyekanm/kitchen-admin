"use client"
import React, { useState } from "react";
import SideNav from "./SideNav";
import Logo from "./Logo";

type Props = {
  children: React.ReactNode;
};

export default async function Layout({ children }: Props) {
  const [showNav,setShowNav] = useState(false)

  // const session = await getServerSession(authOptions);
  // console.log(session);

  // if (!session) {
  //   return (
  //     <section className="min-h-screen relative w-full flex flex-col items-center justify-center">
  //       <p className={`${Colors.primary} text-[2.5rem] font-bold absolute top-[3rem] left-[2rem]`}>
  //        This is a Protected Route!!! <br/>
  //        You need an Admin access
  //       </p>
  //       <div >
  //         <LoginButton />
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <div className="sm:flex">
       <div className=" md:hidden flex items-center p-4">
        <button 
        onClick={() => setShowNav(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6">
          <Logo />
         
        </div>
      </div>
      <SideNav showNav={showNav} />
      <main className="min-h-screen p-8 sm:px-12 w-full">{children}</main>
    </div>
  );
}

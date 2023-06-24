"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { Bg } from "../components/Color";

export default function Logout() {
  // console.log(window.location.origin);

  return (
    <>
      <p className="text-[2rem] font-bold ">Logout</p>
      <div className="flex justify-center items-center h-full">
        <button
          onClick={() =>
            signOut({
              callbackUrl: `${window.location.origin}/`,
            })
          }
          className={`${Bg.info} p-8 px-16 rounded-[1rem] shadow-[0_5px_15px_rgba(0,0,0,0.4)] text-[2rem] font-semibold`}
        >
          Sign out
        </button>
      </div>
    </>
  );
}

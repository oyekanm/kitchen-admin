"use client"

import { signIn } from "next-auth/react";

export default function Component() {
  return (
    <div className="flex justify-center items-center mt-[20%]">
      <button
        className="bg-slate-500 text-[2rem] font-bold rounded-[1rem] px-[1rem] py-[2rem]"
        onClick={() => signIn("google")}
      >
        Sign in
      </button>
    </div>
  );
}

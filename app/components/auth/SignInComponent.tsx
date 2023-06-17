import React from "react";
import { Bg } from "../Color";
import { signIn } from "next-auth/react";
import { headers } from "next/headers";
import { http } from "@/app/layout";

export default function SignInComponent() { 
  const headersList = headers();
  const domain = headersList.get("host");
  return (
    <section className="min-h-screen w-full flex items-center justify-center">
      <button
        className={`${Bg.info} p-8 px-16 rounded-[1rem] shadow-[0_5px_15px_rgba(0,0,0,0.4)] text-[2rem] font-semibold`}
        onClick={async () =>
          await signIn("google", {
            redirect:true,
            callbackUrl: `/`,
          })
        }
        // callbackUrl: `${http}://${domain}/`,
      >
        Sign in
      </button>
    </section>
  );
}

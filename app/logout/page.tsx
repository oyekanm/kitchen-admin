"use client";
import { signOut } from "next-auth/react";
import React from "react";

export default function Logout() {
  // console.log(window.location.origin);
  
  return (
    <>
      <div>Logout</div>
      <button
        onClick={() =>
          signOut({
            callbackUrl: `${window.location.origin}/`,
          })
        }
      >
        Sign out
      </button>
    </>
  );
}

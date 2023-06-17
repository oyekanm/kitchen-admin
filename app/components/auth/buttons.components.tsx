"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Bg } from "../Color";

export  function LoginButton() {
  return (
    <button className={`${Bg.info} p-8 px-16 rounded-[1rem] shadow-[0_5px_15px_rgba(0,0,0,0.4)] text-[2rem] font-semibold`}  onClick={async() => await signIn()}>
      Sign in
    </button>
  );
};

export const RegisterButton = () => {
  return (
    <Link href="/register" style={{ marginRight: 10 }}>
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signOut()}>
      Sign Out
    </button>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};

"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

export default function Logout() {
  return (
    <>
    <div>Logout</div>
    <button onClick={() => signOut()}>Sign out</button>
    </>
  )
}

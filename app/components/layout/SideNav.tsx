"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineUnorderedList,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiLogOut, BiCategory } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";
import Logo from "./Logo";

export default function SideNav() {
  const route = usePathname();
  const NavClass = `flex items-center py-4 capitalize 
  text-[2rem] `;
  const NavClassInActive = `text-[rgba(0,0,0,.5)] font-semibold 
  `;
  const NavClassActive = `
 text-[rgba(0,0,0,.9)] font-bold`;

  return (
    <aside className="sm:w-[35%] md:w-[30%] h-full p-8 px-8  ">
     <div className=" md:fixed top-[2rem] left-[2rem] ">
     <div className="pb-4">
       <Logo/>
      </div>
      <Link
        className={`${NavClass} ${
          route==="/" ? `${NavClassActive}` : `${NavClassInActive}`
        }`}
        href={"/"}
      >
        <span className="mr-4">
          <AiOutlineHome />
        </span>
        dashboard
      </Link>
      <Link   className={`${NavClass} ${
          route.includes("/products") ? `${NavClassActive}` : `${NavClassInActive}`
        }`} href={"/products"}>
        <span className="mr-4">
          <AiOutlineShoppingCart />
        </span>
        products
      </Link>
      <Link  className={`${NavClass} ${
          route.includes("/categories") ? `${NavClassActive}` : `${NavClassInActive}`
        }`} href={"/categories"}>
        <span className="mr-4">
          <BiCategory />
        </span>
        categories
      </Link>
      <Link  className={`${NavClass} ${
          route.includes("/orders") ? `${NavClassActive}` : `${NavClassInActive}`
        }`} href={"/orders"}>
        <span className="mr-4">
          <AiOutlineUnorderedList />
        </span>
        orders
      </Link>
      <Link  className={`${NavClass} ${
          route.includes("/admins") ? `${NavClassActive}` : `${NavClassInActive}`
        }`} href={"/admins"}>
        <span className="mr-4">
          <HiOutlineUserGroup />
        </span>
        admins
      </Link>
      <Link  className={`${NavClass} ${
          route.includes("/settings") ? `${NavClassActive}` : `${NavClassInActive}`
        }`} href={"/settings"}>
        <span className="mr-4">
          <AiOutlineSetting />
        </span>
        settings
      </Link>
      <Link  className={`${NavClass} ${
          route.includes("/logout") ? `${NavClassActive}` : `${NavClassInActive}`
        }`} href={"/logout"}>
        <span className="mr-4">
          <BiLogOut />
        </span>
        Logout
      </Link>
     </div>
    </aside>
  );
}

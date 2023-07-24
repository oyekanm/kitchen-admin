import React from "react";
import { getAdmins } from "@/lib/Fetch/Admins";
import AdminList from "./AdminList";
import {  Colors } from "../components/Color";

export default async function Admin() {
  const admins = await getAdmins(`${process.env.NEXT_URL}/api/user`);

  // console.log(admins);

  return (
    <>
      <p className={`text-[2rem] ${Colors.primary} font-bold`}>
        Add a new Admin
      </p>
      <AdminList admins={admins} />;
    </>
  );
}

import { headers } from "next/headers";
import React from "react";
import { http } from "../layout";
import { getAdmins } from "@/lib/Fetch/Admins";
import AdminList from "./AdminList";
import {  Colors } from "../components/Color";

export default async function Admin() {
  const headersList = headers();
  const domain = headersList.get("host");
  const admins = await getAdmins(`${http}://${domain}/api/user`);

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

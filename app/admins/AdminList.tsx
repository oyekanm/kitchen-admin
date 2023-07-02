"use client";

import React, { useRef, useState } from "react";
import { Bg, Colors } from "../components/Color";
import SelectBtn from "./SelectBtn";
import { headers } from "next/headers";
import { UpdateUserAdmin } from "../_actions";

type Params = {
  admins: User[] | undefined;
};

export default function AdminList({ admins }: Params) {
const formRef = useRef<any>()
  const filterAdmin = admins?.filter((admin) => admin?.role === "ADMIN");

  // console.log(filterAdmin);
  const action = async (data: FormData) => {
    UpdateUserAdmin(data);
    formRef?.current?.reset()
  };

  return (
    <>
      <form action={action} ref={formRef} className="my-[3rem]">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Add user email (eg) example@gmail.com"
          className="p-4 py-6 w-full mb-8 text-[1.6rem] font-semibold placeholder:text-[1.5rem]"
        />
        <button
          type="submit"
          className={`flex shadow-xl bg-blue-400 items-center  capitalize  p-3 px-8 text-[1.8rem] font-semibold`}
        >
          add new admin
        </button>
      </form>
      <section>
        <div className="bg-slate-400 p-4">
          <p
            className={`text-[2rem] uppercase font-semibold ${Colors.primary}`}
          >
            admin user{filterAdmin && filterAdmin.length > 1 ? "s" : ""}
          </p>
        </div>

        <div className={`mt-4 ${Bg.white} px-4 py-4 shadow-lg`}>
          {filterAdmin?.map((admin) => {
            return (
              <div
                key={admin._id}
                className={`shadow-[0_5px_15px_rgba(0,0,0,0.4)] p-8 my-4 sm:shadow-none sm:grid grid-cols-2 sm:grid-cols-[2fr_1fr_1fr] py-2 items-center ${
                  filterAdmin && filterAdmin.length > 1 && "my-4"
                }`}
              >
                <p className={`${Colors.primary} text-[2rem] font-bold`}>
                  {admin?.email}
                </p>

                <SelectBtn roles={admin?.role} admin={admin}/>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

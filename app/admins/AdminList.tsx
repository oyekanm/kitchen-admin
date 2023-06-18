"use client";

import React, { useState } from "react";
import { Colors } from "../components/Color";
import Delete from "../components/Delete";

type Params = {
  admins: User[] | undefined;
};

export default function AdminList({ admins }: Params) {
  const [List] = useState(["ADMIN", "USER"]);
  return (
    <>
      {admins &&
        admins?.map((admin) => {
          return (
            <div key={admin._id} className="grid grid-cols-3 sm:grid-cols-[2fr_1fr_1fr] py-2 items-center">
              <p className={`${Colors.primary} text-[2rem] font-bold`}>
                {admin.email}
              </p>
              <select
                name="role"
                id="role"
                value={admin.role}
                className="w-[50%] focus-visible:outline-none"
              >
                {List.map((list) => {
                  return (
                    <option key={list} value={list}>
                      {list}
                    </option>
                  );
                })}
              </select>
              <div className="sm:flex items-center justify-between">
                <span className="bg-slate-500 capitalize shadow p-3 px-8 text-[1.8rem] mb-16">edit</span>
                <span className="flex items-center bg-red-300 text-red-700 capitalize shadow p-3 px-8 text-[1.8rem]">
                  remove
                </span>
              </div>
            </div>
          );
        })}
    </>
  );
}

"use client";

import React, { useState } from "react";

type Params = {
  roles?: string;
};

export default function SelectBtn({ roles }: Params) {
  const [List] = useState(["ADMIN", "USER"]);
  const [role, setRole] = useState(roles);

  console.log(role);

  return (
    <>
      <select
        name="role"
        id="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-[80%] shadow-[0_5px_15px_rgba(0,0,0,0.4)] sm:w-[50%] font-semibold text-[1.5rem] focus-visible:outline-none p-4"
      >
        {List.map((list) => {
          return (
            <option
              key={list}
              value={list}
              className="w-[80%] sm:w-[50%]  focus-visible:outline-none p-8 text-[1.5rem] font-semibold"
            >
              {list}
            </option>
          );
        })}
      </select>
      <div className="sm:flex items-center justify-end">
        {roles === role ? (
          <span className="flex shadow-[0_5px_15px_rgba(0,0,0,0.4)] items-center bg-red-300 text-red-700 capitalize  p-3 px-8 text-[1.8rem] font-semibold">
            remove
          </span>
        ) : (
          <span className="flex shadow-[0_5px_15px_rgba(0,0,0,0.4)] items-center bg-slate-500 capitalize  p-3 px-8 text-[1.8rem] font-semibold">
            update
          </span>
        )}
      </div>
    </>
  );
}

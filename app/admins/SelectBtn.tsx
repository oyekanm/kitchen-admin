"use client";

import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { revalidate } from "../_actions";

type Params = {
  roles?: string;
  admin: User;
};

export default function SelectBtn({ roles, admin }: Params) {
  const [List] = useState(["ADMIN", "USER"]);
  const [role, setRole] = useState(roles);

  const updateAdmin = () => {
    Swal.fire({
      title: "Warning!!",
      icon: "warning",
      // footer: '<a href="">Why do I have this issue?</a>',
      confirmButtonText: "Yes",
      html: `Do you want Update <b>${admin.email}</b> to a User `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "Thumbs down",
    }).then(async (result) => {
      if (result.isConfirmed) {
        axios
          .put(`/api/user?_id=${admin._id}`)
          .then(() => {
            revalidate("/admins");
            Swal.fire("Saved!", "", "success");
          })
          .catch((err) => console.log(err));
      }
    });
  };
  const deleteAdmin = () => {
    Swal.fire({
      title: "Warning!!",
      icon: "warning",
      // footer: '<a href="">Why do I have this issue?</a>',
      confirmButtonText: "Yes, I'm Sure",
      html: `Are you sure you want to remove <b>${admin.email}</b> `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "Thumbs down",
    }).then(async (result) => {
      if (result.isConfirmed) {
        axios
          .put(`/api/user/${admin._id}`)
          .then(() => {
            revalidate("/admins");
            Swal.fire("Saved!", "", "success");
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <>
      <select
        name="role"
        id="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="my-4 sm:my-0 w-[80%] shadow-[0_5px_15px_rgba(0,0,0,0.4)]  font-semibold text-[1.5rem] focus-visible:outline-none p-4"
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
      <div className="my-4 sm:my-0 sm:flex items-center justify-end">
        {roles === role ? (
          <span
            onClick={deleteAdmin}
            className="flex cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.4)] items-center bg-red-300 text-red-700 capitalize  p-3 px-8 text-[1.8rem] font-semibold"
          >
            remove
          </span>
        ) : (
          <span
            onClick={updateAdmin}
            className="flex cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.4)] items-center bg-slate-500 capitalize  p-3 px-8 text-[1.8rem] font-semibold"
          >
            update
          </span>
        )}
      </div>
    </>
  );
}

"use client"

import React from 'react'
import Link from "next/link";
import Swal from 'sweetalert2'

import { Colors } from "../components/Color";
import { DeleteCate } from '../_actions';

type Params = {
    category: Category[] | undefined;
  };

export default function CategoryList({category}:Params) {

  const deleteFunc = (category: Category)=>{

    Swal.fire({
      title: 'Warning!!',
      icon: 'warning',
      // footer: '<a href="">Why do I have this issue?</a>',
      confirmButtonText: "Yes, I'm Sure",
      html:
      `Do you want Delete <b>${category.name}</b> `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        'Cancel',
      cancelButtonAriaLabel: 'Thumbs down'
    }).then(async (result) => {
      const {_id} = category
      if (result.isConfirmed) {
        // console.log(_id);
        DeleteCate(_id).then(()=>{
          Swal.fire('Saved!', '', 'success')
        })
      }
    })
  }
  return (
    <>
     {category &&
            category.map((cate) => {
              return (
                <div
                  key={cate._id}
                  className="grid grid-cols-2 py-2 items-center"
                >
                  <p className={`${Colors.primary} text-[2rem] font-bold`}>
                    {cate.name}
                  </p>
                  <div className="flex gap-12">
                    <Link
                      href={`/categories/edit/${cate._id}`}
                      className={`flex items-center capitalize shadow-[0_5px_15px_rgba(0,0,0,0.4)] p-3 px-12 text-[1.8rem] font-semibold ${Colors.primary}`}
                    >
                      edit
                    </Link>
                    <span onClick={()=>deleteFunc(cate)} className="flex items-center bg-red-300 text-red-700 capitalize shadow-[0_5px_15px_rgba(0,0,0,0.4)] p-3 px-12 text-[1.8rem] font-semibold">
                      delete
                    </span>
                  </div>
                </div>
              );
            })}
    </>
  )
}

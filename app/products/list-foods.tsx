"use client";

import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";

import { Bg, Colors } from "../components/Color";
import Swal from "sweetalert2";
import { DeleteCate, DeleteFood } from "../_actions";

type Params = {
  products: Foods[] | undefined;
};

export default function ListFoods({ products }: Params) {

  const deleteFunc = (food: Foods)=>{

    Swal.fire({
      title: 'Warning!!',
      icon: 'warning',
      // footer: '<a href="">Why do I have this issue?</a>',
      confirmButtonText: "Yes, I'm Sure",
      html:
      `Do you want Delete <b>${food.name}</b> `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        'Cancel',
      cancelButtonAriaLabel: 'Thumbs down'
    }).then(async (result) => {
      const {_id,} = food
      if (result.isConfirmed) {
        // conesole.log(_id);
        DeleteFood(_id).then(()=>{
          Swal.fire('Saved!', '', 'success')
        })
      }
    })
  }

  return (
    <>
      {products &&
        products.map((food) => {
          return (
              <div
                key={food._id}
                className="grid grid-cols-2 py-4 items-center"
              >
                <p className={`${Colors.primary} text-[2rem] font-bold`}>{food.name}</p>
                <div className="flex gap-12">
                  <Link
                    href={`/products/edit/${food._id}`}
                    className={`flex cursor-pointer items-center  capitalize shadow-[0_5px_15px_rgba(0,0,0,0.4)] p-3 px-12 text-[1.8rem] font-semibold ${Colors.primary}`}
                  >
                    <span className="mr-2">
                      <AiOutlineEdit />
                    </span>
                    edit
                  </Link>
                  <span onClick={()=>deleteFunc(food)} className="flex cursor-pointer items-center bg-red-300 text-red-700 capitalize shadow-[0_5px_15px_rgba(0,0,0,0.4)] p-3 px-12 font-semibold text-[1.8rem]">
                    <span className="mr-2">
                      <AiOutlineDelete />
                    </span>
                    delete
                  </span>
                </div>
              </div>
          );
        })}
    </>
  );
}

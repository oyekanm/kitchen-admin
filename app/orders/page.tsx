"use client";

import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Colors } from "../components/Color";
import Link from "next/link";

export default function Order() {
  const [products, setProducts] = useState<Foods[]>();

  useEffect(() => {
    axios.get("/api/product").then((response) => {
      setProducts(response.data);
      // console.log(response.data);
    });
  }, []);

  // console.log("hello");
  // console.log(products);

  return (
    <Suspense fallback={<p>Loading</p>}>
      {products &&
        products.map((food) => {
          return (
            <div key={food._id} className="grid grid-cols-2 py-2 items-center">
              <p className={`${Colors.primary} text-[2rem]`}>{food.name}</p>
              <div className="flex">
                <Link
                  href={"/products/edit"}
                  className={`flex items-center mr-8 capitalize shadow p-3 px-12 text-[1.8rem] ${Colors.primary}`}
                >
                  <span className="mr-2">
                    <AiOutlineEdit />
                  </span>
                  edit
                </Link>
                <span className="flex items-center bg-red-300 text-red-700 capitalize shadow p-3 px-12 text-[1.8rem]">
                  <span className="mr-2">
                    <AiOutlineDelete />
                  </span>
                  delete
                </span>
              </div>
            </div>
          );
        })}
    </Suspense>
  );
}

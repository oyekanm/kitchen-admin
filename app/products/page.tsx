// "use client";

import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { headers } from "next/headers";

import { Bg, Colors } from "../components/Color";
import ListFoods from "./list-foods";
import { getProduct } from "@/lib/Fetch/Products";
import { http } from "../layout";
import { getCategory } from "@/lib/Fetch/Category";

// export const revalidate = 0;

export default async function products() {
  // const products = await getProduct("http://localhost:3000/api/product")
  const headersList = headers();
  const domain = headersList.get("host");
  const products = await getProduct(`${http}://${domain}/api/products`);
  // const categories =  getCategory(`${http}://${domain}/api/categories`);

  // const [products, category] = await Promise.all([product,categories])
  // console.log(products);
  // console.log(category);

  return (
    <>
      <div className={`${Bg.info} p-4 px-8 shadow-xl inline-block`}>
        <Link
          href={"/products/new"}
          className={`text-[2rem] tracking-[2px] ${Colors.white}`}
        >
          Add new product
        </Link>
      </div>
      <section className="mt-8">
        <div className="bg-slate-400 p-4">
          <p
            className={`text-[2rem] uppercase font-semibold ${Colors.primary}`}
          >
            product name
          </p>
        </div>
        <div className={`mt-4 ${Bg.white} px-4 py-4 shadow-lg`}>
          {products && <ListFoods products={products} />}
        </div>
      </section>
    </>
  );
}

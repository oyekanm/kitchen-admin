// "use client";

import Link from "next/link";

import { Bg, Colors } from "../components/Color";
import ListFoods from "./list-foods";
import { getProduct } from "@/lib/Fetch/Products";

// export const revalidate = 0;

export default async function products() {
  const products = await getProduct(`${process.env.NEXT_URL}/api/products`);

  // const [products, category] = await Promise.all([product,categories])
 

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

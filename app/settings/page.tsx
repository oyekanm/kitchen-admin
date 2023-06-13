import { getProducts } from '@/lib/Fetch/Products';
import React from 'react'
import { Colors } from '../components/Color';

export default async function Setting() {
  // const product:Promise<Foods[]> = getProducts() 
  // const products = await product
  // console.log(products[0]);
  // console.log(products);
  return (
   <>
     {/* {products &&
         products.map((food) => {
            return (
              <div
                key={food._id}
                className="grid grid-cols-2 py-2 items-center"
              >
                <p className={`${Colors.primary} text-[2rem]`}>
                  {food.name}
                </p>
                
              </div>
            );
          })} */}
   </>
  )
}

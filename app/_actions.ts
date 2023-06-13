"use server";

import { redirect } from "next/navigation";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { http } from "./layout";

const headersList = headers();
const domain = headersList.get("host");

// const ref = headersList.get("referer");

export async function FoodSend(data: Partial<Foods>, _id?: string) {
  // console.log(http);
  if (_id) {
    await axios
      .put(
        `${http}://${domain}/api/products`,
        { ...data, _id },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then(() => {
        revalidatePath("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    await axios
      .post(`${http}://${domain}/api/products`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        revalidatePath("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  revalidatePath("/products");
}

export async function sendConsole(data: FormData, id?: string) {
  const name = data.get("name");

  if (id) {
    await axios
      .put(
        `${http}://${domain}/api/categories`,
        { name, _id: id },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then(() => {
        revalidatePath("/categories");
        redirect("/categories");
      });
  } else {
    await axios.post(`${http}://${domain}/api/categories`, data, {
      headers: { "Content-Type": "application/json" },
    });
  }
  revalidatePath("/categories");

  // console.log({name,_id:id})
  // console.log(`http://${domain}/api/categories`);
}

export async function DeleteCate(data?: string) {
  // console.log(data);
  axios
    .delete(`${http}://${domain}/api/categories?_id=${data}`)
    // .then(() => revalidatePath("/categories"))
    .catch((err) => console.log(err));

    revalidatePath(`/categories`)
}
export async function DeleteFood(data?: string) {
  // console.log(data);
  axios
    .delete(`${http}://${domain}/api/products?_id=${data}`)
    // .then(() => revalidatePath("/products"))
    .catch((err) => console.log(err));

    revalidatePath(`/products`)
}
export async function upload(data:FormData){
  // const res = data.forEach(res=>{
  //   return {res}
  // })
  console.log(data);
  
}
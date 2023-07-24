"use server";

import { redirect } from "next/navigation";
import axios from "axios";
import { revalidatePath } from "next/cache";

export async function FoodSend(data: Foods, _id?: string) {
  // console.log(data);
  if (_id) {
    await axios
      .put(
        `${process.env.NEXT_URL}/api/products`,
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
      .post(`${process.env.NEXT_URL}/api/products`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        revalidatePath("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // revalidatePath("/products");
}

export async function sendConsole(data: FormData, id?: string) {
  const name = data.get("name");

  if (id) {
    await axios
      .put(
        `${process.env.NEXT_URL}/api/categories`,
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
    await axios.post(`${process.env.NEXT_URL}/api/categories`, data, {
      headers: { "Content-Type": "application/json" },
    });
  }
  revalidatePath("/categories");
}

export async function DeleteCate(data?: string) {
  // console.log(data);
  axios
    .delete(`${process.env.NEXT_URL}/api/categories?_id=${data}`)
    // .then(() => revalidatePath("/categories"))
    .catch((err) => console.log(err));

    revalidatePath(`/categories`)
}
export async function UpdateUserAdmin(data: FormData) {
  const email = data.get("email");
  // console.log(email);
  await axios.put(`${process.env.NEXT_URL}/api/user`,{email})
    
  revalidatePath(`/admins`)
}
export async function revalidate(data: string) {
    
  revalidatePath(data)
}
export async function DeleteFood(data?: string) {
  // console.log(data);
  axios
    .delete(`${process.env.NEXT_URL}/api/products?_id=${data}`)
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
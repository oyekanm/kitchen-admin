import React from "react";
import Form from "../../Form";
import { headers } from "next/headers";
import axios from "axios";
import { Colors } from "@/app/components/Color";
import { http } from "@/app/layout";

type Params = {
  params: { _id: string };
};

export default async function EditPage({ params: { _id } }: Params) {
  const headersList = headers();
  const domain = headersList.get("host");

  const category: Category = await axios
    .get(`${http}://${domain}/api/categories?id=${_id}`)
    .then((res) => res.data);

  // console.log(category);

  return (
    <>
      <p className="text-[2rem] font-bold mb-8">Edit Category</p>
      <p className={`${Colors.primary} text-[1.8rem] font-bold`}>
        Edit <span className="font-bold ">{category && category?.name}</span>
      </p>

      <Form singleName={category} />
    </>
  );
}

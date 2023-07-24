import React from "react";
import Form from "../../Form";
import axios from "axios";
import { Colors } from "@/app/components/Color";

type Params = {
  params: { _id: string };
};

export default async function EditPage({ params: { _id } }: Params) {

  const category: Category = await axios
    .get(`${process.env.NEXT_URL}/api/categories?id=${_id}`)
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

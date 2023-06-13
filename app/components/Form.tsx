"use client";

import React, { FormEvent, useEffect, useState } from "react";
import axios from "axios";

import { Colors } from "@/app/components/Color";
import { useRouter } from "next/navigation";
import { FoodSend, upload } from "../_actions";

const Form = (props: Foods) => {
  const { _id } = props;
  // console.log(props);

  const route = useRouter();
  const [isUploading, setIsUploading] = useState(false);
  const [category, setCategory] = useState<Category[]>();
  const [newProduct, setNewProduct] = useState({
    name: props.name ? props.name : "",
    category: props.category ? props.category : "",
    desc: props.desc ? props.desc : "",
    price: props.price ? (props.price as any) : "",
    // image: props.image ? props.image : null,
  });

  // console.log(newProduct);
  useEffect(()=>{
    axios.get(`/api/categories`).then(res=>{
      setCategory(res.data)
    }).catch(err=>console.log(err)
    )
  },[])

  // console.log(category);
  

  useEffect(() => {
    setNewProduct({
      name: props.name ? props.name : "",
      category: props.category ? props.category : "category",
      desc: props.desc ? props.desc : "",
      price: props.price ? (props.price as any) : "",
      // image: props.image ? props.image : null,
    });
  }, [_id]);

  // console.log({...newProduct});

  const handleInput = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const input =
    "block w-full mt-2 p-4 text-[1.8rem] font-bold focus-visible:outline-none";
  const label = `${Colors.primary} text-[1.8rem] font-bold`;
  const group = "mb-4";

  const actions = () => {
    if (_id) {
      FoodSend(newProduct, _id).then(() => {
        //   console.log(res.data)
        setNewProduct({
          name: "",
          category: "",
          desc: "",
          price: "",
          // image: null,
        });
      });
    } else {
      FoodSend(newProduct).then(() => {
        setNewProduct({
          name: "",
          category: "",
          desc: "",
          price: "",
          // image: null,
        });
      });
    }
    route.push("/products")
  };

  

  async function imageUpload(data: FormData) {
    // const data = new FormData(e.target as any);
    // const title = data.get("title")
    // await sendConsole(data);
  //  console.log(data)
  upload(data)
  }

  // const uploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target?.files as any;
  //   if (files?.length > 0) {
  //     setIsUploading(true);
  //     const data = new FormData();
  //     for (const file of files) {
  //       data.append("file", file);
  //     }

  //     setIsUploading(false);
  //     console.log(files);
  //     console.log(data);
  //   }
  // };

  return (
    <section className="mt-4">
      <form action={actions}>
        <div className={group}>
          <label htmlFor="name" className={label}>
            Product name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={newProduct.name}
            onChange={handleInput}
            className={input}
          />
        </div>
        <div className={group}>
          <label htmlFor="category" className={label}>
            Category
          </label>
          <select
            name="category"
            id="category"
            className={input}
            value={newProduct.category}
            onChange={handleInput}
          >
            <option className="text-[2rem] p-8 font-semibold" value="">-- Choose a Category --</option>
            {
              category &&
              category.map(cate=>{
                return <option className="text-[2rem] p-8 font-semibold" key={cate._id} value={cate._id}>{cate.name}</option>
              })
            }
          </select>
        </div>
        <div className={group}>
          <label htmlFor="desc" className={label}>
            Description
          </label>
          <textarea
            name="desc"
            id="desc"
            cols={30}
            rows={2}
            className={input}
            value={newProduct.desc}
            onChange={handleInput}
          ></textarea>
        </div>
        <div className={group}>
          <label htmlFor="price" className={label}>
            Price (in Naira)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className={input}
            value={newProduct.price}
            onChange={handleInput}
          />
        </div>
        {/* <div className={group}>
  <div>
    <label htmlFor="file" className={label}>
      Image
      <input
        type="file"
        name="file"
        id="file"
        multiple
        onChange={uploadFile}
      />
    </label>
  </div>
  </div> */}
        <button
          type="submit"
          className="text-[1.8rem] bg-blue-400 font-bold p-4 px-8 mt-4 uppercase rounded-md"
        >
          save
        </button>
      </form>
      <form action={imageUpload}>
          <div className={group}>
  <div>
    <label htmlFor="file" className={label}>
      Image
      <input
        type="file"
        name="file"
        id="file"
        multiple
        // onChange={uploadFile}
      />
    </label>
  </div>
  <button type="submit">submit</button>
  </div>
      </form>
    </section>
  );
};

export default Form;

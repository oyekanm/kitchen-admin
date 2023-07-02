"use client";

import React, { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import "@uploadthing/react/styles.css";
import {ReactSortable} from "react-sortablejs";

import {UploadDropzone,Uploader} from "@uploadthing/react";

import type { OurFileRouter } from "@/app/api/uploadthing/core";

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
    // image: props.image ? props.image : undefined,
  });
  const [image,setImage] = useState<{
    url: string;
    id: string;
}[]>([])

  console.log(image);
  useEffect(() => {
    axios
      .get(`/api/categories`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(category);

  useEffect(() => {
    setNewProduct({
      name: props.name ? props.name : "",
      category: props.category ? props.category : "category",
      desc: props.desc ? props.desc : "",
      price: props.price ? (props.price as any) : "",
    });
    setImage(props.image? props.image : [])
  }, [_id]);

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
    const products = {...newProduct,image}
    if (_id) {
      FoodSend(products, _id).then(() => {
        //   console.log(res.data)
        setNewProduct({
          name: "",
          category: "",
          desc: "",
          price: "",
        });
        setImage([])
      });
    } else {
      FoodSend(products).then(() => {
        setNewProduct({
          name: "",
          category: "",
          desc: "",
          price: "",
        });
        setImage([])
      });
    }
    route.push("/products");
  };

  function updateImagesOrder(image:any) {
    setImage(image);
  }

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
            <option className="text-[2rem] p-8 font-semibold" value="">
              -- Choose a Category --
            </option>
            {category &&
              category.map((cate) => {
                return (
                  <option
                    className="text-[2rem] p-8 font-semibold"
                    key={cate._id}
                    value={cate._id}
                  >
                    {cate.name}
                  </option>
                );
              })}
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
    <div className="mb-2 flex flex-wrap gap-3 items-center">
    {image &&
        
        <ReactSortable
        list={image}
        className="flex flex-wrap gap-1"
        setList={updateImagesOrder}>
        {!!image?.length && image.map(link => (
          <div key={link.id} className="h-[150px] w-[100px]  bg-white p-4 shadow-sm rounded-sm border border-gray-200">
            <img src={link.url} alt="" className="rounded-lg object-cover h-full"/>
          </div>
        ))}
      </ReactSortable>
          }
        <div className={`flex justify-start`}>
          <UploadDropzone<OurFileRouter>
            endpoint="imageUploader"
            onClientUploadComplete={(res:any) => {
              // Do something with the response
              if(res){
              const newImage =  res.map((r:any)=>{
                  return{
                    id:r.fileKey,
                    url:r.fileUrl
                  }
                })
                setImage([...newImage,...image])
               
              }
              console.log("Files: ", res);
              console.log(image);
              setIsUploading(false);
              // alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              console.log(`ERROR! ${error.message}`);
            }}
          />
        </div>
    </div>
       
        <button
          type="submit"
          className="text-[1.8rem] !bg-blue-400 font-bold p-4 px-8 mt-4 uppercase rounded-md"
        >
          save
        </button>
       
      
      </form>
    </section>
  );
};

export default Form;

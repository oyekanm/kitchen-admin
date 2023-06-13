"use client"
import Form from '@/app/components/Form'
import axios from 'axios';
import { useEffect, useState } from 'react';

type Params ={
  params:{_id:string }
}


export default function Edit({params:{_id }}:Params) {
  const [productInfo, setProductInfo] = useState<Foods>();
  useEffect(() => {
    if (!_id) {
      return;
    }
    axios.get(`/api/products?id=${_id}`).then(response => {
      setProductInfo(response.data);
      // console.log(response.data);
    });
  }, [_id]);
  // console.log(productInfo);
  
  return (
    <>
    <p className='text-[2rem] font-semibold'>Edit Product</p>
    <Form {...productInfo} />
    </>
  )
}

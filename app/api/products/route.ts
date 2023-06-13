
import Product from "@/lib/models/product";
import mongooseConnect from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function GET(request: Request) { 
  const url = new URL(request.url)

  const id  = url.searchParams.get("id")

  await mongooseConnect();

  if(id){
    try {
  const data  = await Product.findOne({_id:id})
  return NextResponse.json(data); 
} catch (error) {
  console.log(error);
  // return NextResponse.json(error);
}
  }

   const data  = await Product.find()
  //  console.log(data);
   
 
  return NextResponse.json(data); 
}



export async function POST(request: Request) {
  const res = await request.json();

  await mongooseConnect();

  const { category,  desc, name, price } :Partial<Foods>  = res;
 
  try {
    await Product.create({ category,  desc, name, price });
  } catch (error) {
    console.log(error);
  }
  // console.log(res);

  return NextResponse.json({ ...res });
}
export async function PUT(request: Request) {
  const res = await request.json();

  // console.log(res);
  
  await mongooseConnect();

  const { category,  desc, name, price,_id, } :Partial<Foods>  = res;

  try {
    await Product.updateOne({_id},{category,  desc, name, price });
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ ...res });
}
export async function DELETE(request: Request) {
  const url = new URL(request.url)

  const _id  = url.searchParams.get("_id")

  // console.log(res);
  
  await mongooseConnect();
  await Product.deleteOne({_id})


  return NextResponse.json({ url});
}

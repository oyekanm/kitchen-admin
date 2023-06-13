import Category from "@/lib/models/category";
import mongooseConnect from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const id = url.searchParams.get("id");

  await mongooseConnect();

  if (id) {
    try {
      const data = await Category.findOne({ _id: id });
      return NextResponse.json(data); 
    } catch (error) {
      console.log(error);
      // return NextResponse.json(error);
    }
  }

  const data = await Category.find();

  return NextResponse.json(data);
}


export async function POST(request: Request) {
  const req = await request.json();
  // console.log(req);
  await mongooseConnect();
  const { name }: Partial<Category> = req;

  try { 
    await Category.create({ name });
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json(req);
}

export async function PUT(request: Request) {
  const res = await request.json();

  // console.log(res);
  
  await mongooseConnect();

  const {name,_id } :Partial<Category>  = res;
if(_id){

  try {
    await Category.updateOne({_id},{ name });
  } catch (error) {
    console.log(error);
  }
}

  return NextResponse.json({ ...res });
}

export async function DELETE(request: Request) {
  const url = new URL(request.url)

  const _id  = url.searchParams.get("_id")

  // console.log(url);
  
  await mongooseConnect(); 

  await Category.deleteOne({_id})



  return NextResponse.json({ url });
}

// export const config = {
//     api: {
//       bodyParser: false,
//     },
//   };

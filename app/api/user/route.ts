import Users from "@/lib/models/user";
import mongooseConnect from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const id = url.searchParams.get("id");
  const email = url.searchParams.get("email");
  // console.log(url, id, email);

  await mongooseConnect();

  if (email) {
    try {
      const data = await Users.findOne({ email });
      return NextResponse.json(data);
    } catch (error) {
      console.log(error);
      // return NextResponse.json(error);
    }
  }

  if (id) {
    try {
      const data = await Users.findOne({ _id: id });
      return NextResponse.json(data);
    } catch (error) {
      console.log(error);
      // return NextResponse.json(error);
    }
  }

  const data = await Users.find();
  //  console.log(data);

  return NextResponse.json(data);
}

export async function PUT(request: Request) {
let email;

  const url = new URL(request.url);

  const _id = url.searchParams.get("_id");
  if(!_id){
    const res = await request?.json();
    email = res.email;
  }

  await mongooseConnect();

  if (_id) {
    try {
      const update = await Users.updateOne({ _id }, { role: "USER" });
      return NextResponse.json({ update });
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const update = await Users.updateOne({ email }, { role: "ADMIN" });
      return NextResponse.json({ update });
    } catch (error) {
      console.log(error);
    }
  }
}

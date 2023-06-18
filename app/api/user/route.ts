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

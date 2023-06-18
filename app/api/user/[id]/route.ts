import Users from "@/lib/models/user";
import mongooseConnect from "@/lib/mongoose";
import {NextResponse} from "next/server"

type Params ={
    params:{id:string }
  }
  


export async function PUT(request: Request,{params:{id}}:Params) {
    // const res = await request.json();
  
    const _id = id
    
    
    await mongooseConnect();
  
 
  
    try {
      await Users.updateOne({_id},{role:"USER" });
    } catch (error) {
      console.log(error);
    }
  
    return NextResponse.json({_id });
  }
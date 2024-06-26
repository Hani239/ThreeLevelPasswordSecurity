import mongoose from "mongoose";
import { connectionStr } from "@/app/lib/db";
import { photopassSchema } from "@/app/lib/photopasssModel";
import { NextResponse } from "next/server";

export async function GET(request, content){
    const id = content.params.id
    // console.log(id)
    let success = false;
    await mongoose.connect(connectionStr,{useNewUrlParser:true});
    const result = await photopassSchema.find({user_id:id});
    if(result){
        success=true;
    }
    return NextResponse.json({result, success})
}
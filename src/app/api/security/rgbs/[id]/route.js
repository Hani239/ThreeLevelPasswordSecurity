import mongoose from "mongoose";
import { connectionStr } from "@/app/lib/db";
import { rgbSchema } from "@/app/lib/rgbsModel";
import { NextResponse } from "next/server";

export async function GET(request, content){
    const id = content.params.id
    // console.log(id)
    let success = false;
    await mongoose.connect(connectionStr,{useNewUrlParser:true});
    const result = await rgbSchema.find({user_id:id});
    if(result){
        success=true;
    }
    return NextResponse.json({result, success})
}
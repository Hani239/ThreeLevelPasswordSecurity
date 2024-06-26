import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "@/app/lib/db";
import { photopassSchema } from "@/app/lib/photopassModel";

export async function POST(request) {
    let payload = await request.json();
    let success= false;
    await mongoose.connect(connectionStr, { useNewUrlParser: true });
    const photopass = new photopassSchema(payload);
    const result = await photopass.save()
    if(result){
        success=true;
    }
    return NextResponse.json({ result, success })
}
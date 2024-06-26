import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "@/app/lib/db";
import { rgbSchema } from "@/app/lib/rgbModel";

export async function POST(request) {
    let payload = await request.json();
    let success= false;
    await mongoose.connect(connectionStr, { useNewUrlParser: true });
    const rgb = new rgbSchema(payload);
    const result = await rgb.save()
    if(result){
        success=true;
    }
    return NextResponse.json({ result, success })
}
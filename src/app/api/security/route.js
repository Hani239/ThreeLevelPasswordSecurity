import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { securitySchema } from "@/app/lib/securitysModel";
import { connectionStr } from "@/app/lib/db"
//We can use instead
// const connectionStr="mongodb+srv://hani:hainsecurity@cluster0.ar8inoa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export async function GET() {
    try {
        await mongoose.connect(connectionStr, { useNewUrlParser: true });
        const data = await securitySchema.find();
        console.log(data);
        return NextResponse.json({ result: data })
        // return new NextResponse({ body: JSON.stringify({ result: true }), status: 200, headers: { "Content-Type": "application/json" }});
    } catch (error) {
        console.error("Error:", error);
        return new NextResponse.error("Internal Server Error");
    }
}

export async function POST(request) {
    let payload = await request.json();
    let result;
    let success = false;
    await mongoose.connect(connectionStr, { useNewUrlParser: true });
    if (payload.login) {
        //Use for login
        result = await securitySchema.findOne({ email: payload.email, password: payload.password })
        if(result){
            success=true
        }
    }
    else {
        //Use for Signup
        
        const security = new securitySchema(payload)
        result = await security.save();
        if(result){
            success=true
        }
    }
    // await mongoose.connect(connectionStr, { useNewUrlParser: true });

    console.log(payload);
    return NextResponse.json({ result, success })
}
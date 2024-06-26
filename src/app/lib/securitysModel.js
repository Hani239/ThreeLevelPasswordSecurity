// import mongoose from "mongoose";
const mongoose= require("mongoose");

const securityModel = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    phone:String,
});

export const securitySchema = mongoose.models.securitys
|| mongoose.model("securitys", securityModel);
import mongoose from "mongoose";

const photopassModel = new mongoose.Schema({
    text: String,
    user_id: mongoose.Schema.Types.ObjectId
});

export const photopassSchema = mongoose.models.photopasss || mongoose.model("photopasss", photopassModel);
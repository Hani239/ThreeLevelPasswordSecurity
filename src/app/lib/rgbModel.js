import mongoose from "mongoose";

const rgbModel = new mongoose.Schema({
    text: String,
    user_id: mongoose.Schema.Types.ObjectId
});

export const rgbSchema = mongoose.models.rgbs || mongoose.model("rgbs", rgbModel);
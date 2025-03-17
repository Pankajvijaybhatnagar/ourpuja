// models/Image.js
import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
    url: { type: String, required: true },
    publicId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
},{timestamps:true});

export default mongoose.models.Image || mongoose.model('Image', ImageSchema);

// app/api/upload/route.js

import connectToDatabase from '@/lib/mongo';
import cloudinary from '@/lib/cloudinary';
import Image from '@/models/Image';

export async function POST(req) {
    try {
        // Connect to MongoDB
        await connectToDatabase();

        const formData = await req.formData();
        const file = formData.get('file');

        if (!file) {
            return new Response(JSON.stringify({ error: 'No file uploaded.' }), { status: 400 });
        }

        // Upload the file to Cloudinary
        const result = await cloudinary.v2.uploader.upload(file.stream(), {
            upload_preset: 'ml_default', // You can customize the preset
        });

        // Save image info to MongoDB
        const newImage = new Image({
            url: result.secure_url,
            publicId: result.public_id,
        });

        await newImage.save();

        // Return the uploaded image URL as a response
        return new Response(JSON.stringify({ imageUrl: result.secure_url }), {
            status: 200,
        });

    } catch (error) {
        console.error('Error uploading file:', error);
        return new Response(JSON.stringify({ error: 'Error uploading the image' }), { status: 500 });
    }
}

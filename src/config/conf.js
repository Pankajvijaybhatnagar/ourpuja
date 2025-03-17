// config.js or wherever you are storing your configuration
const conf = {
    mongoDbUri: String(process.env.NEXT_PUBLIC_MONGO_DB_URI),
    cloudinary: {
        cloudName: String(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME),
        apiKey: String(process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY),
        apiSecret: String(process.env.CLOUDINARY_API_SECRET),
    },
    // Any other configurations you need can go here
};

export default conf;



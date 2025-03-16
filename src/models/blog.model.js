
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,

    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    category:{
        type:String
    },
    tags:{
        type:Array
    },
    views:{
        type:Number,
        default:0
    },
    likes:{
        type:Number,
        default:0
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    status:{
        type:String,
        default:"active",
        enum:["active","inactive"]
    },
    

},{timestamps:true})

export const Blog = mongoose.model("Blog",blogSchema)
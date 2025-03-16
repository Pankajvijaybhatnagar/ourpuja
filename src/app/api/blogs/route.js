import { NextResponse } from "next/server";

export async function GET(request){
    return NextResponse.json({message:"hii it is the blogs response it is the get request",requestData:request})
}

export async function POST(request){
    
}
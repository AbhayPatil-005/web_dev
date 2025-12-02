import { signToken } from "@/app/lib/auth";
import { NextResponse } from "next/server";

export async function POST(request){
    const {email, password} = await  request.json();

    if(email!="user1@test.com" && password != "user123"){
        return NextResponse.json({error:"Invalid Credentials"}, {status:401})
    }

    const token = await signToken({email});

    return new Response("Logged in", {
        status: 200,
        headers: {
            "Set-Cookie": `token=${token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict;`,
        },
    });

}
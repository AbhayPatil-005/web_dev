import {jwtVerify, SignJWT} from "jose";

const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);

export async function signToken(payload){
    return await new SignJWT(payload).setProtectedHeader({alg:"HS256"}).setExpirationTime('1h').sign(secretKey);
}

export async function verifyToken(token){
    try{
        const {payload} = await jwtVerify(token, secretKey);
        return payload;
    }catch (error){
        return null;
    }
}
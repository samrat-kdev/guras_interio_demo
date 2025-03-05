import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest){
    console.log('Login request received');
    const { email, password } = await req.json();
    
    try {
        // Fetch user from the database
        const user = await prisma.user.findUnique({ where: { email } });
        console.log(user);
        if(!user){
            return NextResponse.json({error: 'Invalid email or password'}, {status: 401});
        }
        // Compare provided password with stored hash
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return NextResponse.json({error: 'Invalid  or password'}, {status: 401});
        }
        // Generate JWT
        const token = jwt.sign({userId: user.id, role: user.role}, process.env.JWT_SECRET!,{ expiresIn: '1h',});
        // Set the JWT as an HttpOnly cookie
        const response = NextResponse.json({ token, message: 'Login successful'});
        response.cookies.set('token', token, { httpOnly: true, maxAge: 3600, path: '/admin'});

        return response;
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({error: 'Internal server error'}, {status: 500});
    }
}
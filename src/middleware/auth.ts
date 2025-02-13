import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('token')?.value;
    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET!);
        return NextResponse.next();
    } catch (error) {
        console.error('authentication failed', error);
        return NextResponse.redirect(new URL('/login', req.url));
    }
}

export const config = {
    // matcher: ["/admin/:path*",
        // "/api/admin/:path*",
        
    // ],
};
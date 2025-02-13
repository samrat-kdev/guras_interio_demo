import { NextResponse } from "next/server";

export async function POST(){
    try {
        const response = NextResponse.json({ message: 'Logout Successfully'});
        response.cookies.set('token', '', {httpOnly: true, maxAge: 0, path: '/'});
        return response;
    } catch (error) {
        console.error('Logout error:', error);
        return NextResponse.json({ error: 'Internal server error'}, {status: 500});
    }
}
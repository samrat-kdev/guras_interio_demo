// // src/middleware/auth.ts
// import { NextRequest, NextResponse } from "next/server";
// import jwt from 'jsonwebtoken';


// interface DecodedToken {
//     role: string;
//   }

// export function middleware(req: NextRequest) {
//     const token = req.cookies.get('token')?.value;
//     console.log(token)
//     if (!token) {
//         return NextResponse.redirect(new URL('/login', req.url));
//     }

//     try {
//         const decoded =jwt.verify(token, process.env.JWT_SECRET!);

//         const restrictedRoutes = [
//             "/api/admin/categories",
//             "/api/admin/projects",
//             "/api/admin/services",
//             "/api/admin/contacts",
//         ];

//          // Check if the current request targets a restricted route with a modifying method
//     if (
//         restrictedRoutes.some((route) =>
//           req.nextUrl.pathname.startsWith(route)
//         ) &&
//         ["POST", "PUT", "DELETE"].includes(req.method)
//       ) {
//         // Ensure the decoded token has a role property
//         if (
//           typeof decoded === "object" &&
//           decoded !== null &&
//           "role" in decoded
//         ) {
//             const role = (decoded as DecodedToken).role;
//           if (role !== "Admin" && role !== "Super Admin") {
//             return new NextResponse("Access Denied", { status: 403 });
//           }
//         } else {
//           return new NextResponse("Access Denied", { status: 403 });
//         }
//       }
  
//       return NextResponse.next();
//     } catch (error) {
//       console.error("authentication failed", error);
//       return NextResponse.redirect(new URL("/login", req.url));
//     }
//   }
  

// export const config = {
//     matcher: ["/api/admin/:path*"],
// };


// src/middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify, JWTPayload } from "jose";
import { Role } from "@prisma/client";

interface DecodedToken extends JWTPayload {
    role: string;
  }

  export async function middleware(req: NextRequest) {
    const token = req.cookies.get('token')?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const { payload } = await jwtVerify(token, secret);
  
      // Define your restricted routes
      const restrictedRoutes = [
        '/api/admin/categories',
        '/api/admin/projects',
        '/api/admin/services',
        '/api/admin/contacts',
      ];
  
      if (
        restrictedRoutes.some((route) => req.nextUrl.pathname.startsWith(route)) &&
        ['POST', 'PUT', 'DELETE', 'GET'].includes(req.method)
      ) {
        const role = (payload as DecodedToken).role;
        if (role !== Role.ADMIN && role !== Role.SUPER_ADMIN) {
          return new NextResponse('Access Denied', { status: 403 });
        }
      }
  
      return NextResponse.next();
    } catch (error) {
      console.error('Authentication failed', error);
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }
  
  export const config = {
    matcher: ['/api/admin/:path*'],
  };
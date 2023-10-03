import { NextResponse } from "next/server";

export function middleware(request) {
    if (!request.cookies.has('group_token'))
        return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: [
        '/quadro/:path*',
        '/cadastro/:path*',
        '/login/:path*'
    ]
  }
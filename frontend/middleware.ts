import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Routes yang hanya bisa diakses oleh ADMIN
const ADMIN_ROUTES = ["/dashboard", "/analytics"];

// Routes yang TIDAK bisa diakses oleh ADMIN (hanya untuk user biasa)
const USER_ONLY_ROUTES = [
    "/shop",
    "/collections",
    "/sustainability",
    "/ourstory",
    "/our-reports",
    "/watch-process",
];

export function middleware(request: NextRequest) {
    const { pathname, searchParams } = request.nextUrl;

    // Ambil role dari cookie
    const role = request.cookies.get("role")?.value;
    const token = request.cookies.get("token")?.value;

    // Kalau ada ?token= di URL → ini berarti baru balik dari Google OAuth
    // Biarkan lolos dulu, OAuthTokenHandler akan set cookie & redirect
    const oauthToken = searchParams.get("token");
    if (oauthToken) {
        return NextResponse.next();
    }

    // Jika belum login dan mencoba akses protected route, redirect ke home (halaman login)
    const isProtectedRoute =
        ADMIN_ROUTES.some((r) => pathname.startsWith(r)) ||
        USER_ONLY_ROUTES.some((r) => pathname.startsWith(r));

    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    // Kalau sudah login, cek role
    if (token && role) {
        // ADMIN tidak boleh akses route user
        if (role === "admin") {
            const isUserOnlyRoute = USER_ONLY_ROUTES.some((r) =>
                pathname.startsWith(r)
            );
            if (isUserOnlyRoute) {
                return NextResponse.redirect(new URL("/dashboard", request.url));
            }
        }

        // USER biasa tidak boleh akses route admin
        if (role === "user") {
            const isAdminRoute = ADMIN_ROUTES.some((r) =>
                pathname.startsWith(r)
            );
            if (isAdminRoute) {
                return NextResponse.redirect(new URL("/shop", request.url));
            }
        }
    }

    return NextResponse.next();
}

export const config = {
    // Middleware hanya berjalan pada route ini, exclude asset & api
    matcher: [
        "/dashboard/:path*",
        "/analytics/:path*",
        "/shop/:path*",
        "/collections/:path*",
        "/sustainability/:path*",
        "/ourstory/:path*",
        "/our-reports/:path*",
        "/watch-process/:path*",
    ],
};

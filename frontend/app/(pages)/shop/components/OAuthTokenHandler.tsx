"use client"
import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

// Decode JWT payload tanpa library eksternal
function parseJwtPayload(token: string): Record<string, unknown> | null {
    try {
        const base64Payload = token.split(".")[1];
        const decoded = atob(base64Payload.replace(/-/g, "+").replace(/_/g, "/"));
        return JSON.parse(decoded);
    } catch {
        return null;
    }
}

const OAuthTokenHandler = () => {
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        const token = searchParams.get("token")
        if (token) {
            // Ambil role dari JWT payload
            const payload = parseJwtPayload(token);
            const role = (payload?.role as string) || "user";

            // Simpan ke localStorage
            localStorage.setItem("token", token);
            localStorage.setItem("role", role);

            // Simpan ke cookie agar Next.js middleware bisa baca (max 1 hari)
            const maxAge = 60 * 60 * 24;
            document.cookie = `token=${token}; path=/; max-age=${maxAge}; SameSite=Lax`;
            document.cookie = `role=${role}; path=/; max-age=${maxAge}; SameSite=Lax`;

            // Redirect sesuai role
            if (role === "admin") {
                router.replace("/dashboard");
            } else {
                router.replace("/shop");
            }
        }
    }, [searchParams, router])

    return null
}

export default OAuthTokenHandler

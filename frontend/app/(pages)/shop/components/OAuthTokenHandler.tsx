"use client"
import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

const OAuthTokenHandler = () => {
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        const token = searchParams.get("token")
        if (token) {
            localStorage.setItem("token", token)
            // Bersihkan token dari URL tanpa reload halaman
            router.replace("/shop")
        }
    }, [searchParams, router])

    return null
}

export default OAuthTokenHandler

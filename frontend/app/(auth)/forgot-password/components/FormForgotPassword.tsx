"use client"
import { Key, ChevronLeft, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

const FormForgotPassword = () => {
    const router = useRouter()
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(""); // Reset error message

        try {
            const data = await fetch("http://localhost:8080/api/v1/auth/forgot-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            })
            const response = await data.json();

            if (response.status === 200 || response.status === 201) {
                // Redirect ke halaman update password jika email terdaftar
                router.push("/update-password?email=" + encodeURIComponent(email))
            } else {
                // Tampilkan pesan error jika email tidak terdaftar
                setError(response.message || "Email tidak terdaftar.");
            }
        } catch (error) {
            console.error("Error saat validasi email:", error);
            setError("Terjadi kesalahan pada server. Silakan coba lagi.");
        }
    }

    return (
        <div className="w-full max-w-[440px] flex flex-col items-center">
            <div className="w-full bg-surface-container-lowest p-gutter md:p-stack-lg rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/30">
                <div className="text-center mb-stack-lg">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-container/30 text-primary mb-stack-md">
                        <span className="material-symbols-outlined text-[28px]"><Key /></span>
                    </div>
                    <h1 className="font-headline-md text-headline-md text-primary mb-stack-sm">Forgot Password?</h1>
                    <p className="font-body-sm text-body-sm text-secondary px-2">
                        Enter the email address associated with your account and we'll send you a link to reset your password.
                    </p>
                </div>

                {/* Alert Error jika email tidak terdaftar */}
                {error && (
                    <div className="mb-stack-md p-3 bg-error-container text-on-error-container rounded-lg flex items-start gap-2 border border-error/20">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <p className="font-body-sm text-sm">{error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-stack-md">
                    <div className="flex flex-col gap-unit">
                        <label className="font-label-md text-label-md text-primary ml-1" htmlFor="email">Email Address</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-3 bg-surface border rounded-lg font-body-md text-primary placeholder:text-outline focus:ring-0 transition-all duration-200 outline-none ${
                                error ? 'border-error focus:border-error focus:ring-error/20' : 'border-outline-variant focus:border-primary input-focus-glow'
                            }`}
                            id="email" 
                            placeholder="name@company.com" 
                            type="email" 
                            required
                        />
                    </div>
                    <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-3.5 rounded-lg hover:opacity-90 active:scale-[0.98] transition-all duration-150 shadow-sm" type="submit">
                        Masukan Email
                    </button>
                </form>
                <div className="mt-stack-lg text-center">
                    <Link className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary hover:text-primary transition-colors group" href="/">
                        <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform"><ChevronLeft /></span>
                        Back to Login
                    </Link>
                </div>
            </div>
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] bg-secondary-container/20 blur-[120px] rounded-full"></div>
                <div className="absolute -bottom-[10%] -left-[5%] w-[30%] h-[30%] bg-surface-container-high/40 blur-[100px] rounded-full"></div>
            </div>
        </div>
    )
}

export default FormForgotPassword
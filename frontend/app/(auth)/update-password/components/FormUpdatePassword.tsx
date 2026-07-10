"use client"
import {Eye, EyeClosed, CheckCircle, ArrowLeft, AlertCircle} from "lucide-react"
import Link from "next/link"
import {useState} from "react"
import {useSearchParams, useRouter} from "next/navigation"

const UpdatePasswordForm = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const email = searchParams.get("email")

    const [click,setClick] = useState(false)
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [ToogleClick,setToogleclick] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!email) {
            setError("Email tidak ditemukan. Silakan ulangi proses dari halaman lupa password.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Password baru dan konfirmasi password tidak sama.");
            return;
        }

        try {
            const data = await fetch("http://localhost:8080/api/v1/auth/update-password?email=" + encodeURIComponent(email || ""),{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    new_password: password,
                    confirm_password: confirmPassword,
                }), 
            })
            const response = await data.json()
            
            if (response.status === 200 || response.status === 201) {
                setSuccess("Password berhasil diupdate. Mengalihkan ke halaman login...");
                setTimeout(() => {
                    router.push("/");
                }, 2000);
            } else {
                setError(response.message || "Gagal mengupdate password.");
            }
        } catch (error) {
            console.error(error);
            setError("Terjadi kesalahan pada server. Silakan coba lagi.");
        }
    }

    return (
        <>
            <div className="w-full max-w-[480px] bg-white rounded-xl auth-card p-stack-lg flex flex-col gap-stack-lg border border-outline-variant/30">
                <div className="flex flex-col gap-stack-sm text-center">
                    <h1 className="font-headline-md text-headline-md text-primary">Create New Password</h1>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-[340px] mx-auto">
                        Please enter your new password below. Ensure it is strong and secure.
                    </p>
                </div>

                {error && (
                    <div className="p-3 bg-error-container text-on-error-container rounded-lg flex items-start gap-2 border border-error/20">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <p className="font-body-sm text-sm">{error}</p>
                    </div>
                )}
                {success && (
                    <div className="p-3 bg-black text-white rounded-lg flex items-start gap-2 border border-success/20">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <p className="font-body-sm text-sm text-white">{success}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-stack-md" id="resetPasswordForm">
                    <div className="flex flex-col gap-unit">
                        <label className="font-label-md text-label-md text-secondary" htmlFor="new_password">New Password</label>
                        <div className="relative">
                            <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={click ? "text" : "password"}
                             className="w-full h-[48px] px-stack-md bg-white border border-outline-variant rounded-lg font-body-md text-primary focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none" id="new_password" placeholder="Min. 8 characters" />
                            <button  onClick={() => setClick(!click)} className="absolute right-stack-md top-1/2 -translate-y-1/2 text-secondary hover:text-primary transition-colors flex items-center" type="button">
                                {click ? <Eye className="w-6 h-6" /> : <EyeClosed className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-unit">
                        <label className="font-label-md text-label-md text-secondary" htmlFor="confirm_password">Confirm New Password</label>
                        <div className="relative">
                            <input
                            type={ToogleClick ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                             className="w-full h-[48px] px-stack-md bg-white border border-outline-variant rounded-lg font-body-md text-primary focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none" id="confirm_password" placeholder="Repeat new password" />
                            <button
                            onClick={() => setToogleclick(!ToogleClick)}
                             className="absolute right-stack-md top-1/2 -translate-y-1/2 text-secondary hover:text-primary transition-colors flex items-center" type="button">
                                {ToogleClick ? <Eye className="w-6 h-6" /> : <EyeClosed className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                    <div className="bg-surface-container-low p-stack-sm rounded-lg flex flex-col gap-unit">
                        <div className="flex items-center gap-unit text-on-surface-variant">
                            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "opsz 16" }}><CheckCircle size={20}/></span>
                            <span className="font-label-sm text-label-sm">At least 8 characters</span>
                        </div>
                        <div className="flex items-center gap-unit text-on-surface-variant">
                            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "opsz 16" }}><CheckCircle size={20} /></span>
                            <span className="font-label-sm text-label-sm">Includes a symbol or number</span>
                        </div>
                    </div>
                    <button className="w-full h-[52px] mt-stack-sm bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-primary-container active:scale-[0.98] transition-all duration-150 flex items-center justify-center" type="submit">
                        Reset Password
                    </button>
                </form>
                <div className="text-center">
                    <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors flex items-center justify-center gap-unit" href="/">
                        <span className="material-symbols-outlined text-[18px]"><ArrowLeft /></span>
                        Back to Sign In
                    </Link>
                </div>
            </div>

        </>
    )
}
export default UpdatePasswordForm;
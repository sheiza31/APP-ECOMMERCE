"use client"
import { useRegisterContext } from "../context/RegisterContext";
import { Eye, EyeClosed } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
const FormRegister = () => {
    const { click, setClick } = useRegisterContext();
    const router = useRouter()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response = await fetch("http://localhost:8080/api/v1/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        })
        const json = await response.json();
        if (json.status === 201) {
            router.push("/")
        }

    }

    return (
        <>
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
                <div className="hidden lg:block relative rounded-xl overflow-hidden h-[500px] w-[400px] shadow-md group">
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10"></div>
                    <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A high-end, editorial fashion lifestyle shot featuring minimalist sustainable clothing. A model stands in a brightly lit, expansive modern architectural space with clean lines and soft shadows. The lighting is natural and sophisticated, emphasizing a clean light-mode aesthetic with a palette of whites, creams, and deep indigo accents. The mood is calm, reliable, and premium." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXXwS7TLzMlVRMXUEtsuyQuEJPfKOT7jHmNMzzNCXBW3QGqdTczQqvbIk5FKef2oOCRewQ_JZESs-Vl_hjph0sVYTj3mH_eZiysd8c0WHu3T4G8wrsdonLoHMqF2K6tK_OPns7fAFlmsmVHSjKemaEF7gDQA0XTo22iEzQP0gFf2e7Ce7agBLCyAlw-BtEKNjiKP6fZpUF_84Qz0ko6PrMGwE_nDrqsYnCOmdpAZkUge3-4MGrxXC8WYcNs90WGlnTxS_V5Vdjeqc" />
                    <div className="absolute bottom-12 left-12 z-20 text-surface">
                        <h1 className="font-display-lg text-display-lg mb-4">Mulai Perjalanan Anda.</h1>
                        <p className="font-body-lg text-body-lg text-surface/90 max-w-sm">Bergabunglah dengan komunitas LUMINA untuk mendapatkan akses eksklusif ke koleksi terbaru dan inisiatif keberlanjutan kami.</p>
                    </div>
                </div>
                <div className="w-full max-w-md mx-auto lg:ml-auto">
                    <div className="mb-stack-lg">
                        <h2 className="font-headline-md text-headline-md text-primary mb-2">Buat Akun</h2>
                        <p className="font-body-md text-body-md text-secondary">Silakan isi detail di bawah ini untuk mendaftar.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="mb-stack-lg space-y-stack-sm">
                        <div>
                            <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="name">Nama Lengkap</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full h-12 px-4 bg-surface border border-outline-variant rounded-lg font-body-md text-on-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 placeholder:text-outline" id="name" placeholder="John Doe" type="text" />
                        </div>
                        <div>
                            <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="email">Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-12 px-4 bg-surface border border-outline-variant rounded-lg font-body-md text-on-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 placeholder:text-outline"
                                id="email"
                                placeholder="nama@email.com"
                                type="email"
                            />
                        </div>
                        <div>
                            <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="password">Kata Sandi</label>
                            <div className="relative">
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full h-12 px-4 bg-surface border border-outline-variant rounded-lg font-body-md text-on-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 placeholder:text-outline"
                                    id="password"
                                    placeholder="••••••••"
                                    type={click ? "text" : "password"} />
                                <button onClick={() => setClick(!click)} className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary hover:text-primary" type="button">
                                    {click ? <Eye className="w-5 h-5" /> : <EyeClosed className="w-5 h-5" />}
                                </button>
                            </div>
                            <p className="mt-2 font-label-sm text-label-sm text-secondary">Minimal 8 karakter.</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input
                                className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" id="terms" type="checkbox" />
                            <label className="font-body-sm text-body-sm text-secondary" htmlFor="terms">Saya menyetujui <a className="text-primary font-semibold hover:underline" href="#">Syarat &amp; Ketentuan</a>.</label>
                        </div>
                        <button
                            className="w-full h-14 bg-primary text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:bg-primary-container transition-all active:scale-[0.98] duration-200" type="submit">
                            Daftar Sekarang
                        </button>
                    </form>
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-outline-variant"></div>
                        </div>
                        <div className="relative flex justify-center text-label-sm uppercase tracking-widest bg-surface px-4">
                            <span className="text-secondary">Atau daftar dengan</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center h-12 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors duration-200">
                            <span className="font-label-md text-label-md text-primary">Google</span>
                        </button>
                        <button className="flex items-center justify-center h-12 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors duration-200">
                            <span className="font-label-md text-label-md text-primary">Facebook</span>
                        </button>
                    </div>
                    <p className="mt-8 text-center font-body-md text-body-md text-secondary">
                        Sudah memiliki akun?
                        <Link className="text-primary font-bold hover:underline ml-1" href="/">Login di sini</Link>
                    </p>
                </div>
            </div>
        </>
    )
}
export default FormRegister
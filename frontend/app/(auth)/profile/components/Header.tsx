"use client"
import { useEffect, useState } from "react"
import { Star, User } from "lucide-react"

interface UserProfile {
    name: string;
    email: string;
    avatar?: string;
}

const Header = () => {
    const [profile, setProfile] = useState<UserProfile | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem("token");
            if (!token) return;
            try {
                const res = await fetch("http://localhost:8080/api/v1/auth/me", {
                    headers: { "Authorization": `Bearer ${token}` }
                });
                if (res.ok) {
                    const json = await res.json();
                    setProfile(json.data);
                }
            } catch (error) {
                console.error("Failed to fetch profile", error);
            }
        };
        fetchProfile();
    }, []);

    const avatarSrc = profile?.avatar ? `http://localhost:8080${profile.avatar}` : null;

    return (
        <>
            <header className="flex flex-col md:flex-row items-center gap-stack-lg mb-section-gap">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-surface-container bg-surface-container-high flex items-center justify-center">
                    {avatarSrc ? (
                        <img className="w-full h-full object-cover" src={avatarSrc} alt={profile?.name || "Avatar"} />
                    ) : (
                        <User className="text-primary w-16 h-16" />
                    )}
                </div>
                <div className="text-center md:text-left">
                    <h1 className="font-display-lg text-display-lg text-primary mb-unit">
                        {profile?.name || "Loading..."}
                    </h1>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontFamily: "'Material Symbols Outlined', 'Material Icons Outlined'", fontWeight: 100, fontStyle: 'normal', fontVariationSettings: 'FILL 1' }}><Star size={20} /></span>
                        Silver Member
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
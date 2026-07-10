import Footer from "../components/Footer";
import Header from "../components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "LUMINA | Our Story",
    description: "LUMINA | Our Story",
};
export default async function OurStoryLayout({children}: {children: React.ReactNode}) {
    return (
        <>
        <html lang="en">
            <body className="bg-surface text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
                <Header />
                <main className="pt-20 overflow-x-hidden">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
        </>
    );
}
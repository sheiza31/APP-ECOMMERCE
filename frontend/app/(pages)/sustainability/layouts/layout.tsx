import Footer from "../components/Footer";
import Header from "../components/Header";

export default async function SustainabilityLayout({children}: {children: React.ReactNode}) {
    return (
        <>
        
        <html lang="en">
            <body className="bg-surface text-on-surface">
                <Header />
                <main className="pt-20">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
        </>
    );
}
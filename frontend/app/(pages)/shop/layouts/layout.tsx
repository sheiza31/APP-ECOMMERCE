import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default async function ShopLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main className="">
                {children}
            </main>
            <Footer />
        </>
    );
}
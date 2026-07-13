import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AsideBar from "../components/AsideBar";

export default async function ShopLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <html>
                <head>
                    <title>Shop | Lumina</title>
                    <meta name="description" content="Shop | Lumina" />
                    <meta name="keywords" content="Lumina, Shop" />
                    <meta name="author" content="Lumina" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </head>
                <body>
                    <Navbar />
                    <AsideBar />
                    <main className="">
                        {children}
                    </main>
                    <Footer />
                </body>
            </html>
        </>
    );
}
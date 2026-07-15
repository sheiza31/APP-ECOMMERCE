import Header from "../components/Header";
import Footer from "../components/Footer";
export default async function NewArrivalsLayout({children}: {children: React.ReactNode}) {
    return (
        <>
        <html lang="en">
            <head>
                <title>New Arrivals</title>
                <meta name="description" content="New Arrivals" />
            </head>
            <body className="bg-surface text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
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
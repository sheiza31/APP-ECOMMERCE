import Header from "../components/Header";
import Footer from "../components/Footer";
import { html } from "motion/react-client";
export default async function OurReportsLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <head>
                <title>Watch Process - LUMINA</title>
                <meta name="description" content="Watch Process - LUMINA" />
                <meta name="keywords" content="LUMINA, Watch Process, " />
                <meta name="author" content="LUMINA" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className="bg-surface text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
                <Header />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
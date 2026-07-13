import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
export default async function OurReportsLayout({children}: {children: React.ReactNode}) {
    return (
       <>
       <html lang="en">
        <head>
            <title>Lumina | Our Reports</title>
            <meta name="description" content="Lumina | Our Reports" />
            <meta name="keywords" content="Lumina, Our Reports" />
            <meta name="author" content="Lumina" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body className="bg-background text-on-background font-body-md overflow-x-hidden">
            <Navbar />
            <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
                {children}
            </main>
            <Footer />
        </body>
        
       </html>
       </>
    );
}
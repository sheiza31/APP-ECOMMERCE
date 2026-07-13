import AsideBar from "../components/AsideBar";
import Header from "../components/Header"
import Button from "../components/Button"
export default async function AnalyticsLayout({children}: {children: React.ReactNode}) {
    return (
       <>
       <html lang="en">
        <head>
            <title>Analytics</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Admin Orders Page" />
            <meta name="keywords" content="admin, orders, page" />
            <meta name="author" content="Seizz" />
        </head>
        <body className="bg-background text-on-background antialiased">
            <AsideBar />
            <Header />
           <main className="ml-64 pt-24 pb-12 px-gutter min-h-screen">
            {children}
           </main>
           <Button />
        </body>
       </html>
       
       </>
    );
}
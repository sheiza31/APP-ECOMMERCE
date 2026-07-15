import AsideBar from "../components/AsideBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
export default async function DashboardLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <html lang="en">
                <head>
                    <title>Dashboard</title>
                </head>
                <body className="">
                    <AsideBar />
                    <div className="ml-64 min-h-screen flex flex-col">
                        <Header />
                        <main className="flex-1 p-margin-desktop">
                            {children}
                        </main>
                        <Footer />
                    </div>
                    <Button />
                </body>
            </html>

        </>
    );
}
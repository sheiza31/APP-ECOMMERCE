import Navbar from "../components/Navbar";

export default async function ProfileLayout({children}: {children: React.ReactNode}) {
    return (
       <>
       <html lang="en">
        <body className="bg-surface text-on-surface">
            <Navbar />
            <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
                {children}
            </main>
        </body>
       </html>
       </>
    );
}
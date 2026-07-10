export default async function FormUpdatePasswordLayout({children}: {children: React.ReactNode}) {
    return (
       <html lang="en">
        <body className="flex flex-col min-h-screen overflow-x-hidden">
            <main className="flex-grow flex items-center justify-center py-section-gap px-margin-mobile">
                {children}
            </main>
        </body>
       </html>
    );
}
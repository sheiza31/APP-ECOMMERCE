export default async function ForgotPasswordLayout({children}: {children: React.ReactNode}) {
    return (
       <>
       <html lang="en">
        <body className="flex flex-col min-h-screen">
            <main className="grow flex items-center justify-center px-margin-mobile md:px-0 py-section-gap">
                {children}
            </main>
        </body>
       </html>
       </>
    );
}
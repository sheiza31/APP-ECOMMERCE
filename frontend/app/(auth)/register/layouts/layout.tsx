

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <html lang="en">
                <body className="bg-surface text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed"suppressHydrationWarning= {true}>
                    <div className="ml-64 min-h-screen flex flex-col">     
                    <main className="register-container flex items-center justify-center pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop">
                        {children}
                    </main>
                    </div>
                </body>
            </html>
        </>
    )
}
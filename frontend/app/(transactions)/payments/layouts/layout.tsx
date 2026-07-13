export default async function PaymentLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <html lang="en">
                <head>
                    <title>Payments | Lumina</title>
                    <meta name="description" content="Payments | Lumina" />
                    <meta name="keywords" content="Lumina, Payments" />
                    <meta name="author" content="Lumina" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </head>
                <body className="bg-surface text-on-surface selection:bg-secondary-container">
                    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
                        {children}
                    </main>
                </body>
            </html>
        </>
    );
}
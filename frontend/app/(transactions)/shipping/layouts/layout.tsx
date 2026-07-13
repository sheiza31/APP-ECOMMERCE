export default async function CartLayout({children}: {children: React.ReactNode}) {
    return (
       <>
       <html lang="en">
            <head>
                <title>Shipping | Lumina</title>
                <meta name="description" content="Shipping | Lumina" />
                <meta name="keywords" content="Lumina, Shipping" />
                <meta name="author" content="Lumina" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className="bg-surface text-on-surface">
                <main className="max-w-container-max mx-auto px-margin-desktop py-stack-lg min-h-[calc(100vh-200px)]">
                    {children}
                </main>
            </body>
       </html>
       </>
    );
}
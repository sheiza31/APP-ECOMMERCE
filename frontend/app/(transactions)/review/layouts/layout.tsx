export default async function ReviewLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <html lang="en">
                <head>
                    <title>Review | Lumina</title>
                    <meta name="description" content="Review | Lumina" />
                    <meta name="keywords" content="Lumina, Review" />
                    <meta name="author" content="Lumina" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </head>
                <body className="bg-background text-on-background">
                    <main className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
                        {children}
                    </main>
                </body>
            </html>
        </>
    );
}
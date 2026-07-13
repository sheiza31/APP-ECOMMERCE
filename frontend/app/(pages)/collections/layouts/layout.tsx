import Header from "../components/Header";
import HeaderSection from "../components/HeaderSection";
import NewsLetter from "../components/NewsLetter";
export default async function CollectionsLayout({children}: {children: React.ReactNode}) {
    return (
        <>
        <html lang="en">
            <head>
                <title>Lumina | Collections</title>
                <meta name="description" content="Lumina | Collections" />
                <meta name="keywords" content="Lumina, Collections" />
                <meta name="author" content="Lumina" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className="bg-surface text-on-surface" suppressHydrationWarning={true}>
                <Header/>
                <main className="pt-32 pb-section-gap max-w-container-max mx-auto px-margin-desktop">
                    <HeaderSection />
                    <div className="flex flex-col lg:flex-row gap-gutter">
                    {children}
                    </div>
                </main>
                <NewsLetter />
            </body>
        </html>
        </>
    );
}
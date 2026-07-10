import Header from "../components/Header";
import HeaderSection from "../components/HeaderSection";
import NewsLetter from "../components/NewsLetter";
export default async function CollectionsLayout({children}: {children: React.ReactNode}) {
    return (
        <>
        <html lang="en">
            <body className="bg-surface text-on-surface">
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
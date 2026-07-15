import React from "react";
import Header from "../components/Header";
import AsideBar from "../components/AsideBar";
export default async function CategoriesLayout({children}: {children: React.ReactNode}) {
    return (
       <> 
       <html lang="en">
        <head>
            <title>Customers</title>

        </head>
        <body className="bg-surface text-on-surface">
            <AsideBar />
            <React.Suspense fallback={<div>Loading header...</div>}>
                <Header />
            </React.Suspense>
            <main className="ml-64 pt-24 px-gutter pb-12 min-h-screen">
                {children}
            </main>
        </body>
       </html>
       </>
    );
}
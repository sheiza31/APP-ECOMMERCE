import React from "react";
import HeaderSection from "./components/HeaderSection"
import CategoriesLayout from "./layouts/layout";
import CustomersClientWrapper from "./components/CustomersClientWrapper"

export default async function CategoriesPage() {
    return (
        <>
        <CategoriesLayout>
            <HeaderSection />
            <React.Suspense fallback={<div>Loading content...</div>}>
                <CustomersClientWrapper />
            </React.Suspense>
        </CategoriesLayout>
        </>
    );
}
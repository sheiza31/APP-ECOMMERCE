import { Suspense } from "react";
import ShopLayout from "./layouts/layout";
import HeroSection from "./components/heroSection";
import FeaturedSection from "./components/FeaturedSection";
import ProductSection from "./components/ProductSection";
import BrandSection from "./components/BrandSection";
import NewsLetter from "./components/NewsLetter";
import OAuthTokenHandler from "./components/OAuthTokenHandler";
import ShopProvider from "./context/ShopContext";

export default async function ShopPage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const searchParams = await props.searchParams;
    const token = searchParams?.token;

    if (token) {
        return (
            <Suspense fallback={null}>
                <OAuthTokenHandler />
            </Suspense>
        );
    }

    return (
        <>
            <ShopProvider>
            <ShopLayout>
                <HeroSection />
                <FeaturedSection />
                <ProductSection />
                <BrandSection />
                <NewsLetter />
            </ShopLayout>
            </ShopProvider>
        </>
    );
}
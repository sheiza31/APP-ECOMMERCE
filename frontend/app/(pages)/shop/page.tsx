import { Suspense } from "react";
import ShopLayout from "./layouts/layout";
import HeroSection from "./components/heroSection";
import FeaturedSection from "./components/FeaturedSection";
import ProductSection from "./components/ProductSection";
import BrandSection from "./components/BrandSection";
import NewsLetter from "./components/NewsLetter";
import OAuthTokenHandler from "./components/OAuthTokenHandler";

export default async function ShopPage() {
    return (
        <>
            <Suspense fallback={null}>
                <OAuthTokenHandler />
            </Suspense>
            <ShopLayout>
                <HeroSection />
                <FeaturedSection />
                <ProductSection />
                <BrandSection />
                <NewsLetter />
            </ShopLayout>
        </>
    );
}
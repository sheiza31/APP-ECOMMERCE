import NewArrivalsLayout from "./layouts/layout";
import HeroSection from "./components/HeroSection";
import NewsLetter from "./components/NewsLetter";
import FiltersSortingSection from "./components/FiltersSortingSection";
import ProductSection from "./components/ProductSection";
export default async function NewArrivalsPage() {
    return (
        <>
            <NewArrivalsLayout>
                <HeroSection />
                <FiltersSortingSection />
                <ProductSection />
                <NewsLetter />
            </NewArrivalsLayout>
        </>
    );
}
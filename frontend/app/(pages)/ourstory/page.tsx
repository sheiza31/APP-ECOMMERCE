import OurStoryLayout from "./layouts/layout";
import HeroSection from "./components/HeroSection";
import HeritageSection from "./components/HeritageSection"
import PhilosophySection from "./components/PhilosophySection";
import BentoGrid from "./components/BentoGrid";
import QuoteEditorialSection from "./components/QuoteEditorialSection";

export default async function Page() {
    return (
        <>
            <OurStoryLayout>
                <HeroSection />
                <HeritageSection />
                <PhilosophySection />
                <BentoGrid />
                <QuoteEditorialSection />
            </OurStoryLayout>
        </>
    );
}
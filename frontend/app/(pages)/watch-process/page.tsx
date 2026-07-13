import StoryTelling from "./components/StoryTelling";
import OurStoryLayout from "./layouts/layout";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import CtaSection from "./components/CtaSection";
export default async function Page() {
    return (
        <OurStoryLayout>
            <IntroSection />
            <StoryTelling />
            <CtaSection/>
        </OurStoryLayout>
    );
}
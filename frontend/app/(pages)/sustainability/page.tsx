import SusitainabilityLayout from "./layouts/layout"
import HeroSection from "./components/HeroSection"
import CommitmentBanner from "./components/CommimentBanner"
import EcoConciusMaterials from "./components/EcoConciusMaterials"
import Ethical from "./components/Ethical"
import NewsLetter from "./components/NewsLetter"
import SustainabilityProvider from "./context/SustainabilityContext"
export default async function SustainabilityPage() {
    return (
        <>
        <SustainabilityProvider>
        <SusitainabilityLayout>
            <HeroSection />
            <CommitmentBanner />
            <EcoConciusMaterials />
            <Ethical />
            <NewsLetter />
        </SusitainabilityLayout>
        </SustainabilityProvider>
        </>
    );
}
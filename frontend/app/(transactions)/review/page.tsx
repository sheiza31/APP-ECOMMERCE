import HeroSection from "./components/HeroSection";
import MainDetails from "./components/MainDetails";
import ReviewLayout from "./layouts/layout";
export default async function ReviewPage() {
    return (
        <>
            <ReviewLayout>
                <HeroSection />
                <MainDetails />
            </ReviewLayout>

        </>
    );
}
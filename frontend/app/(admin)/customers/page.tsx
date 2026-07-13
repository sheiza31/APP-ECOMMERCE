import HeaderSection from "./components/HeaderSection"
import CategoriesLayout from "./layouts/layout";
import StatsRow from "./components/StatsRow"
import MainContent from "./components/MainContent"
export default async function CategoriesPage() {
    return (
        <>
        <CategoriesLayout>
            <HeaderSection />
            <StatsRow />
            <MainContent />
        </CategoriesLayout>
        </>
    );
}
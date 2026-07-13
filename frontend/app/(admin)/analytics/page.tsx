import DashboardHeader from "./components/DashboardHeader";
import BentoGrid from "./components/BentoGrid";
import ChartsSection from "./components/ChartsSection"
import TableProducts from "./components/TableProducts";
import AnalyticsLayout from "./layouts/layout";
export default async function OrdersPage() {
    return (
        <>
            <AnalyticsLayout>
                <DashboardHeader />
                <BentoGrid />
                <ChartsSection />
                <TableProducts />
            </AnalyticsLayout>
        </>
    );
}
import DashboardHeader from "./components/DashboardHeader";
import BentoGrid from "./components/BentoGrid";
import ChartsSection from "./components/ChartsSection"
import TableProducts from "./components/TableAnalytics";
import AnalyticsLayout from "./layouts/layout";
import DashboardProvider from "../dashboard/context/DashboardContext";

export default async function OrdersPage() {
    return (
        <>
            <DashboardProvider>
            <AnalyticsLayout>
                <DashboardHeader />
                <BentoGrid />
                <ChartsSection />
                <TableProducts />
            </AnalyticsLayout>
        </DashboardProvider>
        </>
    );
}
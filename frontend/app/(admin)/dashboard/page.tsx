import DashboardLayout from "./layouts/layout";
import Welcome from "./components/Welcome";
import Metrics from "./components/Metrics";
import RecentOrders from "./components/RecentOrders";
import dynamic from "next/dynamic";
const SalesChart = dynamic(() => import("./components/SalesChart"), { ssr: true });
export default async function DashboardPage() {
    return (
        <>
            <DashboardLayout>
                <Welcome />
                <Metrics />
                <SalesChart />
                <RecentOrders />
            </DashboardLayout>
        </>
    );
}
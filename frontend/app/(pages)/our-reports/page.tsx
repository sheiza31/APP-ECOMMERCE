import Finnancial from "./components/Finnancial";
import NewsLetter from "./components/NewsLetter";
import OurReportsLayout from "./layouts/layout";
import Visualizations from "./components/Visualizations";
import AnnualReports from "./components/AnnualReports";
import Header from "./components/Header";
export default function OurReportsPage() {
    return (
        <>
            <OurReportsLayout>
                <Header />
                <AnnualReports />
                <Visualizations />
                <Finnancial />
                <NewsLetter />
            </OurReportsLayout>
        </>
    );
}
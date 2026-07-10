import CollectionsLayout from "./layouts/layout";
import AsideBar from "./components/AsideBar";
import Product from "./components/Product";
import { FilterProvider } from "./context/FilterContext";

export default async function CollectionsPage() {
    return (
        <>
        <CollectionsLayout>
            <FilterProvider>
                <AsideBar />
                <Product />
            </FilterProvider>
        </CollectionsLayout>
        </>
    );
}
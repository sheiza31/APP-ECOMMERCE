import CartLayout from "./layouts/layout"
import StepperComponent from "./components/StepperComponent"
import FormShipping from "./components/FormShipping"
export default async function CartPage() {
    return (
        <>
        <CartLayout>
            <StepperComponent />
            <FormShipping /> 
        </CartLayout>
        </>
    );
}
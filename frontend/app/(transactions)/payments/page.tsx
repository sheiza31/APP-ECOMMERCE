import PaymentLayout from "./layouts/layout"
import CheckoutStepper from "./components/CheckoutStepper"
import FormPayment from "./components/FormPayment"
export default async function PaymentPage() {
    return (
        <>
            <PaymentLayout>
                <CheckoutStepper />
                <FormPayment />
            </PaymentLayout>
        </>
    );
}
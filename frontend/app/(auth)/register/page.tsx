import RegisterLayout from "./layouts/layout";
import FormRegister from "./components/FormRegister";
import RegisterProvider from "./context/RegisterContext";
export default async function RegisterPage() {
    return (
        <>
            <RegisterProvider>
            <RegisterLayout>
                <FormRegister />
            </RegisterLayout>
            </RegisterProvider>
        </>
    )
}
import ForgotPasswordLayout from "./layouts/layout";
import FormForgotPassword from "../forgot-password/components/FormForgotPassword";
export default async function Page() {
    return (
        <>
            <ForgotPasswordLayout>
                <FormForgotPassword />
            </ForgotPasswordLayout>
        </>
    );
}
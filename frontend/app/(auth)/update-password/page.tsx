import FormUpdatePassword from "./components/FormUpdatePassword";
import FormUpdatePasswordLayout from "./layouts/layout";
export default async function PasswordResetPage() {
    return (
        <FormUpdatePasswordLayout>
            <FormUpdatePassword />
        </FormUpdatePasswordLayout>
    );
}
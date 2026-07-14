import React from "react";
import FormUpdatePassword from "./components/FormUpdatePassword";
import FormUpdatePasswordLayout from "./layouts/layout";
export default async function PasswordResetPage() {
    return (
        <FormUpdatePasswordLayout>
            <React.Suspense fallback={<div>Loading form...</div>}>
                <FormUpdatePassword />
            </React.Suspense>
        </FormUpdatePasswordLayout>
    );
}
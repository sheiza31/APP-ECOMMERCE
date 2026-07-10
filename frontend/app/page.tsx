import LoginLayout from "./layout";
import FormLogin from "./components/FormLogin";
import LoginProvider from "./context/LoginContext";
export default function LoginPage() {
  return (
    <>
      <LoginProvider>
        <LoginLayout>
          <FormLogin />
        </LoginLayout>  
      </LoginProvider>
    </>
  );
}

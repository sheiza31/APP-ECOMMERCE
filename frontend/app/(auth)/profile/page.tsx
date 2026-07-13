import ProfileLayout from "./layouts/layout";
import Header from "./components/Header";
import AsideBar from "./components/AsideBar";

export default async function ProfilePage() {
    return (
      <>
      <ProfileLayout>
            <Header />
            <AsideBar />
      </ProfileLayout>
      </>
    );
}
import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";
import { Loader } from "./Loader";

export const AppLayout = () => {
  const navigate = useNavigation();
  console.log(navigate);
  if (navigate.state === "loading") return <Loader />;

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

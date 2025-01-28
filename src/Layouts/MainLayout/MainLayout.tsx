import { Outlet } from "react-router";
import Navbar from "../../components/Header/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function MainLayout() {
  return (
    <>
	  <Header>
      <Navbar />
	  </Header>
      <Outlet />
	  <Footer/>
    </>
  );
}

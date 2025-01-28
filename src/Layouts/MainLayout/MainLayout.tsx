import { Outlet } from "react-router";
import Navbar from "../../components/Header/Navbar";
import Header from "../../components/Header/Header";

export default function MainLayout() {
  return (
    <>
	  <Header>
      <Navbar />
	  </Header>
      <Outlet />
    </>
  );
}

import { Outlet } from "react-router";
import Navbar from "../../components/Header/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function MainLayout() {
  return (
    <>
	<div className="flex flex-col min-h-screen">
	  <Header>
      <Navbar />
	  </Header>
	  <main className="grow-1">
       <Outlet /> 
		</main> 
	  <Footer/>
	</div>
    </>
  );
}

import FooterBrand from "./FooterBrand";
import FooterNav from "./FooterNav";

const Footer = () => {
	return (
	  <footer className=" bg-[url(/bc.webp)] bg-center bg-no-repeat bg-cover flex-col justify-center bg-primary text-primary-content p-10">
		<FooterBrand />
		<FooterNav />
	  </footer>
	);
  };
  
  export default Footer;
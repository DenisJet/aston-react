import FooterBrand from "./FooterBrand";
import FooterNav from "./FooterNav";

// className=" bg-[url(/footer-bg.png)]"
const Footer = () => {
	return (
		<footer className="relative border-2 border-black w-full   flex flex-col  justify-center items-center bg-primary text-primary-content p-10">
			{/* Фоновый блок */}
			<div className="absolute inset-0 w-full h-full bg-[url('/footer-bg.png')] sepia bg-cover bg-center opacity-50"></div>
			{/* Контент футера */}
			<div className="relative shadow-2xl z-10">
				<FooterBrand />
				<FooterNav />
			</div>
		</footer>
	);
};
  
  export default Footer;
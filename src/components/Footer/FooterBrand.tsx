const FooterBrand = () => {
	return (
	  <aside>
		<svg
		  width="50"
		  height="50"
		  viewBox="0 0 24 24"
		  xmlns="http://www.w3.org/2000/svg"
		  fillRule="evenodd"
		  clipRule="evenodd"
		  className="inline-block fill-current"
		>
		  <path d="M22.672 15.226l-2.432.811..."></path>
		</svg>
		<p className="font-bold">
		  ReelQuest
		  <br />
		  Providing reliable infromation about modern films
		</p>
		<p>Copyright © {new Date().getFullYear()} - All right reserved</p>
	  </aside>
	);
  };
  export default FooterBrand
import SocialIcon from "./SocialIcon";

const FooterNav = () => {
	return (
	  <nav>
		<div className="grid grid-flow-col gap-4">
		  <SocialIcon
			href="https://twitter.com"
			svgPath="M24 4.557c-.883.392-1.832.656..."
		  />
		  <SocialIcon
			href="https://youtube.com"
			svgPath="M19.615 3.184c-3.604-.246-11.631-.245..."
		  />
		  <SocialIcon
			href="https://facebook.com"
			svgPath="M9 8h-3v4h3v12h5v-12h3.642l.358-4h..."
		  />
		</div>
	  </nav>
	);
  };
  
  export default FooterNav;
  
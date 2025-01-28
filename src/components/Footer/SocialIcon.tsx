const SocialIcon = ({ href, svgPath }: {href: string, svgPath: string}) => {
	return (
	  <a href={href} target="_blank" rel="noopener noreferrer">
		<svg
		  xmlns="http://www.w3.org/2000/svg"
		  width="24"
		  height="24"
		  viewBox="0 0 24 24"
		  className="fill-current"
		>
		  <path d={svgPath}></path>
		</svg>
	  </a>
	);
  };
  
  export default SocialIcon;
import { Link } from "react-router";

const SocialIcon = () => {
	return (
	  <Link to={'/https://github.com/DenisJet/aston-react'} target="_blank" rel="noopener noreferrer">
		<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.385.6.11.793-.26.793-.577v-2.165c-3.338.726-4.043-1.416-4.043-1.416-.546-1.385-1.333-1.755-1.333-1.755-1.09-.745.082-.729.082-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.305 3.49.998.107-.776.42-1.305.763-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.469-2.382 1.237-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.002-.404c1.018.005 2.04.138 3.002.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.838 1.235 1.91 1.235 3.22 0 4.608-2.807 5.625-5.477 5.921.432.372.823 1.102.823 2.22v3.293c0 .32.192.694.8.576C20.565 21.796 24 17.302 24 12c0-6.627-5.373-12-12-12Z"
  />
</svg>
	  </Link>
	);
  };
  
  export default SocialIcon;
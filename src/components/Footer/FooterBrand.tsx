const FooterBrand = () => {
	return (
	  <aside className="flex flex-col gap-3 items-center text-center space-y-2">
		{/* Логотип */}
		<div className="w-[200px]  max-h-[30px]">
		  <svg
			xmlns="http://www.w3.org/2000/svg"
			width="200"
			height="50"
			viewBox="0 0 200 50"
			fill="currentColor"
		  >
			<text
			  x="50%"
			  y="50%"
			  fontFamily="Cinzel, serif"
			  fontSize="32"
			  letterSpacing={'5px'}
			  fill="black"
			  textAnchor="middle"
			  dominantBaseline="middle"
			  stroke="white"
			  strokeWidth="2"
			>
			  ReelQuest
			</text>
		  </svg>
		</div>
  
		{/* Описание */}
		<p className="text-lg font-semibold text-white">
		  Providing reliable information about modern films
		</p>
  
		{/* Авторские права */}
		<p className="text-sm text-gray-50">
		  Copyright © {new Date().getFullYear()} - All rights reserved
		</p>
	  </aside>
	);
  };
  
  export default FooterBrand;
  
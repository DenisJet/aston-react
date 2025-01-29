const FooterBrand = () => {
	return (
	  <aside className="flex flex-col gap-2 items-center text-center space-y-2">
		{/* Логотип */}
		<div className="w-[200px]   max-h-[50px] bg-gradient-to-r from-white/50  to-black/50 rounded-lg ">
  <svg
  className="animate-ping duration-3000 delay-1000"
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
      fill="gold"
      textAnchor="middle"
      dominantBaseline="middle"
      stroke="white"
      strokeWidth="1"
    >
      ReelQuest
    </text>
  </svg>
</div>
  
		{/* Описание */}
		<p className="text-lg font-semibold text-white">
		  Providing reliable information 
		  <span style={{ perspective: "1000px" }} className=" mx-2 animate-pulse duration-1000 delay-500 transform  p-1 bg-gray-400/65">
		  about modern films
			</span>
		</p>
  
		{/* Авторские права */}
		<p className="text-sm text-gray-50">
		  Copyright © {new Date().getFullYear()} - All rights reserved
		</p>
	  </aside>
	);
  };
  
  export default FooterBrand;
  
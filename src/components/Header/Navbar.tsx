

import { AvatarDropdown } from './AvatarDropdown';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';
import SearchBarDropdown from './SearchBarDropdown';

// const Navbar = () => {
//   return (
//     <div className="navbar relative flex-col    gap-3 border-3 border-double sm:flex-row sm:justify-between  bg-base-100 shadow-sm">
// 		{/* <div className="absolute bg-[url('/header-bg.png')] inset-0"></div> */}
//       <div>	
//         <Logo />
//       </div>
//       <div className="flex gap-2">
//         <SearchBar />
//         <AvatarDropdown />
//       </div>
//     </div>
//   );
// };



const Navbar = () => {
	return (
	  <div className="relative flex flex-col gap-3 border-3 border-double sm:flex-row sm:justify-between bg-base-100 shadow-sm overflow-hidden">
		{/* Фон */}
		<div className="absolute inset-0 bg-[url('/header-bg.png')] bg-cover bg-center opacity-50  grayscale-150"></div>
  
		{/* Контент */}
		<div className="relative flex p-1 justify-center z-10">
		  <Logo />
		</div>
		<div className="relative pb-2 justify-evenly flex items-center gap-2">
		  <SearchBarDropdown/>
		  <SearchBar />
		  <AvatarDropdown />
		</div>
	  </div>
	);
  };

export default Navbar;

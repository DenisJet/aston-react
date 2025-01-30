import { AvatarDropdown } from './AvatarDropdown';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';
import SearchBarDropdown from './SearchBarDropdown';

const Navbar = () => {
  return (
    <div className=" flex    flex-col px-3 bg-[url('/header-bg.png')] bg-cover bg-center  gap-3 border-3 border-double sm:flex-row sm:justify-between bg-base-100 shadow-sm">
      <div className=" flex  p-1 justify-center">
        <Logo />
      </div>
      <div className=" pb-2 justify-evenly flex items-center gap-2">
        <SearchBarDropdown />
        <SearchBar />
        <AvatarDropdown />
      </div>
    </div>
  );
};

export default Navbar;

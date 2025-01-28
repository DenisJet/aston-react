import { Link } from 'react-router';
import { ROUTES } from '../../constants/routes.constants';

export const Logo = () => {
  return (
	<>
    <Link to={ROUTES.home} className="link text-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-150 hover:bg-black-500  hover:opacity-50">
	<img
  className="rounded-lg border-r-1 border-l-1 object-contain hover:scale-110 delay-100 duration-200 bg-black/25 w-20"
  src="/logo-Photoroom.png"/>
    </Link>	
	</>
  );
};

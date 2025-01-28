import { Link } from 'react-router';
import { ROUTES } from '../../constants/routes.constants';

export const Logo = () => {
  return (
    <Link to={ROUTES.home} className="link text-xl hover:opacity-50">
      Movie Search
    </Link>
  );
};

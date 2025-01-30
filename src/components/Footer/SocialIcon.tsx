import { Link } from 'react-router';
import footerLogo from '/git-logo.svg';
import { URL } from '../../constants/gitRoute.constants';

const SocialIcon = () => {
  return (
    <Link to={URL.git} target="_blank" rel="noopener noreferrer">
      <img src={footerLogo} alt="gitHubLogo" />
    </Link>
  );
};

export default SocialIcon;

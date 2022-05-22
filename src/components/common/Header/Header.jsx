import AuthHeader from './AuthHeader/AuthHeader';
import NonAuthHeader from './NonAuthHeader/NonAuthHeader';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();

  return pathname !== '/' ? (
    <AuthHeader />
  ) : (
    <NonAuthHeader />
  );
};

export default Header;
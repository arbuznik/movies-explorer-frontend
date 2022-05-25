import AuthHeader from './AuthHeader/AuthHeader';
import NonAuthHeader from './NonAuthHeader/NonAuthHeader';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';

const Header = () => {
  const { user } = useContext(UserContext)

  return user ? (
    <AuthHeader />
  ) : (
    <NonAuthHeader />
  );
};

export default Header;
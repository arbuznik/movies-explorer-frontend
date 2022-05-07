import AuthHeader from './AuthHeader/AuthHeader';
import NonAuthHeader from './NonAuthHeader/NonAuthHeader';
import { useLocation } from 'react-router-dom';

const Header = () => {
  // console.log(`isAuth: ${isAuth}`)

  const { pathname } = useLocation();
  // return isAuth ? (
  //   <AuthHeader />
  // ) : (
  //   <NonAuthHeader />
  // );

  return pathname !== '/' ? (
    <AuthHeader />
  ) : (
    <NonAuthHeader />
  );
};

export default Header;
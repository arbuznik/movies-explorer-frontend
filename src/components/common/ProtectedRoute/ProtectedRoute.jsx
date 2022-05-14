import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { Navigate } from 'react-router-dom';
import routes from '../../../config/routes';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  return user ? children : <Navigate to={routes.login.path} />
};

export default ProtectedRoute;
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { Navigate, useNavigate } from 'react-router-dom';
import routes from '../../../config/routes';
import { useEffect } from 'react';
import { mainApi } from '../../../utils/MainApi';

const ProtectedRoute = ({ children }) => {
  const { user, setUserContext } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      mainApi.getLoggedInUser()
        .then(user => {
          setUserContext(user);
          navigate(-1);
        })
        .catch(mainApi.handleApiError);
    }
  }, [setUserContext, user]);

  return user ? children : <Navigate to={routes.home.path} />
};

export default ProtectedRoute;
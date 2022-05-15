import { useContext, useEffect } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import routes from '../../../config/routes';
import { mainApi } from '../../../utils/MainApi';

const Logout = () => {
  const { setUserContext } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    mainApi.logout()
      .then(() => {
        setUserContext(null);
        navigate(routes.login.path);
      })
      .catch(mainApi.handleApiError)
  })
};

export default Logout;
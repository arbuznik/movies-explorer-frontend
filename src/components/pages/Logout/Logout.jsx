import { useContext, useEffect } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import routes from '../../../config/routes';

const Logout = () => {
  const { setUserContext } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    setUserContext(null);
    navigate(routes.login.path);
  })
};

export default Logout;
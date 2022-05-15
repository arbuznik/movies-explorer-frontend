import './App.css';
import Router from '../Router/Router';
import { UserContext } from '../../contexts/UserContext';
import { useContext, useEffect } from 'react';
import { mainApi } from '../../utils/MainApi';

function App() {
  const { user, setUserContext } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      mainApi.getLoggedInUser()
        .then(user => {
          setUserContext(user);
        })
        .catch(mainApi.handleApiError);
    }
  }, [setUserContext, user]);

  return (
      <Router />
  );
}

export default App;

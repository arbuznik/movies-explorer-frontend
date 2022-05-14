import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Layout from '../pages/Layout/Layout';
import Movies from '../pages/Movies/Movies';
import SavedMovies from '../pages/SavedMovies/SavedMovies';
import Profile from '../pages/Profile/Profile';
import Login from '../pages/Login/Login';
import Logout from '../pages/Logout/Logout';
import Register from '../pages/Register/Register';
import NotFound from '../pages/NotFound/NotFound';
import routes from '../../config/routes';
import ProtectedRoute from '../common/ProtectedRoute/ProtectedRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route path={routes.home.path} element={<Main />} />
            <Route path={routes.movies.path} element={<Movies />} />
            <Route path={routes.savedMovies.path} element={<SavedMovies />} />
          </Route>
          <Route path={routes.profile.path} element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
        <Route path={routes.login.path} element={<Login />} />
        <Route path={routes.register.path} element={<Register />} />
        <Route path={routes.logout.path} element={<Logout />} />
        <Route path={routes.notFound.path} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import './SideMenu.css';
import { Link } from 'react-router-dom';
import routes from '../../../config/routes';

const SideMenu = ({ isOpen, onClick }) => {

  return (
    <div className={`side-menu ${isOpen && 'side-menu_hidden'}`}>
      <button className="side-menu__close-button" onClick={onClick} />
      <nav className="side-menu__links">
        <Link className="side-menu__link" to={routes.home.path} onClick={onClick}>Home</Link>
        <Link className="side-menu__link" to={routes.movies.path} onClick={onClick}>Movies</Link>
        <Link className="side-menu__link" to={routes.savedMovies.path} onClick={onClick}>Saved movies</Link>
      </nav>
      <Link className="side-menu__account-link" to={routes.profile.path} onClick={onClick}>
        <p className="side-menu__account-link-text">Profile</p>
        <div className="side-menu__account-lint-icon" />
      </Link>
    </div>
  );
};

export default SideMenu;
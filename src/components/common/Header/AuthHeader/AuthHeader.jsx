import logo from '../../../../images/header-logo.svg';
import SideMenu from '../../SideMenu/SideMenu';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import routes from '../../../../config/routes';
import '../Header.css';
import './AuthHeader.css';

const AuthHeader = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  }

  const headerContent = window.screen.width >= 1024 ? (
    <>
      <nav className="header__links">
        <NavLink to={routes.movies.path} className={({ isActive }) => isActive ? "header__link header__link_type_active" : "header__link"}>Фильмы</NavLink>
        <NavLink to={routes.savedMovies.path} className={({ isActive }) => isActive ? "header__link header__link_type_active" : "header__link"}>Сохранённые фильмы</NavLink>
      </nav>
      <Link className="profile__account-link" to={routes.profile.path}>
        <p className="profile__account-link-text">Аккаунт</p>
        <div className="profile__account-lint-icon" />
      </Link>
    </>
    ) : (
    <nav className="header__links">
      <button onClick={toggleMenu} className="header__menu-button" />
    </nav>
  )

  return (
    <header className="header header_type_auth">
      <div className="header__container">
        <img className="header__image" src={logo} alt="logo" />
        {headerContent}
      </div>
      <SideMenu isOpen={isSideMenuOpen} onClick={toggleMenu} />
    </header>
  );
};

export default AuthHeader;
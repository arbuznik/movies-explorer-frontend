import { Link, useLocation } from 'react-router-dom';
import logo from "../../../images/header-logo.svg";
import "./Header.css";
import routes from '../../../config/routes';

const Header = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return (
      <header className="header">
        <div className="header__container">
          <img className="header__image" src={logo} alt="logo" />
          <nav className="header__links">
            <Link to={routes.register.path} className="header__link_type_plain">Регистрация</Link>
            <Link to={routes.login.path} className="header__link_type_filled">Войти</Link>
          </nav>
        </div>
      </header>
    )
  }

  return (
    <p>Header</p>
  );
};

export default Header;
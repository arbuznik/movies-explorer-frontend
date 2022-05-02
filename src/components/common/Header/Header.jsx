import { Link } from 'react-router-dom';
import logo from "../../../images/header-logo.svg";
import "./Header.css";
import routes from '../../../config/routes';

const Header = () => {
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
};

export default Header;
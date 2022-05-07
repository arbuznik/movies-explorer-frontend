import headerLogo from '../../../images/header-logo.svg';
import routes from '../../../config/routes';
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  return (
    <main className="login">
      <img src={headerLogo} alt="Logo" className="login__header-logo" />
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form">
        <label htmlFor="email" className="login__form_label">E-mail
        <input id="email" type="email" className="login__form-input" />
        </label>
        <label htmlFor="password" className="login__form_label">Пароль
        <input id="password" type="password" className="login__form-input" />
        </label>
        <button type="submit" className="login__form-button">Войти</button>
      </form>
      <p className="login__text">Ещё не зарегистрированы?
        <Link className="login__link" to={routes.register.path}> Регистрация</Link>
      </p>
    </main>
  );
};

export default Login;
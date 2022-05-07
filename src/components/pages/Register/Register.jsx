import headerLogo from '../../../images/header-logo.svg';
import routes from '../../../config/routes';
import { Link } from 'react-router-dom';
import "./Register.css";

const Register = () => {
  return (
    <main className="register">
      <img src={headerLogo} alt="Logo" className="register__header-logo" />
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form">
        <label htmlFor="name" className="register__form_label">Имя
          <input id="name" type="email" className="register__form-input" />
        </label>
        <label htmlFor="email" className="register__form_label">E-mail
          <input id="email" type="email" className="register__form-input" />
        </label>
        <label htmlFor="password" className="register__form_label">Пароль
          <input id="password" type="password" className="register__form-input" />
        </label>
        <button type="submit" className="register__form-button">Зарегистрироваться</button>
      </form>
      <p className="register__text">Уже зарегистрированы?
        <Link className="register__link" to={routes.login.path}> Войти</Link>
      </p>
    </main>
  );
};

export default Register;
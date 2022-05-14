import React, { useContext, useState } from 'react';
import headerLogo from '../../../images/header-logo.svg';
import routes from '../../../config/routes';
import { Link, useNavigate } from 'react-router-dom';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';
import Form from '../../common/Form/Form';
import { mainApi } from '../../../utils/MainApi';
import { UserContext } from '../../../contexts/UserContext';
import "./Login.css";

const Login = () => {
  const { values: userData, errors, isValid, handleChange } = useFormWithValidation();
  const [apiError, setApiError] = useState(null);
  const { user, setUserContext } = useContext(UserContext);
  const navigate = useNavigate();

  const { email = '', password = '' } = userData;

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    mainApi.login(userData)
      .then(user => {
        if (user.message === 'Auth successfull') {
          setUserContext(userData.email);
          navigate(routes.movies.path);
        }
      })
      .catch(error => {
        setApiError(error)
      })
  }

  if (user) {
    navigate(routes.movies.path);
  }

  return (
    <main className="login">
      <img src={headerLogo} alt="Logo" className="login__header-logo" />
      <h1 className="login__title">Рады видеть!</h1>
      <Form onSubmit={handleFormSubmit}>
        <label htmlFor="email" className="form__label">E-mail
        <input
          id="email"
          type="email"
          name="email"
          className={`form__input ${errors.email && 'form__input_type_error'}`}
          required
          value={email}
          onChange={handleChange}
        />
        <p className="form__input-error">{errors.email}</p>
        </label>
        <label htmlFor="password" className="form__label">Пароль
        <input
          id="password"
          type="password"
          name="password"
          className={`form__input ${errors.password && 'form__input_type_error'}`}
          required
          value={password}
          minLength={8}
          onChange={handleChange}
        />
        <p className="form__input-error">{errors.password}</p>
        </label>
        {apiError && <p className="form__input-error">{apiError}</p>}
        <button
          type="submit"
          className="form__button"
          disabled={!isValid}
        >
          Войти
        </button>
      </Form>
      <p className="login__text">Ещё не зарегистрированы?
        <Link className="login__link" to={routes.register.path}> Регистрация</Link>
      </p>
    </main>
  );
};

export default Login;

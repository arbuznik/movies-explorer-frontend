import headerLogo from '../../../images/header-logo.svg';
import routes from '../../../config/routes';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';
import Form from '../../common/Form/Form';
import { mainApi } from '../../../utils/MainApi';
import { UserContext } from '../../../contexts/UserContext';
import "./Register.css";

const Register = () => {
  const { values: userData, errors, isValid, handleChange } = useFormWithValidation();
  const [apiError, setApiError] = useState(null);
  const { user, setUserContext } = useContext(UserContext);
  const navigate = useNavigate();

  const { name = '', email = '', password = '' } = userData;

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    mainApi.register(userData)
      .then(() => {
        mainApi.login({ email, password })
          .then(res => {
            if (res.message === 'Auth successfull') {
              mainApi.getLoggedInUser()
                .then(user => {
                  setUserContext(user);
                })
                .catch(mainApi.handleApiError);
            }
          })
      })
      .catch(error => {
        setApiError(error)
      })
  }

  useEffect(() => {
    if (user) {
      navigate(routes.movies.path);
    }
  })

  return (
    <main className="register">
      <img src={headerLogo} alt="Logo" className="register__header-logo" />
      <h1 className="register__title">Добро пожаловать!</h1>
      <Form onSubmit={handleFormSubmit}>
        <label htmlFor="name" className="form__label">Имя
          <input
            id="name"
            name="name"
            type="text"
            className={`form__input ${errors.name && 'form__input_type_error'}`}
            required
            value={name}
            minLength={2}
            maxLength={30}
            onChange={handleChange}
          />
          <p className="form__input-error">{errors.name}</p>
        </label>
        <label htmlFor="email" className="form__label">E-mail
          <input
            id="email"
            name="email"
            type="email"
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
            name="password"
            type="password"
            className={`form__input ${errors.password && 'form__input_type_error'}`}
            required
            value={password}
            minLength={8}
            onChange={handleChange}
          />
          <p className="form__input-error">{errors.password}</p>
        </label>
        {apiError && <p className="form__input-error">{apiError.message}</p>}
        <button
          type="submit"
          className="form__button"
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
      </Form>
      <p className="register__text">Уже зарегистрированы?
        <Link className="register__link" to={routes.login.path}> Войти</Link>
      </p>
    </main>
  );
};

export default Register;

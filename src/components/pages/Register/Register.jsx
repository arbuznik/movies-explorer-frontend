import headerLogo from '../../../images/header-logo.svg';
import routes from '../../../config/routes';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';
import Form from '../../common/Form/Form';
import { mainApi } from '../../../utils/MainApi';
import { UserContext } from '../../../contexts/UserContext';
import { EMAIL_VALIDATION_PATTERN } from '../../../constants/constants';
import "./Register.css";

const Register = () => {
  const { values: userData, errors, isValid, handleChange } = useFormWithValidation();
  const [apiError, setApiError] = useState(null);
  const { user, setUserContext } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { name = '', email = '', password = '' } = userData;

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    mainApi.register(userData)
      .then(() => {
        mainApi.login({ email, password })
          .then(res => {
            if (res.message === 'Auth successfull') {
              mainApi.getLoggedInUser()
                .then(user => {
                  setUserContext(user);
                  navigate(routes.movies.path);
                })
                .catch(err => setApiError(err));
            }
          })
      })
      .catch(error => {
        setApiError(error)
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    if (user) {
      navigate(routes.movies.path);
    }
  }, [user, navigate])

  return (
    <main className="register">
      <Link to={routes.home.path} >
        <img src={headerLogo} alt="Logo" className="register__header-logo" />
      </Link>
      <h1 className="register__title">Welcome!</h1>
      <Form onSubmit={handleFormSubmit}>
        <label htmlFor="name" className="form__label">Name
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
            pattern={EMAIL_VALIDATION_PATTERN}
            className={`form__input ${errors.email && 'form__input_type_error'}`}
            required
            value={email}
            onChange={handleChange}
          />
          <p className="form__input-error">{errors.email}</p>
        </label>
        <label htmlFor="password" className="form__label">Password
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
        {apiError && <p className="form__input-error">{apiError}</p>}
        <button
          type="submit"
          className="form__button"
          disabled={!isValid || isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
      </Form>
      <p className="register__text">Already registered?
        <Link className="register__link" to={routes.login.path}> Login</Link>
      </p>
    </main>
  );
};

export default Register;

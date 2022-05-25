import React, { useContext, useState } from 'react';
import routes from '../../../config/routes';
import { Link } from 'react-router-dom';
import "./Profile.css";
import AuthHeader from '../../common/Header/AuthHeader/AuthHeader';
import { UserContext } from '../../../contexts/UserContext';
import Form from '../../common/Form/Form';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';
import { mainApi } from '../../../utils/MainApi';
import { EMAIL_VALIDATION_PATTERN } from '../../../constants/constants';

const Profile = () => {
  const { user, setUserContext } = useContext(UserContext);
  const { name, email } = user;

  const { values: userData, errors, isValid, handleChange } = useFormWithValidation();
  const { newName = name, newEmail = email } = userData;

  const [isEditing, setIsEditing] = useState(false);
  const [apiError, setApiError] = useState(null);

  const handleEditProfile = () => {
    setIsEditing(true);
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    mainApi.updateUser({ name: newName, email: newEmail })
      .then(user => {
        setUserContext(user);
        setIsEditing(false);
      })
      .catch(error => {
        setApiError(error)
      })
  }

  return (
    <>
      <AuthHeader />
      <main className="profile">
        <h1 className="profile__title">{`Привет, ${name}!`}</h1>
        {isEditing ? (
          <Form onSubmit={handleFormSubmit}>
            <label htmlFor="name" className="form__label">Имя
              <input
                id="name"
                name="newName"
                type="text"
                className={`form__input ${errors.name && 'form__input_type_error'}`}
                required
                value={newName}
                minLength={2}
                maxLength={30}
                onChange={handleChange}
              />
              <p className="form__input-error">{errors.newName}</p>
            </label>
            <label htmlFor="email" className="form__label">E-mail
              <input
                id="email"
                type="email"
                name="newEmail"
                pattern={EMAIL_VALIDATION_PATTERN}
                className={`form__input ${errors.email && 'form__input_type_error'}`}
                required
                value={newEmail}
                onChange={handleChange}
              />
              <p className="form__input-error">{errors.newEmail}</p>
            </label>
            {apiError && <p className="form__input-error">{apiError}</p>}
            <button
              type="submit"
              className="form__button"
              disabled={!isValid || (name === newName && email === newEmail)}
            >
              Сохранить
            </button>
          </Form>
        ) : (
          <>
            <div className="profile__info">
              <div className="profile__info-item">
                <p className="profile__info-subtitle">Имя</p>
                <p className="profile__info-value">{name}</p>
              </div>
              <div className="profile__info-divider" />
              <div className="profile__info-item">
                <p className="profile__info-subtitle">E-mail</p>
                <p className="profile__info-value">{email}</p>
              </div>
            </div>
            <button className="profile__edit-button" onClick={handleEditProfile}>Редактировать</button>
            <Link className="profile__logout-link" to={routes.logout.path}>Выйти из аккаунта</Link>
          </>
        )}
      </main>
    </>
  );
};

export default Profile;
import routes from '../../../config/routes';
import { Link } from 'react-router-dom';
import "./Profile.css";
import AuthHeader from '../../common/Header/AuthHeader/AuthHeader';
import { useState } from 'react';

const Profile = () => {
  const userName = 'Виталий';
  const userEmail = 'pochta@yandex.ru';

  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(true);
  }

  return (
    <>
      <AuthHeader />
      <main className="profile">
        <h1 className="profile__title">{`Привет, ${userName}!`}</h1>
        {isEditing ? (
          <form className="profile__form">
            <label htmlFor="name" className="profile__form_label">Имя
              <input
                id="name"
                type="email"
                className="profile__form-input"
                required
              />
            </label>
            <label htmlFor="email" className="profile__form_label">E-mail
              <input
                id="email"
                type="email"
                className="profile__form-input"
                required
              />
            </label>
            <label htmlFor="password" className="profile__form_label">Пароль
              <input
                id="password"
                type="password"
                className="profile__form-input"
                required
              />
            </label>
            <button type="submit" className="profile__form-button">Сохранить</button>
          </form>
        ) : (
          <>
            <div className="profile__info">
              <div className="profile__info-item">
                <p className="profile__info-subtitle">Имя</p>
                <p className="profile__info-value">{userName}</p>
              </div>
              <div className="profile__info-divider" />
              <div className="profile__info-item">
                <p className="profile__info-subtitle">E-mail</p>
                <p className="profile__info-value">{userEmail}</p>
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
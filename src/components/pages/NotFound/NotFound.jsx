import { useNavigate } from 'react-router-dom';
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <main className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
      </div>
      <button type="button" className="not-found__button" onClick={handleClick}>Назад</button>
    </main>
  );
};

export default NotFound;
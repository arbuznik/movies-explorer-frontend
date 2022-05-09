import { useLocation } from 'react-router-dom';
import routes from '../../../config/routes';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { image, nameRU, duration, saved } = movie;

  const pathname = useLocation().pathname;

  const durationString = `${Math.floor(duration / 60)}ч ${duration % 60}м`;

  let buttonClassName = 'movie-card__save-button';

  if (pathname === routes.savedMovies.path) {
    buttonClassName += ' movie-card__save-button_type_saved-cross';
  } else {
    buttonClassName += ` ${saved && 'movie-card__save-button_type_saved'}`
  }

  return (
    <article className="movie-card">
      <div className="movie-card__header">
        <h2 className="movie-card__title">{nameRU}</h2>
        <p className="movie-card__subtitle">{durationString}</p>
        <button
          type="button"
          className={buttonClassName} />
      </div>
      <img src={`https://api.nomoreparties.co${image.formats.thumbnail.url}`} alt={nameRU} className="movie-card__cover" />
    </article>
  );
};

export default MovieCard;
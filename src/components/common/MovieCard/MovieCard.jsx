import { useLocation } from 'react-router-dom';
import routes from '../../../config/routes';
import './MovieCard.css';
import { mainApi } from '../../../utils/MainApi';
import { useEffect, useState } from 'react';

const MovieCard = ({ movie, setSavedMovies }) => {
  const { image, nameRU, duration, isSaved } = movie;
  const thumbnail = image?.formats?.thumbnail?.url || movie.thumbnail;

  const [isMovieSaved, setIsMovieSaved] = useState(false);

  useEffect(() => {
    setIsMovieSaved(isSaved)
  }, [isSaved])

  const pathname = useLocation().pathname;

  const durationString = `${Math.floor(duration / 60)}ч ${duration % 60}м`;

  let buttonClassName = 'movie-card__save-button';

  if (pathname === routes.savedMovies.path) {
    buttonClassName += ' movie-card__save-button_type_saved-cross';
  } else {
    buttonClassName += ` ${isMovieSaved && 'movie-card__save-button_type_saved'}`
  }

  const handleSaveClick = () => {
   if (isMovieSaved) {
      mainApi.deleteMovie(movie._id)
        .then(res => {
          console.log('movie deleted: ', res);
          setIsMovieSaved(!isMovieSaved);
          setSavedMovies(movies => movies.filter(m => m._id !== movie._id))
        })
        .catch(mainApi.handleApiError)
    }

    if (!isMovieSaved) {
      mainApi.saveMovie(movie)
        .then(res => {
          console.log('movie saved: ', res)
          setIsMovieSaved(!isMovieSaved);
        })
        .catch(mainApi.handleApiError)
    }
  }

  return (
    <article className="movie-card">
      <div className="movie-card__header">
        <h2 className="movie-card__title">{nameRU}</h2>
        <p className="movie-card__subtitle">{durationString}</p>
        <button
          type="button"
          className={buttonClassName}
          onClick={handleSaveClick}
        />
      </div>
      <img src={`https://api.nomoreparties.co${thumbnail}`} alt={nameRU} className="movie-card__cover" />
    </article>
  );
};

export default MovieCard;
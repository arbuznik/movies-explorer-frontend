import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { image, nameRU, duration } = movie;

  const durationString = `${Math.floor(duration / 60)}ч ${duration % 60}м`;

  return (
    <article className="movie-card">
      <div className="movie-card__header">
        <h2 className="movie-card__title">{nameRU}</h2>
        <p className="movie-card__subtitle">{durationString}</p>
        <button className="movie-card__save-button" />
      </div>
      <img src={`https://api.nomoreparties.co${image.formats.thumbnail.url}`} alt={nameRU} className="movie-card__cover" />
    </article>
  );
};

export default MovieCard;
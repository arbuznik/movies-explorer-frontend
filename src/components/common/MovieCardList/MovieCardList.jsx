import movies from '../../../mockData/movies.json';
import './MovieCardList.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieCardList = () => {
  return (
    <section className="movie-card-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      <div className="movie-card-list__show-more">
        <button className="movie-card-list__show-more-button">Ещё</button>
      </div>
    </section>
  );
};

export default MovieCardList;
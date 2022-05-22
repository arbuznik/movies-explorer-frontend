import './MovieCardList.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieCardList = ({ movies, setSavedMovies }) => {

  return (
    <section className="movie-card-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} setSavedMovies={setSavedMovies} />
      ))}
    </section>
  );
};

export default MovieCardList;
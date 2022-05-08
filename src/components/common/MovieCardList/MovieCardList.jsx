import movies from '../../../mockData/movies.json';
import './MovieCardList.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieCardList = () => {
  return (
    <section className="movie-card-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
};

export default MovieCardList;
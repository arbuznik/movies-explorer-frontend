import { SHORT_MOVIE_DURATION } from '../constants/constants';

export const getFilteredMovies = (movies, searchQuery, shortMovies) => {
  const movieLength = shortMovies ? SHORT_MOVIE_DURATION : Infinity;

  return movies.filter(movie => {
    return movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase()) &&
    movie.duration <= movieLength
  })
}
import { moviesApi } from './MoviesApi';

export const fetchBeatMoviesAndSaveToStorage = (setIsLoading, setSearchError, setMovies) => {
  setIsLoading(true);
  setSearchError(null);

  moviesApi.getMovies()
    .then(movies => {
      localStorage.setItem('movies', JSON.stringify(movies));

      setMovies(movies);
    })
    .catch(error => {
      setSearchError(error);
    })
    .finally(() => {
      setIsLoading(false);
    })
}
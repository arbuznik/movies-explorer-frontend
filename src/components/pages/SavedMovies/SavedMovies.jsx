import MovieCardList from '../../common/MovieCardList/MovieCardList';
import Search from '../../common/Search/Search';
import { useEffect, useState } from 'react';
import { mainApi } from '../../../utils/MainApi';

const SavedMovies = () => {
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);

  const [shortMoviesSwitch, setShortMoviesSwitch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    mainApi.getMovies()
      .then(movies => {
        console.log(movies)
        setSavedMovies(movies.map(movie => {
          return { ...movie, isSaved: true, thumbnail: movie.thumbnail.replace('https://api.nomoreparties.co', '') }
        }));
      })
      .catch(error => mainApi.handleApiError(error))
  }, [])

  const handleShortMoviesToggle = (value) => {
    setShortMoviesSwitch(value);
  }

  const handleSearchQueryChange = (value) => {
    setSearchQuery(value);
  }

  return (
    <main className="movies">
      <Search
        movies={savedMovies}
        setSearchedMovies={setSearchedMovies}
        shortMoviesSwitch={shortMoviesSwitch}
        handleShortMoviesToggle={handleShortMoviesToggle}
        searchQuery={searchQuery}
        handleSearchQueryChange={handleSearchQueryChange}
      />
      <MovieCardList movies={searchedMovies} setSavedMovies={setSavedMovies} />
    </main>
  );
};

export default SavedMovies;
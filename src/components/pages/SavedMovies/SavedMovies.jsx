import MovieCardList from '../../common/MovieCardList/MovieCardList';
import Search from '../../common/Search/Search';
import { useContext, useEffect, useState } from 'react';
import { mainApi } from '../../../utils/MainApi';
import { UserContext } from '../../../contexts/UserContext';

const SavedMovies = () => {
  const { user } = useContext(UserContext);

  const [savedMovies, setSavedMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);

  const [shortMoviesSwitch, setShortMoviesSwitch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    mainApi.getMovies()
      .then(movies => {
        const moviesFilteredByOwner = movies.filter((movie) => movie.owner === user._id)

        setSavedMovies(moviesFilteredByOwner.map(movie => {
          return { ...movie, isSaved: true, thumbnail: movie.thumbnail.replace('https://api.nomoreparties.co', '') }
        }));
      })
      .catch(error => mainApi.handleApiError(error))
  }, [user._id])

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
      {searchedMovies.length > 0 ? (
        <MovieCardList movies={searchedMovies} setSavedMovies={setSavedMovies} />
      ) : (
        <p className="movies__error">Nothing found</p>
      )}
    </main>
  );
};

export default SavedMovies;
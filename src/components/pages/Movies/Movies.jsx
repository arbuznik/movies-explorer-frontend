import MovieCardList from '../../common/MovieCardList/MovieCardList';
import Search from '../../common/Search/Search';
import './Movies.css';
import { useContext, useEffect, useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import { fetchBeatMoviesAndSaveToStorage } from '../../../utils/fetchBeatMovies';
import { determineMoviesToRender } from '../../../utils/determineMoviesToRender';
import { mainApi } from '../../../utils/MainApi';
import { UserContext } from '../../../contexts/UserContext';

const Movies = () => {
  const { user } = useContext(UserContext);

  const [movies, setMovies] = useState([]);
  const [populatedMovies, setPopulatedMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [renderMovies, setRenderMovies] = useState([]);
  const [renderMoviesNumber, setRenderMoviesNumber] = useState(0);

  const [shortMoviesSwitch, setShortMoviesSwitch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [loadMoreButtonNumber, setLoadMoreButtonNumber] = useState(0);
  const [renderMoreMoviesNumber, setRenderMoreMoviesNumber] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);

  useEffect(() => {
    const { renderMoviesNumber, loadMoreButtonNumber } = determineMoviesToRender();

    setRenderMoviesNumber(renderMoviesNumber);
    setLoadMoreButtonNumber(loadMoreButtonNumber);

    window.addEventListener('resize', determineMoviesToRender)

    return () => window.removeEventListener('resize', determineMoviesToRender)
  }, [])

  useEffect(() => {
    mainApi.getMovies()
      .then(movies => {
        const moviesFilteredByOwner = movies.filter((movie) => movie.owner === user._id)

        setSavedMovies(moviesFilteredByOwner);
      })
      .catch(error => mainApi.handleApiError(error))
  }, [user._id])

  useEffect(() => {
    setRenderMovies(searchedMovies.slice(0, renderMoviesNumber + renderMoreMoviesNumber))
  }, [renderMoviesNumber, renderMoreMoviesNumber, searchedMovies])

  useEffect(() => {
    const localStorageMovies = JSON.parse(localStorage.getItem('movies'));

    if (localStorageMovies) {
      setMovies(localStorageMovies);
    }

    if (!localStorageMovies && !movies.length) {
      fetchBeatMoviesAndSaveToStorage(setIsLoading, setSearchError, setMovies);
    }
  }, [movies.length]);

  useEffect(() => {
    const storageShortMoviesToggle = localStorage.getItem('shortMoviesSwitch');

    if (storageShortMoviesToggle) {
      setShortMoviesSwitch(JSON.parse(storageShortMoviesToggle));
    }
  }, []);

  useEffect(() => {
    const storageSearchQuery = localStorage.getItem('searchQuery');

    if (storageSearchQuery) {
      setSearchQuery(JSON.parse(storageSearchQuery));
    }
  }, []);

  useEffect(() => {
    const savedMoviesIds = savedMovies.map(movie => movie.movieId);

    const populatedMovies = movies.map(movie => {
      if (savedMoviesIds.includes(movie.id)) {
        const savedMovie = savedMovies.find(savedMovie => movie.id === savedMovie.movieId )

        return { ...movie, isSaved: true, _id: savedMovie._id}
      }

      return movie;
    })

    setPopulatedMovies(populatedMovies);
  }, [movies, savedMovies])

  const handleLoadMoreClick = () => {
    setRenderMoreMoviesNumber(number => number + loadMoreButtonNumber);
  }

  const handleShortMoviesToggle = (value) => {
    setShortMoviesSwitch(value);
    localStorage.setItem('shortMoviesSwitch', JSON.stringify(value));
  }

  const handleSearchQueryChange = (value) => {
    setSearchQuery(value);
    localStorage.setItem('searchQuery', JSON.stringify(value));
  }

  if (!movies.length) {
    return (
      <main className="movies">
        <Search
          movies={movies}
          setSearchedMovies={setSearchedMovies}
          shortMoviesSwitch={shortMoviesSwitch}
          handleShortMoviesToggle={handleShortMoviesToggle}
          searchQuery={searchQuery}
          handleSearchQueryChange={handleSearchQueryChange}
        />
        {isLoading && <Preloader />}
      </main>
    )
  }

  return (
    <main className="movies">
      <Search
        movies={populatedMovies}
        setSearchedMovies={setSearchedMovies}
        shortMoviesSwitch={shortMoviesSwitch}
        handleShortMoviesToggle={handleShortMoviesToggle}
        searchQuery={searchQuery}
        handleSearchQueryChange={handleSearchQueryChange}
      />
      {searchError && !isLoading && <p className="movies__error">Error. Could be a connection error. Please wait for a minute and try again.</p>}
      {isLoading && <Preloader />}

      {!searchError && !isLoading && (
        <>
          {renderMovies.length > 0 ? (
            <MovieCardList movies={renderMovies} setSavedMovies={setSavedMovies} />
          ) : (
            <p className="movies__error">Nothing found</p>
          )}
          {searchedMovies.length > 0 && renderMovies.length < searchedMovies.length && (
            <div className="movies__show-more">
              <button className="movies__show-more-button" onClick={handleLoadMoreClick}>Load more</button>
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default Movies;
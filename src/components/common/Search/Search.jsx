import './Search.css';
import { useEffect, useState } from 'react';
import { getFilteredMovies } from '../../../utils/getFilteredMovies';


const Search = ({
  movies,
  setSearchedMovies,
  shortMoviesSwitch,
  handleShortMoviesToggle,
  searchQuery,
  handleSearchQueryChange,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setSearchValue(searchQuery);
    setSearchedMovies(getFilteredMovies(movies, searchQuery, shortMoviesSwitch));
  }, [movies, searchQuery, shortMoviesSwitch, setSearchedMovies]);

  const handleShortMoviesSwitchClick = evt => {
    handleShortMoviesToggle(evt.target.checked);
  };

  const handleSearchChange = evt => {
    setSearchValue(evt.target.value);
  }

  const handleSearchSubmit = (evt) => {
    evt.preventDefault();

    setError(null);
    handleSearchQueryChange(searchValue);
    setSearchedMovies(getFilteredMovies(movies, searchValue, shortMoviesSwitch));
  }

  return (
    <section className="search">
      <form
        className="search__form"
        onSubmit={handleSearchSubmit}
      >
        <input
          type="text"
          className="search__form-input"
          placeholder="Movie name"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button type="submit" className="search_form-button" />
      </form>
      {error && <p className="search__input-error">{error}</p>}
      <div className="search__short-movie-toggle">
        <input
          id="movie-switch"
          type="checkbox"
          className="search__short-movie-switch"
          checked={shortMoviesSwitch}
          onChange={handleShortMoviesSwitchClick}
        />
        <label htmlFor="movie-switch" className="search__short-movie-label" />
        <p className="search__short-movie-text">Short movies</p>
      </div>
      <div className="search__divider" />
    </section>
  );
};

export default Search;
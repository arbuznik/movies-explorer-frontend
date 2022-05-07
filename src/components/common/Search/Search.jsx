import './Search.css';

const Search = () => {
  const handleChange = evt => {
    console.log(evt.target.checked)
  };

  return (
    <section className="search">
      <form className="search__form">
        <input type="text" className="search__form-input" placeholder="Фильм" />
        <button type="submit" className="search_form-button" />
      </form>
      <div className="search__short-movie-toggle">
        <input onChange={handleChange} id="movie-switch" type="checkbox" className="search__short-movie-switch" />
        <label htmlFor="movie-switch" className="search__short-movie-label" />
        <p className="search__short-movie-text">Короткометражки</p>
      </div>
      <div className="search__divider" />
    </section>
  );
};

export default Search;
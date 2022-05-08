import MovieCardList from '../../common/MovieCardList/MovieCardList';
import Search from '../../common/Search/Search';
import './Movies.css';

const Movies = () => {
  return (
    <main className="movies">
      <Search />
      <MovieCardList />
      <div className="movies__show-more">
        <button className="movies__show-more-button">Ещё</button>
      </div>
    </main>
  );
};

export default Movies;
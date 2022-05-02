import MovieCardList from '../../common/MovieCardList/MovieCardList';
import Search from './Search/Search';

const Movies = () => {
  return (
    <main className="movies">
      <Search />
      <MovieCardList />
    </main>
  );
};

export default Movies;
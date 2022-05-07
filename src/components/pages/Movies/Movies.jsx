import MovieCardList from '../../common/MovieCardList/MovieCardList';
import Search from '../../common/Search/Search';

const Movies = () => {
  return (
    <main className="movies">
      <Search />
      <MovieCardList />
    </main>
  );
};

export default Movies;
import MovieCardList from '../../common/MovieCardList/MovieCardList';
import Search from '../../common/Search/Search';

const SavedMovies = () => {
  return (
    <main className="movies">
      <Search />
      <MovieCardList />
    </main>
  );
};

export default SavedMovies;
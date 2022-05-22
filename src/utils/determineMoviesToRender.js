import { moviesOnResolution } from '../constants/constants';

export const determineMoviesToRender = () => {
  let currentScreenWidth = window.screen.width;
  let resolution = 480;

  if (currentScreenWidth >= 768) resolution = 768;
  if (currentScreenWidth >= 1280) resolution = 1280;

  return {
    renderMoviesNumber: moviesOnResolution[resolution].initialMovies,
    loadMoreButtonNumber: moviesOnResolution[resolution].moreMovies
  }
}
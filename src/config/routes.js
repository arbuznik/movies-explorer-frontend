const routes = {
  home: {
    title: 'Учебный проект студента факультета Веб-разработки.',
    path: '/',
  },
  movies: {
    title: 'Фильмы',
    path: '/movies',
  },
  savedMovies: {
    title: 'Сохраненные фильмы',
    path: '/saved-movies',
  },
  profile: {
    title: 'Профиль',
    path: '/profile',
  },
  register: {
    title: 'Регистрация',
    path: '/signup',
  },
  login: {
    title: 'Авторизация',
    path: '/signin',
  },
  logout: {
    title: 'Выход',
    path: '/signout',
  },
  notFound: {
    title: 'Страница не найдена',
    path: '*',
  }
}

export default routes;



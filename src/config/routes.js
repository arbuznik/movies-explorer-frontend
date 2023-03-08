const routes = {
  home: {
    title: 'Movies explorer',
    path: '/',
  },
  movies: {
    title: 'Movies',
    path: '/movies',
  },
  savedMovies: {
    title: 'Saved movies',
    path: '/saved-movies',
  },
  profile: {
    title: 'Profile',
    path: '/profile',
  },
  register: {
    title: 'Register',
    path: '/signup',
  },
  login: {
    title: 'Login',
    path: '/signin',
  },
  logout: {
    title: 'Logout',
    path: '/signout',
  },
  notFound: {
    title: 'Not found',
    path: '*',
  }
}

export default routes;



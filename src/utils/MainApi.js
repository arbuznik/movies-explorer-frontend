class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  register(userData) {
    return fetch(this._baseUrl + '/signup', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(userData)
    })
      .then(this._handleApiResponse)
  }

  login(userData) {
    return fetch(this._baseUrl + '/signin', {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify(userData)
    })
      .then(this._handleApiResponse)
  }

  logout() {
    return fetch(this._baseUrl + '/signout', {
      method: 'GET',
      credentials: 'include',
      headers: {
        ...this._headers
      },
    })
      .then(this._handleApiResponse)
  }

  getLoggedInUser() {
    return fetch(this._baseUrl + '/users/me', {
      method: 'GET',
      credentials: 'include',
      headers: {
        ...this._headers,
      },
    })
      .then(this._handleApiResponse)
  }

  updateUser(userData) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        ...this._headers,
      },
      body: JSON.stringify(userData)
    })
      .then(this._handleApiResponse)
  }

  getMovies() {
    return fetch(this._baseUrl + '/movies', {
      method: 'GET',
      credentials: 'include',
      headers: {
        ...this._headers
      },
    })
      .then(this._handleApiResponse)
  }

  saveMovie(movie) {
    return fetch(this._baseUrl + '/movies', {
      method: 'POST',
      credentials: 'include',
      headers: {
        ...this._headers
      },
      body: JSON.stringify({
        movieId: movie.id,
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      })
    })
      .then(this._handleApiResponse)
  }

  deleteMovie(movieId) {
    return fetch(this._baseUrl + '/movies/' +movieId, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        ...this._headers
      },
    })
      .then(this._handleApiResponse)
  }

  _handleApiResponse(response) {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(`Ошибка: ${response.status}`);
  }

  handleApiError(error) {
    console.log(error);
  }
}

export const mainApi = new MainApi({
  baseUrl: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json'
  }
});

// TODO: change base URL to:
// https://api.arbuznik.diploma.nomoredomains.xyz
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

  _handleApiResponse(response) {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(`Ошибка: ${response.status}`);
  }
}

export const mainApi = new MainApi({
  baseUrl: 'https://api.arbuznik.diploma.nomoredomains.xyz',
  headers: {
    'Content-Type': 'application/json'
  }
});

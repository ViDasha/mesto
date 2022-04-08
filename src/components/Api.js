export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._authorization = options.headers.authorization;
    this._contentType = options.headers["Content-Type"];
  }

  _renderResult(res) {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(this._baseUrl + '/cards', {
      headers: {
        authorization: this._authorization
      } })
      .then(this._renderResult);
  }

  getUserProfile() {
    return fetch(this._baseUrl + '/users/me', {
      headers: {
        authorization: this._authorization
      }
    })
    .then(this._renderResult);
  }

  patchUserInfo(info) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': this._contentType
      },
      body: JSON.stringify({
        name: info.name,
        about: info.about
      })
    })
    .then (this._renderResult);
  }

  postNewCard(info) {
    return fetch(this._baseUrl + '/cards', {
      method: 'POST',
      headers: {
        authorization: this._authorization,
        'Content-Type': this._contentType
      },
      body: JSON.stringify({
        name: info.name,
        link: info.link
      })
    })
    .then(this._renderResult);
  }

  deleteCard(id) {
    return fetch(this._baseUrl + '/cards/' + id, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
      }
    })
    .then (this._renderResult);
  }

  patchUserAvatar(url) {
    return fetch(this._baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': this._contentType
      },
      body: JSON.stringify({
        avatar: url
      })
    })
    .then(this._renderResult);
  }
}

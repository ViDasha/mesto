export class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.authorization = options.headers.authorization;
  }

  getInitialCards() {
    return fetch(this.baseUrl + '/cards', {
      headers: {
        authorization: this.authorization
      } })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  getUserProfile() {
    return fetch(this.baseUrl + '/users/me', {
      headers: {
        authorization: this.authorization
      }
    })
    .then (res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}

export class UserInfo {
  constructor(nameSelector, aboutSelector, avatarSelector) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  //Возвращает объект с данными пользователя
  getUserInfo() {
    return { name: this._name.textContent, about: this._about.textContent, _id: this._id };
  }

  //Принимает данные пользователя и добавляет их на страницу
  setUserInfo(info) {
    this._name.textContent = info.name;
    this._about.textContent = info.about;
    this._id = info._id;
  }

  //Принимает аватар пользователя и добавляет его на страницу
  setUserAvatar(img) {
    this._avatar.src = img;
  }
}

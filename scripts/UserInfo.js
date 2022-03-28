export class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
  }

  //Возвращает объект с данными пользователя
  getUserInfo() {
    return { name: this._name.textContent, job: this._job.textContent };
  }

  //Принимает данные пользователя и добавляет их на страницу
  setUserInfo(info) {
    this._name.textContent = info.name;
    this._job.textContent = info.job;
  }
}
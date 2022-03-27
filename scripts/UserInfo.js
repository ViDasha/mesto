export class UserInfo {
  constructor( { name, info }, rewrite) {
    this._name = name;
    this._info = info;
    this._rewrite = rewrite;
  }

  getUserInfo() {
    return { name: this._name, info: this._info };
  }

  setUserInfo() {
    this._rewrite({ name: this._name, info: this._info });
  }
}
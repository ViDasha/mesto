import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(data, popupSelector) {
    super(popupSelector);
    this._data = data;
  }

  open() {
    this._popup.querySelector('.popup__image').src = this._data.link;
    this._popup.querySelector('.popup__image').alt = this._data.name;
    this._popup.querySelector('.popup__name').textContent = this._data.name;
    super.open();
  }
}
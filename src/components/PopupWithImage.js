import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._cardImage = this._popup.querySelector('.popup__image');
    this._cardName = this._popup.querySelector('.popup__name');
  }

  open(data) {
    this._cardImage.src = data.link;
    this._cardImage.alt = data.name;
    this._cardName.textContent = data.name;
    super.open();
  }
}
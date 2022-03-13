import { imagePopupImg, namePopupImg, popupImg} from "./initialData.js";
import { openPopup } from './utils.js';

export class Card {
  constructor(data, cardSelector) {
    this._data = data;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  _handleOpenImg(evt) {
    const elementImg = evt.target;
    imagePopupImg.src = elementImg.src;
    imagePopupImg.alt = elementImg.alt;
    namePopupImg.textContent = elementImg.closest('.element').querySelector('.element__name').textContent;
    openPopup(popupImg);
  }

  _handleDoLike(evt) {
    const elementLike = evt.target;
    elementLike.classList.add('element__like_active');
  }

  _handleDeleteCard(evt) {
    const elementCard = evt.target.closest('.element');
    elementCard.remove();
  }

  _setEventListeners() {
    this._element.querySelector('.element__image').addEventListener('click', (evt) => {
      this._handleOpenImg(evt);
    });
    this._element.querySelector('.element__like').addEventListener('click', (evt) => {
      this._handleDoLike(evt);
    });
    this._element.querySelector('.element__basket').addEventListener('click', (evt) => {
      this._handleDeleteCard(evt);
    });

  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__image').src = this._data.link;
    this._element.querySelector('.element__image').alt = this._data.name;
    this._element.querySelector('.element__name').textContent = this._data.name;

    return this._element;
  }


}

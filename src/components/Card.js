export class Card {
  constructor(data, cardSelector, handleCardClick, handleCardDelete) {
    this._data = data;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleGetCardDelete = handleCardDelete;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
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
      this._handleCardClick(this._data);
    });
    this._element.querySelector('.element__like').addEventListener('click', (evt) => {
      this._handleDoLike(evt);
    });
    this._element.querySelector('.element__basket').addEventListener('click', (evt) => {
      this._handleGetCardDelete(this._data);
      this._handleDeleteCard(evt);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__image').src = this._data.link;
    this._element.querySelector('.element__image').alt = this._data.name;
    this._element.querySelector('.element__name').textContent = this._data.name;
    this._element.querySelector('.element__count-like').textContent = this._data.likes.length;

    return this._element;
  }


}

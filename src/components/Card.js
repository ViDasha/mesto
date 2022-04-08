export class Card {
  constructor(data, cardSelector, userId, handleCardClick, handleOpenFormDelete,  handleDoLike, handleDeleteLike) {
    this._data = data;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleOpenFormDelete = handleOpenFormDelete;
    this._userId = userId;
    this._handleDoLike = handleDoLike;
    this._handleDeleteLike = handleDeleteLike;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  _DoLike() {
    this._element.querySelector('.element__like').classList.add('element__like_active');
  }

  _HideLike() {
    this._element.querySelector('.element__like').classList.remove('element__like_active');
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _isLiked() {
    return this._data.likes.find((item) => item._id == this._userId);
  }

  _changeLike() {
    if (this._isLiked()) {
      this._HideLike();
      this._handleDeleteLike(this._data._id);
    } else {
      this._DoLike();
      this._handleDoLike(this._data._id);
    }
  }

  _countLikes() {
    this._element.querySelector('.element__count-like').textContent = this._data.likes.length;
  }

  _hideBasket() {
    this._element.querySelector('.element__basket').classList.add('element__basket_hide');
  }

  _setEventListeners() {
    this._element.querySelector('.element__image').addEventListener('click', (evt) => {
      this._handleCardClick(this._data);
    });
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._changeLike();
      //Здесь общий метод по поиску лайка, он вызовет внешние ручки
    });
    this._element.querySelector('.element__basket').addEventListener('click', (evt) => {
      this._handleOpenFormDelete(this._data);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__image').src = this._data.link;
    this._element.querySelector('.element__image').alt = this._data.name;
    this._element.querySelector('.element__name').textContent = this._data.name;
    //здесь тоже общий метод по поиску лайка
    if (this._isLiked()) {
      this._DoLike();
    }

    this._countLikes();

    if (this._data.owner._id != this._userId) {
      this._hideBasket();
    }
    return this._element;
  }

  updateCard(card) {
    this._data = card;
    this._countLikes();
  }
}

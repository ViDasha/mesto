export class Card {
  constructor(data, cardSelector, userId, handleCardClick, handleOpenFormDelete,  handleLike) {
    this._data = data;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleOpenFormDelete = handleOpenFormDelete;
    this._userId = userId;
    this._handleLike = handleLike;
  }

  getId() {
    return this._data._id;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  _doLike() {
    this._likeButton.classList.add('element__like_active');
  }

  _hideLike() {
    this._likeButton.classList.remove('element__like_active');
  }

  handleDeleteCard() {
    this._element.remove();
  }

  isLiked() {
    return this._data.likes.find((item) => item._id == this._userId);
  }

  _changeLike() {
    if (this.isLiked()) {
      this._doLike();
    } else {
      this._hideLike();
    }
  }

  _countLikes() {
    this._numberOfLike.textContent = this._data.likes.length;
  }

  _hideBasket() {
    this._basket.classList.add('element__basket_hide');
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', (evt) => {
      this._handleCardClick(this._data);
    });
    this._likeButton.addEventListener('click', () => {
      this._handleLike(this);
      //Здесь общий метод по поиску лайка, он вызовет внешние ручки
    });
    this._basket.addEventListener('click', (evt) => {
      this._handleOpenFormDelete(this);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.element__like');
    this._numberOfLike = this._element.querySelector('.element__count-like');
    this._cardImage = this._element.querySelector('.element__image');
    this._cardName = this._element.querySelector('.element__name');
    this._basket = this._element.querySelector('.element__basket');
    this._setEventListeners();

    this._cardImage.src = this._data.link;
    this._cardImage.alt = this._data.name;
    this._cardName.textContent = this._data.name;
  
    this._changeLike();

    this._countLikes();

    if (this._data.owner._id != this._userId) {
      this._hideBasket();
    }
    return this._element;
  }

  updateCard(card) {
    this._data = card;
    this._changeLike();
    this._countLikes();
  }
}

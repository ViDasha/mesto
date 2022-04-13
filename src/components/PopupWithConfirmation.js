import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
  }

  setEventListeners() {
    super.setEventListeners();
    //обработчик сабмита формы
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._cardDelete(this._card);
    });
  }

  changeSubmitFunction(handleCardDelete) { 
    this._cardDelete = handleCardDelete; 
  }

  open(card) {
    this._card = card;
    super.open();
  }
}

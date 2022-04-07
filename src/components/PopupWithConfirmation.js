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
      this._cardDelete(this._id);
    });
  }

  changeSubmitFunction(handleCardDelete) {
    this._cardDelete = handleCardDelete;
  }

  open(data) {
    this._id = data._id;
    super.open();
  }
}

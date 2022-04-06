import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._formSubmit = handleFormSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    //обработчик сабмита формы
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmit(this._id);
    });
  }

  open(data) {
    this._id = data._id;
    super.open();
  }
}

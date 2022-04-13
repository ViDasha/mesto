import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._formSubmit = handleFormSubmit;
    this._inputList = this._popup.querySelectorAll('.popup__item');
    this._submitButton = this._popupForm.querySelector('.popup__button-save');
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((item) => {
      this._inputValues[item.name] = item.value;
    });
    return this._inputValues;
  }

  renderLoading(textMessage) {
      this._submitButton.textContent = textMessage;
  }

  setEventListeners() {
    super.setEventListeners();
    //обработчик сабмита формы
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.renderLoading("Сохранение...");
      this._formSubmit(this._getInputValues());
    });
  }

  close() {
    //сбросить форму
    super.close();
    this._popupForm.reset();
  }
}
export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit, resetValidation) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._reset = resetValidation;
  }

  _getInputValues() {
    
  }

  setEventListeners() {
    super.setEventListeners();
    //обработчик сабмита формы
    this._popup.setEventListeners('submit', this._formSubmit);
  }

  close() {
    //сбросить форму
    this._reset;
    super.close();
  }


}
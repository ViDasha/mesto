export default class Popup {
  constructor(popupSelector) {
    this._popup = document.getElementById(popupSelector);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  }

  _handleEscClose(evt) {
    if ((evt.key === "Escape") || (evt.key === "Esc")) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      //Закрыть попап по крестику или по оверлею
      if ((evt.target.classList.contains('popup__close')) || 
      ((evt.target.classList.contains('popup__overlay')) && (evt.currentTarget.classList.contains('popup_opened')))) {
        this.close();
      }
    });
  }
}
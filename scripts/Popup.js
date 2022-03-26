export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', _handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', _handleEscClose);
  }

  _handleEscClose(evt) {
    if ((evt.key === "Escape") || (evt.key === "Esc")) {
      this.close(page.querySelector('.popup_opened'));
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
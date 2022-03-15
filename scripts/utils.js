import { page } from './initialData.js';

//Закрыть попап по кнопке ESC
function closePopupOnEsc(evt) {
  if ((evt.key === "Escape") || (evt.key === "Esc")) {
    closePopup(page.querySelector('.popup_opened'));
  }
}

//Открыть попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupOnEsc);
}

//Закрыть попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupOnEsc);
}


export { openPopup, closePopup };

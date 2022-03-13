import { initialCards, listValidationAttribute, elementTemplate, elements, page, popupEdit, popupEditForm, editButton, popupEditName, popupEditJob, popupImg, imagePopupImg, namePopupImg,
  popupAdd, popupAddForm, addButton, popupAddName, popupAddSrc, profileName, profileJob} from './initialData.js';

import { openPopup, closePopup } from './utils.js';

import { Card } from './Card.js';

//Загрузить 6 карточек формы
function loadInitialCards() {
  initialCards.forEach(item => {
    const card = new Card(item, '#element');
    const newElement = card.generateCard();
    elements.append(newElement);
  });
}

//Сбросить ошибки в spans в форме
function resetErrorList(popup) {
  const popupItems = Array.from(popup.getElementsByClassName('popup__item'));
  popupItems.forEach((item) => hideInputError(popup, item, listValidationAttribute));
}

//Отобразить форму редактирования с заполненными полями
function openPopupEdit() {
  resetErrorList(popupEdit);
  popupEditName.value = profileName.textContent;
  popupEditJob.value = profileJob.textContent;
  openPopup(popupEdit);
}

//Закрыть форму редактирования с перезаписью значений на главной
function rewriteProfile(evt) {
  evt.preventDefault();

  profileName.textContent = popupEditName.value;
  profileJob.textContent = popupEditJob.value;
  closePopup(popupEdit);
}

//Отобразить форму добавления карточки
function openPopupAdd(evt) {
  popupAddForm.reset();
  resetErrorList(popupAdd);
  toggleButtonState(Array.from(popupAddForm.querySelectorAll(listValidationAttribute.inputSelector)), popupAddForm.querySelector(listValidationAttribute.submitButtonSelector), listValidationAttribute);
  openPopup(popupAdd);
}

//Закрыть форму создания карточки с добавлением карточки в начало
function addCard(evt) {
  evt.preventDefault();
  elements.prepend(createCard({ name: popupAddName.value, link: popupAddSrc.value }));
  closePopup(popupAdd);
}

loadInitialCards();
editButton.addEventListener('click', openPopupEdit);
popupEditForm.addEventListener('submit', rewriteProfile);

addButton.addEventListener('click', openPopupAdd);
popupAddForm.addEventListener('submit', addCard);

const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    //Закрыть попап по крестику
    if (evt.target.classList.contains('popup__close')) {
        closePopup(popup);
    }
    //Закрыть попап по оверлею
    if ((evt.target.classList.contains('popup__overlay')) && (evt.currentTarget.classList.contains('popup_opened'))) {
      closePopup(popup);
    }
  })
})

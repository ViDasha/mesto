import { initialCards, listValidationAttribute, elements, popupEdit, popupEditForm, editButton, popupEditName, popupEditJob,
  popupAdd, popupAddForm, addButton, popupAddName, popupAddSrc, profileName, profileJob} from './initialData.js';

import { openPopup, closePopup } from './utils.js';

import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

//Создание карточки
function createCard(data) {
  const card = new Card(data, '#element');
  const newElement = card.generateCard();
  return newElement;
}

//Загрузить 6 карточек формы
function loadInitialCards() {
  initialCards.forEach(item => {
    const newElement = createCard(item);
    elements.append(newElement);
  });
}

//Сбросить ошибки в spans в форме
function resetErrorList(popup) {
  const popupItems = Array.from(popup.getElementsByClassName('popup__item'));
  popupItems.forEach((item) => {
    const errorElement = popup.querySelector(`.${item.id}-error`);
    item.classList.remove(listValidationAttribute.inputErrorClass);
    //Удаляем span с ошибкой
    errorElement.classList.remove(listValidationAttribute.errorClass);
    errorElement.textContent = "";
  });
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
  const buttonElement = popupAddForm.querySelector(listValidationAttribute.submitButtonSelector);
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.add(listValidationAttribute.inactiveButtonClass);
  openPopup(popupAdd);
}

//Закрыть форму создания карточки с добавлением карточки в начало
function addCard(evt) {
  evt.preventDefault();
  const newElement = createCard({ name: popupAddName.value, link: popupAddSrc.value });
  elements.prepend(newElement);
  closePopup(popupAdd);
}

//Установить валидацию всех форм
function loadValidationForms() {
  const formList = Array.from(document.querySelectorAll(listValidationAttribute.formSelector));

  formList.forEach((formElement) => {
    const formValidator = new FormValidator(listValidationAttribute, formElement);
    formValidator.enableValidation();
  });
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

loadValidationForms();

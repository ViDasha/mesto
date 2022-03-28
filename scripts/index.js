import { initialCards, listValidationAttribute, elements, popupEdit, popupEditForm, editButton, popupEditName, popupEditJob,
  popupAdd, popupAddForm, addButton, popupAddName, popupAddSrc, profileName, profileJob, imagePopupImg, namePopupImg, popupImg } from './initialData.js';

import { openPopup, closePopup } from './utils.js';

import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import Section from './Section.js';
import PopupWithForm from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';
import PopupWithImage from './PopupWithImage.js';

const formValidators = {};

//Установить валидацию всех форм
function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    const formValidator = new FormValidator(config, formElement);

    const formName = formElement.getAttribute('id');
    formValidators[formName] = formValidator;

    formValidator.enableValidation();
  });
}

//Ручка клика на карточку
function handleCardClick(data) {
  const popupWithImage = new PopupWithImage(data, 'pp-img');
  popupWithImage.setEventListeners();
  popupWithImage.open();
}

//Создание карточки
function createCard(data) {
  const card = new Card(data, '#element', handleCardClick);
  const newElement = card.generateCard();
  return newElement;
}

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    cardList.addItem(cardElement, true);
  }
}, '.elements');

cardList.renderItems();

editButton.addEventListener('click', () => {
  formValidators[ popupEditForm.getAttribute('id') ].resetValidation();
  const { name, job } = userInfo.getUserInfo();
  popupEditName.value = name;
  popupEditJob.value = job;
  popupEditProfile.open();
});

addButton.addEventListener('click', () => {
  formValidators[ popupAddForm.getAttribute('id') ].resetValidation();
  popupAddCard.open();
});

const userInfo = new UserInfo('.profile__name', '.profile__job');

const popupEditProfile = new PopupWithForm('pp-edit', (inputValues) => {
  userInfo.setUserInfo(inputValues);
  popupEditProfile.close();
});
popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm('pp-add', (inputValues) => {
  const cardElement = createCard(inputValues);
  cardList.addItem(cardElement, false);
  popupAddCard.close();
});
popupAddCard.setEventListeners();

enableValidation(listValidationAttribute);

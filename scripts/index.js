import { initialCards, listValidationAttribute, popupEditForm, editButton, popupEditName, popupEditJob, popupAddForm, addButton } from './initialData.js';

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

//Ручка генерации карточки
function handleRendererCard(item, toStart) {
  const cardElement = createCard(item);
  cardList.addItem(cardElement, toStart);
}

//Ручка добавления новой карточки
function handleSubmitAddCard(inputValues) {
  handleRendererCard(inputValues, false);
  popupAddCard.close();
}

//Ручка открытия попапа для редактирования профиля
function handleOpenEditProfile() {
  formValidators[ popupEditForm.getAttribute('id') ].resetValidation();
  const { name, job } = userInfo.getUserInfo();
  popupEditName.value = name;
  popupEditJob.value = job;
  popupEditProfile.open();
}

//Ручка открытия попапа для добавления карточки
function handleOpenAddCard() {
  formValidators[ popupAddForm.getAttribute('id') ].resetValidation();
  popupAddCard.open();
}

//Ручка сохранения изменений профиля
function handleSubmitEditProfile(inputValues) {
  userInfo.setUserInfo(inputValues);
  popupEditProfile.close();
}



//Генерация секции с карточками
const cardList = new Section({
  data: initialCards,
  renderer: handleRendererCard
}, '.elements');

cardList.renderItems();

//Класс с информацией о пользователе
const userInfo = new UserInfo('.profile__name', '.profile__job');

//Класс попапа для редактирования профиля
const popupEditProfile = new PopupWithForm('pp-edit', handleSubmitEditProfile);
popupEditProfile.setEventListeners();

//Обработчик клика на кнопку "Редактировать"
editButton.addEventListener('click', handleOpenEditProfile);

//Класс попапа для добавления карточки
const popupAddCard = new PopupWithForm('pp-add', handleSubmitAddCard);
popupAddCard.setEventListeners();

//Обработчик клика на кнопку "Добавить"
addButton.addEventListener('click', handleOpenAddCard);

//Запуск валидации всех форм
enableValidation(listValidationAttribute);

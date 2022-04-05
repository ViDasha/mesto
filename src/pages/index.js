import './index.css';

import { initialCards, listValidationAttribute, popupEditForm, editButton, popupEditName, popupEditJob, popupAddForm, addButton } from '../components/initialData.js';

import { Api } from '../components/Api.js'
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';

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
  popupWithImage.open(data);
}

//Создание карточки
function createCard(data) {
  const card = new Card(data, '#element', handleCardClick);
  const newElement = card.generateCard();
  return newElement;
}

//Ручка генерации карточки
function handleRendererCard(inputValues) {
  const cardElement = createCard(inputValues);
  cardList.addItem(cardElement, true);
}

//Ручка добавления новой карточки
function handleSubmitAddCard(inputValues) {
  const cardElement = createCard(inputValues);
  cardList.addItem(cardElement, false);
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


//Создание класса Api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    authorization: 'bf5f1893-17e0-49e0-bcb2-32090faea63d',
    'Content-Type': 'application/json'
  }
});

//Генерация секции с карточками
const cardList = new Section({
  renderer: handleRendererCard
}, '.elements');

//Загрузка карточек с сервера и отрисовка
api.getInitialCards()
  .then((result) => {
    // обрабатываем результат
    cardList.renderItems(result);
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

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

//Класс попапа для открытия изображения
const popupWithImage = new PopupWithImage('pp-img');
popupWithImage.setEventListeners();

//Запуск валидации всех форм
enableValidation(listValidationAttribute);

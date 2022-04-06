import './index.css';

import { initialCards, listValidationAttribute, popupEditForm, editButton, popupEditName, popupEditAbout, popupAddForm, addButton } from '../components/initialData.js';

import { Api } from '../components/Api.js'
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';

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

//Ручка удаления карточки
function handleCardDelete(id) {

}

//Ручка открытия попапа удаления карточки
function handleOpenFormDelete(data) {
  popupCardDelete.open(data);
}

//Создание карточки
function createCard(data) {
  const card = new Card(data, '#element', handleCardClick, handleOpenFormDelete);
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
  api.postNewCard(inputValues)
  .then((result) => {
    const cardElement = createCard({ name: result.name, link: result.link, id: result._id });
    cardList.addItem(cardElement, false);
    popupAddCard.close();
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });
}

//Ручка открытия попапа для редактирования профиля
function handleOpenEditProfile() {
  formValidators[ popupEditForm.getAttribute('id') ].resetValidation();
  const { name, about } = userInfo.getUserInfo();
  popupEditName.value = name;
  popupEditAbout.value = about;
  popupEditProfile.open();
}

//Ручка открытия попапа для добавления карточки
function handleOpenAddCard() {
  formValidators[ popupAddForm.getAttribute('id') ].resetValidation();
  popupAddCard.open();
}

//Ручка сохранения изменений профиля
function handleSubmitEditProfile(inputValues) {
  api.patchUserInfo(inputValues)
    .then((result) => {
      userInfo.setUserInfo({ name: result.name, about: result.about });
      popupEditProfile.close();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
}


//Создание класса Api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    authorization: 'bf5f1893-17e0-49e0-bcb2-32090faea63d',
    'Content-Type': 'application/json'
  }
});

//Класс с информацией о пользователе
const userInfo = new UserInfo('.profile__name', '.profile__about', '.profile__avatar');

//Получение данных пользователя и отображение на странице
api.getUserProfile()
  .then((result) => {
    userInfo.setUserInfo({ name: result.name, about: result.about });
    userInfo.setUserAvatar(result.avatar);
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
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

//Класс попапа для удаления карточки
const popupCardDelete = new PopupWithConfirmation('pp-delete', handleCardDelete);
popupCardDelete.setEventListeners();

//Запуск валидации всех форм
enableValidation(listValidationAttribute);

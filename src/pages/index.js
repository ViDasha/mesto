import './index.css';

import { listValidationAttribute, popupEditForm, editButton, popupEditName, popupEditAbout, popupAddForm, addButton, profileAvatar, popupEditAvatarForm } from '../utils/initialData.js';

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
function handleCardDelete(card) {
  api.deleteCard(card.getId())
  .then(() => {
    card.handleDeleteCard();
    popupCardDelete.close();
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });
}

//Ручка открытия попапа удаления карточки
function handleOpenFormDelete(card) {
  popupCardDelete.open(card);
  popupCardDelete.changeSubmitFunction(handleCardDelete.bind(this));
}

let methodLike = 'PUT';
//Ручка для отправки запроса на постановку/удаление лайка
function handleLike(card) {
  if (card.isLiked()) {
    methodLike = 'DELETE';
  } else {
    methodLike = 'PUT';
  }
  api.changeCardLike(card.getId(), methodLike)
  .then((result) => {
    card.updateCard(result);
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });
}

//Создание карточки
function createCard(data) {
  const card = new Card(data, '#element', userInfo.getUserInfo()._id, handleCardClick, 
                          handleOpenFormDelete, handleLike);
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
    const cardElement = createCard(result);
    cardList.addItem(cardElement, false);
    popupAddCard.close();
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  })
  .finally(() => popupAddCard.renderLoading("Создать"));
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

//Ручка открытия попапа для изменения аватара
function handleOpenEditAvatar() {
  formValidators[ popupEditAvatarForm.getAttribute('id') ].resetValidation();
  popupEditAvatar.open();
}

//Ручка сохранения изменения аватара
function handleSubmitEditAvatar(inputValues) {
  api.patchUserAvatar(inputValues.link)
  .then((result) => {
    userInfo.setUserInfo(result);
    popupEditAvatar.close();
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  })
  .finally(() => popupEditAvatar.renderLoading("Сохранить"));
}

//Ручка сохранения изменений профиля
function handleSubmitEditProfile(inputValues) {
  api.patchUserInfo(inputValues)
    .then((result) => {
      userInfo.setUserInfo(result);
      popupEditProfile.close();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() => popupEditProfile.renderLoading("Сохранить"));
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
const userInfo = new UserInfo('.profile__name', '.profile__about', '.profile__avatar-img');

//Генерация секции с карточками
const cardList = new Section({
  renderer: handleRendererCard
}, '.elements');

//Получение данных пользователя и загрузка карточек с сервера
Promise.all([api.getUserProfile(), api.getInitialCards()])
  .then(([userData, cards]) => {
      // тут установка данных пользователя
      userInfo.setUserInfo(userData);
      // и тут отрисовка карточек
      cardList.renderItems(cards);
  })
  .catch(err => {
    // тут ловим ошибку
    console.log(err); // выведем ошибку в консоль
  });

//Класс попапа для редактирования профиля
const popupEditProfile = new PopupWithForm('pp-edit', handleSubmitEditProfile);
popupEditProfile.setEventListeners();

//Обработчик клика на кнопку "Редактировать"
editButton.addEventListener('click', handleOpenEditProfile);

//Класс попапа для редактирования аватара
const popupEditAvatar = new PopupWithForm('pp-avatar', handleSubmitEditAvatar);
popupEditAvatar.setEventListeners();

//Обработчик клика на аватар
profileAvatar.addEventListener('click', handleOpenEditAvatar);

//Класс попапа для добавления карточки
const popupAddCard = new PopupWithForm('pp-add', handleSubmitAddCard);
popupAddCard.setEventListeners();

//Обработчик клика на кнопку "Добавить"
addButton.addEventListener('click', handleOpenAddCard);

//Класс попапа для открытия изображения
const popupWithImage = new PopupWithImage('pp-img');
popupWithImage.setEventListeners();

//Класс попапа для удаления карточки
const popupCardDelete = new PopupWithConfirmation('pp-delete');
popupCardDelete.setEventListeners();

//Запуск валидации всех форм
enableValidation(listValidationAttribute);

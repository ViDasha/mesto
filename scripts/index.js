import { initialCards, listValidationAttribute, elements, popupEdit, popupEditForm, editButton, popupEditName, popupEditJob,
  popupAdd, popupAddForm, addButton, popupAddName, popupAddSrc, profileName, profileJob, imagePopupImg, namePopupImg, popupImg } from './initialData.js';

import { openPopup, closePopup } from './utils.js';

import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';


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

function handleCardClick(data) {
  imagePopupImg.src = data.link;
  imagePopupImg.alt = data.name;
  namePopupImg.textContent = data.name;
  openPopup(popupImg);
}

//Создание карточки
function createCard(data) {
  const card = new Card(data, '#element', handleCardClick);
  const newElement = card.generateCard();
  return newElement;
}

//Генерация карточки
function renderCard(data, toStart) {
  const newElement = createCard(data);
  if (toStart) {
    elements.append(newElement);
  } else {
    elements.prepend(newElement);
  }
}

//Загрузить 6 карточек формы
function loadInitialCards() {
  initialCards.forEach(item => {
    renderCard(item, true);
  });
}

//Отобразить форму редактирования с заполненными полями
function openPopupEdit() {
  formValidators[ popupEditForm.getAttribute('id') ].resetValidation();
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
  formValidators[ popupAddForm.getAttribute('id') ].resetValidation();
  openPopup(popupAdd);
}

//Закрыть форму создания карточки с добавлением карточки в начало
function addCard(evt) {
  evt.preventDefault();
  renderCard({ name: popupAddName.value, link: popupAddSrc.value }, false);
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

enableValidation(listValidationAttribute);

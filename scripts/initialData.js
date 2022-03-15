const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const listValidationAttribute = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_active'
};

const elementTemplate = document.querySelector('#element').content;
const elements = document.querySelector('.elements');

const page = document.querySelector('.page');

const popupEdit = document.getElementById('pp-edit');
const popupEditForm = popupEdit.querySelector('.popup__form');
const editButton = page.querySelector('.profile__edit-button');
const popupEditName = document.getElementById('pp-edit-name');
const popupEditJob = document.getElementById('pp-edit-job');

const popupImg = document.getElementById('pp-img');
const imagePopupImg = popupImg.querySelector('.popup__image');
const namePopupImg = popupImg.querySelector('.popup__name');

const popupAdd = document.getElementById('pp-add');
const popupAddForm = popupAdd.querySelector('.popup__form');
const addButton = page.querySelector('.profile__add-button');
const popupAddName = document.getElementById('pp-add-name');
const popupAddSrc = document.getElementById('pp-add-src');

const profileName = page.querySelector('.profile__name');
const profileJob = page.querySelector('.profile__job');

export { initialCards, listValidationAttribute, elementTemplate, elements, popupEdit, popupEditForm, editButton, popupEditName, popupEditJob, popupImg, imagePopupImg, namePopupImg,
  popupAdd, popupAddForm, addButton, popupAddName, popupAddSrc, profileName, profileJob, page};

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

const page = document.querySelector('.page');

const popupEdit = document.getElementById('pp-edit');
const popupEditForm = popupEdit.querySelector('.popup__form');
const editButton = page.querySelector('.profile__edit-button');
const popupEditName = document.getElementById('pp-edit-name');
const popupEditAbout = document.getElementById('pp-edit-about');

const popupAdd = document.getElementById('pp-add');
const popupAddForm = popupAdd.querySelector('.popup__form');
const addButton = page.querySelector('.profile__add-button');



export { initialCards, listValidationAttribute, popupEdit, popupEditForm, editButton, popupEditName, popupEditAbout,
  popupAdd, popupAddForm, addButton, page};

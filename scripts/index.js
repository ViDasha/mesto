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

//Загрузить 6 карточек формы
function loadInitialCards() {
  initialCards.forEach(item => {
    const newElement = createCard(item);
    elements.append(newElement);
  });
}

//Создать карточку
function createCard(card) {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__image').src = card.link;
  element.querySelector('.element__image').alt = card.name;
  element.querySelector('.element__name').textContent = card.name;
  element.querySelector('.element__image').addEventListener('click', openImg);
  element.querySelector('.element__like').addEventListener('click', doLike);
  element.querySelector('.element__basket').addEventListener('click', deleteCard);
  return element;
}

//Поставить лайк
function doLike(evt) {
  const elementLike = evt.target;
  elementLike.classList.add('element__like_active');
}

//Удалить карточку
function deleteCard(evt) {
  const elementCard = evt.target.closest('.element');
  elementCard.remove();
}

//Сбросить ошибки в spans в форме
function resetErrorList(popup) {
  const popupItems = Array.from(popup.getElementsByClassName('popup__item'));
  popupItems.forEach((item) => hideInputError(popup, item, listValidationAttribute));
}

//Открыть изображение на весь экран
function openImg(evt) {
  const elementImg = evt.target;
  imagePopupImg.src = elementImg.src;
  imagePopupImg.alt = elementImg.alt;
  namePopupImg.textContent = elementImg.closest('.element').querySelector('.element__name').textContent;
  openPopup(popupImg);
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
function openPopupAdd() {
  popupAddForm.reset();
  resetErrorList(popupAdd);
  openPopup(popupAdd);
}

//Закрыть форму создания карточки с добавлением карточки в начало
function addCard(evt) {
  evt.preventDefault();

  elements.prepend(createCard({ name: popupAddName.value, link: popupAddSrc.value }));
  closePopup(popupAdd);
}

//Закрыть попап по кнопке ESC
function closePopupOnEsc(evt) {
  if ((evt.key === "Escape") || (evt.key === "Esc")) {
    closePopup(page.querySelector('.popup_opened'));
  }
}

//Открыть попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupOnEsc);
}

//Закрыть попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupOnEsc);
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

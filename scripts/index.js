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

const elementTemplate = document.querySelector('#element').content;
const elements = document.querySelector('.elements');

const page = document.querySelector('.page');

const popupEdit = document.getElementById('pp-edit');
const popupEditForm = popupEdit.querySelector('.popup__form');
const editButton = page.querySelector('.profile__edit-button');
const closeButtonEditForm = popupEdit.querySelector('.popup__close');
const popupEditName = document.getElementById('pp-edit-name');
const popupEditJob = document.getElementById('pp-edit-job');

const popupImg = document.getElementById('pp-img');
const imagePopupImg = popupImg.querySelector('.popup__image');
const namePopupImg = popupImg.querySelector('.popup__name');
const closeButtonPopupImg = popupImg.querySelector('.popup__close');

const popupAdd = document.getElementById('pp-add');
const popupAddForm = popupAdd.querySelector('.popup__form');
const addButton = page.querySelector('.profile__add-button');
const closeButtonAddForm = popupAdd.querySelector('.popup__close');
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

//Открыть изображение на весь экран
function openImg(evt) {
  const elementImg = evt.target;
  imagePopupImg.src = elementImg.src;
  imagePopupImg.alt = elementImg.alt;
  namePopupImg.textContent = elementImg.closest('.element').querySelector('.element__name').textContent;
  popupImg.classList.add('popup_opened');
}

//Закрыть изображение
function closePopupImg() {
  popupImg.classList.remove('popup_opened');
}

//Отобразить форму редактирования с заполненными полями
function openPopupEdit() {
  popupEditName.value = profileName.textContent;
  popupEditJob.value = profileJob.textContent;

  popupEdit.classList.add('popup_opened');
}

//Закрыть форму редактирования
function closePopupEdit() {
  popupEdit.classList.remove('popup_opened');
}

//Закрыть форму редактирования с перезаписью значений на главной
function rewriteProfile(evt) {
  evt.preventDefault();

  profileName.textContent = popupEditName.value;
  profileJob.textContent = popupEditJob.value;
  closePopupEdit();
}

//Отобразить форму добавления карточки
function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
}

//Закрыть форму создания карточек
function closePopupAdd() {
  popupAdd.classList.remove('popup_opened');
}

//Закрыть форму создания карточки с добавлением карточки в начало
function addCard(evt) {
  evt.preventDefault();

  const newCard = {
    name: popupAddName.value,
    link: popupAddSrc.value
  };
  const cardElement = createCard(newCard);
  elements.prepend(cardElement);
  closePopupAdd();
}

loadInitialCards();
editButton.addEventListener('click', openPopupEdit);
closeButtonEditForm.addEventListener('click', closePopupEdit);
popupEditForm.addEventListener('submit', rewriteProfile);

addButton.addEventListener('click', openPopupAdd);
closeButtonAddForm.addEventListener('click', closePopupAdd);
popupAddForm.addEventListener('submit', addCard);

closeButtonPopupImg.addEventListener('click', closePopupImg);
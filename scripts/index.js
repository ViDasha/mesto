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

const page = document.querySelector('.page');
const popup = page.querySelector('.popup');
const popupForm = page.querySelector('.popup__form');
const elementTemplate = document.querySelector('#element').content;
const elements = document.querySelector('.elements');

let editButton = page.querySelector('.profile__edit-button');
let closeButton = page.querySelector('.popup__close');

let profileName = page.querySelector('.profile__name');
let profileJob = page.querySelector('.profile__job');
let popupName = document.getElementById('pp-name');
let popupJob = document.getElementById('pp-job');

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
  element.querySelector('.element__like').addEventListener('click', function () {
    element.querySelector('.element__like').classList.add('element__like_active');
  });
  return element;
}

//Отобразить форму с заполненными полями
function openPopup() {
  popupName.value = profileName.textContent;
  popupJob.value = profileJob.textContent;

  popup.classList.add('popup_opened');
}

//Закрыть форму
function closePopup() {
  popup.classList.remove('popup_opened');
}

//Закрыть форму с перезаписью значений на главной
function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = popupName.value;
  profileJob.textContent = popupJob.value;
  closePopup();
}

loadInitialCards();
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', formSubmitHandler);

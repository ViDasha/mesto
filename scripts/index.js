let content = document.querySelector('.content');
let popup = content.querySelector('.popup');
let popupForm = content.querySelector('.popup__form');

let editButton = content.querySelector('.profile__edit-button');
let closeButton = content.querySelector('.popup__close');

//Отобразить форму с заполненными полями
function popupOpen() {
  let name = document.querySelector('.profile__name');
  let description = document.querySelector('.profile__description');
  let popupName = document.querySelector('.popup__name');
  let popupDesc = document.querySelector('.popup__description');

  popupName.value = name.textContent;
  popupDesc.value = description.textContent;

  popup.classList.add('popup_opened');
}

//Закрыть форму
function popupClose() {
  popup.classList.remove('popup_opened');
}

//Закрыть форму с перезаписью значений на главной
function formSubmitHandler (evt) {
  evt.preventDefault();

  let popupName = document.querySelector('.popup__name');
  let popupDesc = document.querySelector('.popup__description');
  let name = document.querySelector('.profile__name');
  let description = document.querySelector('.profile__description');

  name.textContent = popupName.value;
  description.textContent = popupDesc.value;
  popupClose();
}

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
popupForm.addEventListener('submit', formSubmitHandler);
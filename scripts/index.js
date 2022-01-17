let content = document.querySelector('.content');
let popup = content.querySelector('.popup');
let popupForm = content.querySelector('.popup__form');

let editButton = content.querySelector('.profile__edit-button');
let closeButton = content.querySelector('.popup__close');

//Отобразить форму с заполненными полями
function popupOpen() {
  let name = document.querySelector('.profile__name');
  let job = document.querySelector('.profile__job');
  let popupName = document.querySelector('.popup__name');
  let popupDesc = document.querySelector('.popup__description');

  popupName.value = name.textContent;
  popupDesc.value = job.textContent;

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
  let job = document.querySelector('.profile__job');

  name.textContent = popupName.value;
  job.textContent = popupDesc.value;
  popupClose();
}

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
popupForm.addEventListener('submit', formSubmitHandler);

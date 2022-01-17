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
  let popupJob = document.querySelector('.popup__job');

  popupName.value = name.textContent;
  popupJob.value = job.textContent;

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
  let popupJob = document.querySelector('.popup__job');
  let name = document.querySelector('.profile__name');
  let job = document.querySelector('.profile__job');

  name.textContent = popupName.value;
  job.textContent = popupJob.value;
  popupClose();
}

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
popupForm.addEventListener('submit', formSubmitHandler);

let page = document.querySelector('.page');
let popup = page.querySelector('.popup');
let popupForm = page.querySelector('.popup__form');

let editButton = page.querySelector('.profile__edit-button');
let closeButton = page.querySelector('.popup__close');

let profileName = page.querySelector('.profile__name');
let profileJob = page.querySelector('.profile__job');
let popupName = document.getElementById('pp-name');
let popupJob = document.getElementById('pp-job');

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

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', formSubmitHandler);

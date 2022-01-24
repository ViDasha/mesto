let page = document.querySelector('.page');
let popup = page.querySelector('.popup');
let popupForm = page.querySelector('.popup__form');

let editButton = page.querySelector('.profile__edit-button');
let closeButton = page.querySelector('.popup__close');

let namePr = page.querySelector('.profile__name');
let job = page.querySelector('.profile__job');
let popupName = document.getElementById('pp-name');
let popupJob = document.getElementById('pp-job');

//Отобразить форму с заполненными полями
function popupOpen() {
  popupName.value = namePr.textContent;
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

  namePr.textContent = popupName.value;
  job.textContent = popupJob.value;
  popupClose();
}

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
popupForm.addEventListener('submit', formSubmitHandler);

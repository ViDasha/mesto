let content = document.querySelector('.content');
let popup = content.querySelector('.popup');
let popupForm = content.querySelector('.popup__form');
let popupName = content.querySelector('.popup__name');
let popupDesc = content.querySelector('.popup__description');

let editButton = content.querySelector('.profile__edit-button');
let closeButton = content.querySelector('.popup__close');

function popupOpen() {
  let name = content.querySelector('.profile__name');
  let description = content.querySelector('.profile__description');

  popup.classList.add('popup_opened');

  popupName.setAttribute('value', name.textContent);
  popupDesc.setAttribute('value', description.textContent);
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
    popupClose();
}

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
popupForm.addEventListener('submit', formSubmitHandler);
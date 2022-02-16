const formInput = popupEditForm.querySelector('.popup__item');
const formError = popupEditForm.querySelector(`.${formInput.id}-error`);
    
  // Функция, которая добавляет класс с ошибкой
const showInputError = (element, errorMessage) => {
  element.classList.add('popup__item_type_error');
      // Заменим содержимое span с ошибкой на переданный параметр
  formError.textContent = errorMessage;
  formError.classList.add('popup__item-error_active');
};
  
  // Функция, которая удаляет класс с ошибкой
const hideInputError = (element) => {
  element.classList.remove('popup__item_type_error');
  //Удаляем span с ошибкой
  formError.classList.remove('popup__item-error_active');
  formError.textContent = "";
};
  
  // Функция, которая проверяет валидность поля
const isValid = () => {
  if (!formInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formInput, formInput.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(formInput);
  }
};

popupEditForm.addEventListener('submit', function (evt) {
    // Отменим стандартное поведение
  evt.preventDefault();
});
    
  // Слушатель события input
formInput.addEventListener('input', isValid);

 /*function enableValidation(popup, {
    formSelector: '.popup__form',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__item_type_error',
    errorClass: 'popup__error_visible'
  }) {};
  */
  // Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__item_type_error');
  // Заменим содержимое span с ошибкой на переданный параметр
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__item-error_active');
};
  
  // Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__item_type_error');
  //Удаляем span с ошибкой
  errorElement.classList.remove('popup__item-error_active');
  errorElement.textContent = "";
};
  
  // Функция, которая проверяет валидность поля
const isValid = (formElement, formInput) => {
  if (!formInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formElement, formInput, formInput.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(formElement, formInput);
  }
};

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся фунцкция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  })
}; 

const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add('popup__button-save_inactive');
  } else {
    // иначе сделай кнопку активной
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove('popup__button-save_inactive');
  }
}; 

popupEditForm.addEventListener('submit', function (evt) {
    // Отменим стандартное поведение
  evt.preventDefault();
});

const setEventListeners = (formElement) => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = Array.from(formElement.querySelectorAll('.popup__item'));
    const buttonElement = formElement.querySelector('.popup__button-save');

    toggleButtonState(inputList, buttonElement);
    // Обойдём все элементы полученной коллекции
    inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        isValid(formElement, inputElement)

        toggleButtonState(inputList, buttonElement);
      });
    });
  }; 

  /*setEventListeners(popupEditForm);*/

  const enableValidation = () => {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll('.popup__form'));
  
    // Переберём полученную коллекцию
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        // У каждой формы отменим стандартное поведение
        evt.preventDefault();
      });
  
      // Для каждой формы вызовем функцию setEventListeners,
      // передав ей элемент формы
      setEventListeners(formElement);
    });
  };

  enableValidation();
 /*function enableValidation(popup, {
    formSelector: '.popup__form',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__item_type_error',
    errorClass: 'popup__error_visible'
  }) {};
  */


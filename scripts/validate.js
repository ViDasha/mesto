import { listValidationAttribute } from './initialData.js';

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, listAttribute) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(listAttribute.inputErrorClass);
  // Заменим содержимое span с ошибкой на переданный параметр
  errorElement.textContent = errorMessage;
  errorElement.classList.add(listAttribute.errorClass);
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, listAttribute) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(listAttribute.inputErrorClass);
  //Удаляем span с ошибкой
  errorElement.classList.remove(listAttribute.errorClass);
  errorElement.textContent = "";
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, formInput, listAttribute) => {
  if (!formInput.validity.valid) {
    showInputError(formElement, formInput, formInput.validationMessage, listAttribute);
  } else {
    hideInputError(formElement, formInput, listAttribute);
  }
};

// Функция проверяет, есть ли невалидное поле в инпутах
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {

    return !inputElement.validity.valid;
  })
};

// Функция, которая переключает состояние кнопки
const toggleButtonState = (inputList, buttonElement, listAttribute) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(listAttribute.inactiveButtonClass);
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(listAttribute.inactiveButtonClass);
  }
};

//Функция, которая устанавливает слушатели для всех инпутов формы
const setEventListeners = (formElement, listAttribute) => {
  const inputList = Array.from(formElement.querySelectorAll(listAttribute.inputSelector));
  const buttonElement = formElement.querySelector(listAttribute.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, listAttribute);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, listAttribute)

      toggleButtonState(inputList, buttonElement, listAttribute);
    });
  });
};

//Функция, которая включает валидацию всех форм
const enableValidation = (listAttribute) => {
  const formList = Array.from(document.querySelectorAll(listAttribute.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, listAttribute);
  });
};

enableValidation(listValidationAttribute);


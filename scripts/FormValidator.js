export class FormValidator {
  constructor(listValidationAttribute, formElement) {
    this._listAttribute = listValidationAttribute;
    this._formElement = formElement;
  }

    // Функция, которая добавляет класс с ошибкой
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._listAttribute.inputErrorClass);
    // Заменим содержимое span с ошибкой на переданный параметр
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._listAttribute.errorClass);
  };

  // Функция, которая удаляет класс с ошибкой
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._listAttribute.inputErrorClass);
    //Удаляем span с ошибкой
    errorElement.classList.remove(this._listAttribute.errorClass);
    errorElement.textContent = "";
  };

  // Функция, которая проверяет валидность поля
  _isValid(formInput) {
    if (!formInput.validity.valid) {
      this._showInputError(formInput, formInput.validationMessage);
    } else {
      this._hideInputError(formInput);
    }
  };

// Функция проверяет, есть ли невалидное поле в инпутах
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  // Функция, которая переключает состояние кнопки
  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(this._listAttribute.inactiveButtonClass);
    } else {
      buttonElement.removeAttribute('disabled');
      buttonElement.classList.remove(this._listAttribute.inactiveButtonClass);
    }
  };

  //Функция, которая устанавливает слушатели для всех инпутов формы
  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._listAttribute.inputSelector));
    const buttonElement = this._formElement.querySelector(this._listAttribute.submitButtonSelector);

    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);

        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  //Функция устанавливает валидацию одной формы
  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }
}

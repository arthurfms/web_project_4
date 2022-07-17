class Validation {
  constructor(formSelectors, formElement) {
    this._formElement = formElement;
    this._formSelector = formSelectors.formSelector;
    this._inputSelector = formSelectors.inputSelector;
    this._submitButtonSelector = formSelectors.submitButtonSelector;
    this._inactiveButtonClass = formSelectors.inactiveButtonClass;
    this._inputErrorClass = formSelectors.inputErrorClass;
    this._errorClass = formSelectors.errorClass;
  }

  setEventListeners() {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
    this._toggleSubmitButton();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleSubmitButton();
      });
    });
  }

  _toggleSubmitButton() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
  }
}

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((formElement) => {
    const formSelectors = {
      formSelector: ".form",
      inputSelector: ".form__input",
      submitButtonSelector: ".form__submit",
      inactiveButtonClass: "form__submit_inactive",
      inputErrorClass: "form__input_type_error",
      errorClass: "form__input_type_error_active",
    };

    const newForm = new Validation(formSelectors, formElement);
    newForm.setEventListeners(formElement);
  });
};
export { enableValidation };

import Popup from "./Popup.js";
import FormValidator from "./FormValidator.js";
import { formSelectors } from "../utils/utils.js";

class PopupWithForms extends Popup {
  constructor({ selector, sending }) {
    super(selector);
    this._form = document
      .querySelector(`.${this._selector}`)
      .querySelector(".form");
    this._inputs = {};
    this._closeButton = document
      .querySelector(`.${this._selector}`)
      .querySelector(".popup__close-button");
    this._sendButton = this._form.querySelector(".form__submit");
    this._sending = sending;
  }
  _getInputValues() {
    this._inputsList.forEach((input) => {
      const inputName = input.id;
      this._inputs[`${inputName}`] = input.value;
    });
    return this._inputs;
  }
  _cleanInputsValues() {
    this._inputsList.forEach((input) => {
      input.value = "";
    });
  }
  open() {
    this._inputsList = this._form.querySelectorAll(".form__input");
    const newForm = new FormValidator(formSelectors, this._form);
    newForm.setEventListeners();
    this._popup.classList.add("popup_opened");
  }
  close() {
    document.removeEventListener("keyup", this.boundHandleEscClose);
    this._popup.removeEventListener("click", this.boundHandleClickOut);
    this._sendButton.removeEventListener("click", this.boundAdding);
    this._closeButton.removeEventListener("click", this.boundClose);
    this._sendButton.removeEventListener("click", this.boundAdding);
    this._popup.classList.remove("popup_opened");
    this._cleanInputsValues();
  }

  _adding(evt) {
    evt.preventDefault();
    this._sending();
  }
  _handleEnter(evt) {
    if (
      evt.key == "Enter" &&
      this._sendButton.classList.contains("form__submit_inactive")
    ) {
      evt.preventDefault();
    }
  }
  _handleClickOut(evt) {
    if (evt.target.classList.contains("popup_opened")) {
      this.close();
    }
  }

  setEventListeners() {
    this.boundClose = this.close.bind(this);
    this.boundHandleEscClose = this._handleEscClose.bind(this);
    this.boundHandleClickOut = this._handleClickOut.bind(this);
    this.boundAdding = this._adding.bind(this);
    this.boundHandleEnter = this._handleEnter.bind(this);

    document.addEventListener("keyup", this.boundHandleEscClose);
    this._popup.addEventListener("click", this.boundHandleClickOut);
    this._closeButton.addEventListener("click", this.boundClose);
    this._sendButton.addEventListener("click", this.boundAdding);
    document.addEventListener("keydown", this.boundHandleEnter);
  }
}
export { PopupWithForms };

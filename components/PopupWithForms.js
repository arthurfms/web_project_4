import Popup from "./Popup.js";

class PopupWithForms extends Popup {
  constructor({ selector, sending }) {
    super._selector;
    this._form = document.querySelector(this._selector);
    this._inputsList = this._form.querySelectorAll(".form__input");
    this._inputs = {};
    this._closeButton = this._form.querySelector(".popup__close-button");
    this._sending = sending;
  }
  _getInputValues() {
    this._inputsList.forEach((input) => {
      const inputName = input.id;
      this._inputs.inputName = input.value;
    });
  }
  close() {
    this._sending();
    this._inputsList.forEach((input) => {
      input.value = "";
    });
    super.close();
  }
  setEventListeners() {
    super.setEventListeners();
    this._closeButton.addEventListeners("click", this.close);
  }
}
export { PopupWithForms };

import Popup from "./Popup.js";

class PopupWithForms extends Popup {
  constructor({ selector, sending }) {
    super(selector);
    this._form = document.querySelector(`.${this._selector}`).querySelector(".form");
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
    return this._inputs;
  }
  open() {
    this._popup.classList.add("popup_opened");
  }
  close() {
    this._sending(this._inputsList);
    this._inputsList.forEach((input) => {
      input.value = "";
    });
    console.log("CLOSE");
    this._popup.classList.remove("popup_opened");
  }
  setEventListeners() {
    document.addEventListener("keyup", (evt) => {
      this._handleEscClose(evt);
      console.log(evt.key);
    });
    this._popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.close();
      }
    });
    this._closeButton.addEventListener("click", () => {
      this.close();
    })
  }

}
export { PopupWithForms };

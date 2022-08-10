export default class Popup {
  constructor(selector) {
    this._selector = selector;
    this._popup = document.querySelector(selector);
  }

  open() {
    this._popup.classList.add(`${this._selector}_opened`);
  }

  close() {
    this._popup.classList.remove(`${this._selector}_opened`);
  }

  _handleEscClose(evt) {
    if (evt.key == "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener("keyup", this._handleEscClose);
    this._popup.addEventListener("click", function (evt) {
      if (evt.target.classList[1] == "popup_opened") {
        this.close();
      }
    });
  }
}

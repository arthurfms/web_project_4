import Popup from "./Popup";

class PopupWithForm extends Popup {
  constructor(selector, send) {
    this._selector = selector;
    this._form = document.querySelector(selector);
  }
  _getInputValues() {
    this._inputs = [document.querySelector(this._selector).querySelectorAll("inpunt")[0],document.querySelector(this._selector).querySelectorAll("inpunt")[1]];
    return this._inputs;    
  }
  setEventListeners() {
    super.setEventListeners();
  }
  close() {}
}

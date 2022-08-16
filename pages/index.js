import { PopupWithForms } from "../components/PopupWithForms.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { FormValidator } from "../components/FormValidator.js";

export const cards = [
  {
    name: "Vale de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },

  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },

  {
    name: "Montanhas Carecas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },

  {
    name: "Parque Nacional da Vanoise ",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const editUserButton = document.querySelector(".info__edit-button");
const addUserButton = document.querySelector(".add-button");
export const ImagePopup = new PopupWithImage("image-popup");

const AddForm = new PopupWithForms({
  selector: "popup_card",
  sending: (intemsList) => {
    console.log("DONE");
  },
});

const cardSection = new Section(
  {
    items: cards,
    renderer: (item) => {
        const card = new Card(item, "#card__template", {
          handleCardClick: () => {
            card.addEventListener("click", () => {
              ImagePopup.open(card._link, card._title);
            });
          },
        });
        cardSection.addItem(card.generateCard());
    },
  },
  ".elements"
);

cardSection.renderItems();

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

  const newForm = new FormValidator(formSelectors, formElement);

  newForm.setEventListeners(formElement);
});

editUserButton.addEventListener("click", () => {
  const UserForm = new PopupWithForms({
    selector: "popup_user",
    sending: (list) => {
      list.forEach((input) => {
        input.value = "";
      });
    },
  });
  UserForm.open();
  UserForm.setEventListeners();
});

addUserButton.addEventListener("click", () => {
  AddForm.open();
});
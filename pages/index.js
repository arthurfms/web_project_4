import { PopupWithForms } from "../components/PopupWithForms.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { FormValidator } from "../components/FormValidator.js";
import "../utils/utils.js";

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

const ImagePopup = new PopupWithImage(".image-popup");
const UserForm = new PopupWithForms({
  selector: ".popup_user",
  sending: () => {},
});

const cardSection = new Section(
  {
    items: cards,
    renderer: (items) => {
      items.forEach((item) => {
        const card = new Card(item, "#card__template", {
          handleCardClick: () => {
            card.addEventListener("click", () => {
              ImagePopup.open(card._link, card._title);
            });
          },
        });
      });
    },
  },
  ".elements"
);

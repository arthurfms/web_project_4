import { openPopup } from "./utils.js";

class Card {
  constructor(data, cardSelector) {
    this._title = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
    this._isLiked = false;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._setImage();
    this._setTitle();

    return this._element;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _setImage() {
    const image = this._element.querySelector(".card__image");
    image.src = this._image;
    image.alt = this._title;
  }

  _setTitle() {
    this._element.querySelector(".card__title").textContent = this._title;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLike();
      });

    this._element
      .querySelector(".card__trash-icon")
      .addEventListener("click", () => {
        this._deleteCard();
      });

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        const popupImage = document.querySelector(".image-popup");
        const popupImg = popupImage.querySelector(".image-popup__image");
        const popupSubtitle = popupImage.querySelector(
          ".image-popup__subtitle"
        );

        popupImg.src = this._image;
        popupImg.alt = this._title;
        popupSubtitle.textContent = this._title;
        openPopup(popupImage);
      });
  }

  _handleLike() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");

    this._isLiked = !this._isLiked;
  }
  _deleteCard() {
    this._element.remove();
  }
}

const cards = [
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

cards.forEach((item) => {
  createCard(item, "#card__template", "append");
});

function createCard(card, cardSelector, preOrAppend) {
  const cardItem = new Card(card, cardSelector);
  const tempCard = cardItem.generateCard();

  preOrAppend = "prepend"
    ? document.querySelector(".elements").prepend(tempCard)
    : document.querySelector(".elements").append(tempCard);
}

export { Card, cards, createCard };
/*
class Card {
  constructor(data, cardSelector) {
    this._text = data.text;
    this._image = data.image;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".card__avatar").src = this._image;
    this._element.querySelector(".card__paragraph").textContent = this._text;

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector(".card__text").addEventListener("click", () => {
      this._handleMessageClick();
    });
  }

  _handleMessageClick() {
    this._element
      .querySelector(".card__text")
      .classList.toggle("card__text_is-active");
  }
}

messageList.forEach((item) => {
  const card = new Card(item, ".card-template_type_default");
  const cardElement = card.generateCard();

  document.body.append(cardElement);
});
*/

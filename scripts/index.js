import { FormValidator } from "./validate.js"; 

import { Card } from "./cards.js"; 

import "./utils.js"; 

 

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

   

  cards.forEach((item) => { 

    createCard(item, "#card__template"); 

  }); 

   

  export function createCard(card, cardSelector) { 

    const cardItem = new Card(card, cardSelector); 

    const newCard = cardItem.generateCard(); 

   

    document.querySelector(".elements").prepend(newCard); 

  }
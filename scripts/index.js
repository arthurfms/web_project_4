// Vamos descobrir o formulário no DOM
const editFormElement = document.querySelectorAll(".form__submit")[0];
const addFormElement = document.querySelectorAll(".form__submit")[1];

let nameInput = document.querySelectorAll(".form__input")[0];
let jobInput = document.querySelectorAll(".form__input")[1];
const infoName = document.querySelector(".info__name");
const infoJob = document.querySelector(".info__job");
const titleInput = document.querySelectorAll(".form__input")[2];
const imageInput = document.querySelectorAll(".form__input")[3];

nameInput.value = infoName.textContent;
jobInput.value = infoJob.textContent;

// CARDS
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

// Em seguida vem o handler do submit
// ainda não vai enviar para lugara nenhum

// Observe que o nome da função começa com um verbo
// e descreve exatamente o que a função faz
function handleProfileFormSubmit(evt) {
  // Esta linha impede o navegador
  // de enviar o formulário da forma padrão.
  evt.preventDefault();
  // Fazendo isso, podemos definir nossa própria forma de enviar o formulário.
  // Explicaremos em mais detalhes posteriormente.

  // Vamos encontrar os campos de formulário do DOM

  // Selecione elementos onde os valores de campo serão inseridos

  if (nameInput.value != "") {
    infoName.textContent = nameInput.value;
  }
  if (jobInput.value != "") {
    infoJob.textContent = jobInput.value;
  }
  handleClosing();
  // Insira novos valores usando textContent
  // propriedade do método querySelector()
}

editFormElement.addEventListener("click", handleProfileFormSubmit);

function handleAddFormSubmit(evt) {
  evt.preventDefault();

  const cardTitle = titleInput.value;
  const cardImage = imageInput.value;
  cards.unshift({ name: cardTitle, link: cardImage });

  generateCard(cardTitle, cardImage);
  titleInput.value = "";
  imageInput.value = "";
  handleClosing();
}

const cardTemplate = document.querySelector("#card__template").content;
const cardsElements = document.querySelector(".elements");
const popupImage = document.querySelector(".image-popup");

function generateCard(name, link) {
  const newCard = cardTemplate.querySelector(".card").cloneNode(true);

  newCard.querySelector(".card__image").src = link;
  newCard.querySelector(".card__image").alt = name;
  newCard.querySelector(".card__title").textContent = name;
  cardsElements.prepend(newCard);

  newCard
    .querySelector(".card__like-button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__like-button_active");
    });

  newCard
    .querySelector(".card__trash-icon")
    .addEventListener("click", function () {
      newCard.remove();
    });

  newCard.querySelector(".card__image").addEventListener("click", function () {
    document.querySelector(".image-popup__image").src = link;
    document.querySelector(".image-popup__image").alt = name;
    document.querySelector(".image-popup__subtitle").textContent = name;
    openPopup(popupImage);
  });
}

cards.forEach((item, index) => {
  generateCard(
    cards[cards.length - index - 1].name,
    cards[cards.length - index - 1].link
  );
});

addFormElement.addEventListener("click", handleAddFormSubmit);

const editButton = document.querySelector(".info__edit-button");
const addButton = document.querySelector(".add-button");
const editPopup = document.querySelectorAll(".popup")[0];
const addPopup = document.querySelectorAll(".popup")[1];

function openPopup(openItem) {
  if (
    openItem.parentElement.classList[0] == "info__edit-button" ||
    openItem.classList[0] == "info__edit-button"
  ) {
    editPopup.classList.add("popup_opened");
    nameInput.value = infoName.textContent;
    jobInput.value = infoJob.textContent;
    activePopup = editPopup;
    document
      .querySelector(".popup_opened")
      .querySelector(".popup__close-button")
      .addEventListener("click", handleClosing);
  } else if (
    openItem.parentElement.classList[0] == "add-button" ||
    openItem.classList[0] == "add-button"
  ) {
    addPopup.classList.add("popup_opened");
    activePopup = editPopup;
    document
      .querySelector(".popup_opened")
      .querySelector(".popup__close-button")
      .addEventListener("click", handleClosing);
  } else {
    activePopup = popupImage;
    popupImage.classList.add("image-popup_opened");
    document
      .querySelector(".image-popup_opened")
      .querySelector(".image-popup__close-button")
      .addEventListener("click", handleClosing);
  }

  document.addEventListener("keyup", escClick);
  document.addEventListener("click", targetingCloseEvent);
}

[editButton, addButton].forEach(function (item) {
  item.addEventListener("click", function (evt) {
    const tgt = evt.target;
    openPopup(tgt);
  });
});

function escClick(evt) {
  if (evt.key == "Escape") {
    handleClosing();
  }
}

function handleClosing() {
  const opened = document.querySelector(".image-popup_opened")
    ? document.querySelector(".image-popup_opened")
    : document.querySelector(".popup_opened").querySelector(".form")
        .firstElementChild.textContent;

  if (opened == "Editar perfil") {
    document
      .querySelector(".popup_opened")
      .querySelector(".popup__close-button")
      .removeEventListener("click", handleClosing);
    editPopup.classList.remove("popup_opened");
    nameInput.value = infoName.textContent;
    jobInput.value = infoJob.textContent;
    document.removeEventListener("keyup", escClick);
    document.removeEventListener("click", targetingCloseEvent);
  } else if (opened == "Novo Local") {
    document
      .querySelector(".popup_opened")
      .querySelector(".popup__close-button")
      .removeEventListener("click", handleClosing);
    addPopup.classList.remove("popup_opened");
    titleInput.value = "";
    imageInput.value = "";
    document.removeEventListener("keyup", escClick);
    document.removeEventListener("click", targetingCloseEvent);
  } else {
    document
      .querySelector(".image-popup_opened")
      .querySelector(".image-popup__close-button")
      .removeEventListener("click", handleClosing);
    popupImage.classList.remove("image-popup_opened");
    document.removeEventListener("keyup", escClick);
    document.removeEventListener("click", targetingCloseEvent);
  }
}

function targetingCloseEvent(evt) {
  const opened = document.querySelector(".image-popup_opened")
    ? document.querySelector(".image-popup_opened")
    : document.querySelector(".popup_opened");

  if (
    evt.target.classList[1] == "popup_opened" ||
    evt.target.classList[1] == "image-popup_opened"
  ) {
    handleClosing();
  }
}

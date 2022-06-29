// Vamos descobrir o formulário no DOM
const editFormElement = document.querySelectorAll(".form__submit")[0];
const addFormElement = document.querySelectorAll(".form__submit")[1];

const nameInput = document.querySelectorAll(".form__input")[0];
const jobInput = document.querySelectorAll(".form__input")[1];
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

  setCard(newCard, name, link);
  cardsElements.prepend(newCard);
  handleLikeButton(newCard);
  handleDeleteButton(newCard);
  handleImageOpen(newCard, name, link);
}

function setCard(card, name, link) {
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;
}

function handleLikeButton(card) {
  card
    .querySelector(".card__like-button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__like-button_active");
    });
}

function handleDeleteButton(card) {
  card
    .querySelector(".card__trash-icon")
    .addEventListener("click", function () {
      card.remove();
    });
}

function handleImageOpen(card, name, link) {
  card.querySelector(".card__image").addEventListener("click", function () {
    const popupImg = document.querySelector(".image-popup__image");
    const popupSubtitle = document.querySelector(".image-popup__subtitle");

    popupImg.src = link;
    popupImg.alt = name;
    popupSubtitle.textContent = name;
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
let activatedPopup;

function openPopup(openItem) {
  activatedPopup = identifyPopup(openItem);

  if (activatedPopup == "editPopup") {
    openEditPopup();
  } else if (activatedPopup == "addPopup") {
    openAddPopup();
  } else if (activatedPopup == "imagePopup") {
    openImagePopup();
  }

  setOpenningEvents();
}

function identifyPopup(openItem) {
  const parent = openItem.parentElement.classList[0];
  const item = openItem.classList[0];
  if (parent == "info__edit-button" || item == "info__edit-button") {
    return "editPopup";
  } else if (parent == "add-button" || item == "add-button") {
    return "addPopup";
  } else {
    return "imagePopup";
  }
}

function openEditPopup() {
  editPopup.classList.add("popup_opened");
  nameInput.value = infoName.textContent;
  jobInput.value = infoJob.textContent;
  document
    .querySelector(".popup_opened")
    .querySelector(".popup__close-button")
    .addEventListener("click", handleClosing);
}

function openAddPopup() {
  addPopup.classList.add("popup_opened");
  document
    .querySelector(".popup_opened")
    .querySelector(".popup__close-button")
    .addEventListener("click", handleClosing);
}

function openImagePopup() {
  popupImage.classList.add("image-popup_opened");
  document
    .querySelector(".image-popup_opened")
    .querySelector(".image-popup__close-button")
    .addEventListener("click", handleClosing);
}

function setOpenningEvents() {
  document.addEventListener("keyup", escClick);
  document.addEventListener("mousedown", targetingCloseEvent);
}

[editButton, addButton].forEach(setEditAddButton);

function setEditAddButton(button) {
  button.addEventListener("click", function (evt) {
    const tgt = evt.target;
    openPopup(tgt);
  });
}

function escClick(evt) {
  if (evt.key == "Escape") {
    handleClosing();
  }
}

function handleClosing() {
  removeCloseListener();
  if (activatedPopup == "editPopup") {
    handleClosingEdit();
  } else if (activatedPopup == "addPopup") {
    handleClosingAdd();
  } else if (activatedPopup == "imagePopup") {
    handleClosingImage();
  }
}

function removeCloseListener() {
  if (activatedPopup == "editPopup" || activatedPopup == "addPopup") {
    document
      .querySelector(".popup_opened")
      .querySelector(".popup__close-button")
      .removeEventListener("click", handleClosing);
  } else if (activatedPopup == "imagePopup") {
    document
      .querySelector(".image-popup_opened")
      .querySelector(".image-popup__close-button")
      .removeEventListener("click", handleClosing);
  }

  document.removeEventListener("keyup", escClick);
  document.removeEventListener("mousedown", targetingCloseEvent);
}

function handleClosingEdit() {
  editPopup.classList.remove("popup_opened");
  nameInput.value = infoName.textContent;
  jobInput.value = infoJob.textContent;
}

function handleClosingAdd() {
  addPopup.classList.remove("popup_opened");
  titleInput.value = "";
  imageInput.value = "";
}

function handleClosingImage() {
  popupImage.classList.remove("image-popup_opened");
}

function targetingCloseEvent(evt) {
  if (
    evt.target.classList[1] == "popup_opened" ||
    evt.target.classList[1] == "image-popup_opened"
  ) {
    handleClosing();
  }
}

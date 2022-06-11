// Vamos descobrir o formulário no DOM
const editFormElement = document.querySelectorAll(".form__save-button")[0];
const addFormElement = document.querySelectorAll(".form__save-button")[1];

let nameInput = document.querySelector(".form__field-name");
let jobInput = document.querySelector(".form__field-job");
const infoName = document.querySelector(".info__name");
const infoJob = document.querySelector(".info__job");
const titleInput = document.querySelector(".form__field-title");
const imageInput = document.querySelector(".form__field-image");

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
  closePopUp();
  // Insira novos valores usando textContent
  // propriedade do método querySelector()
}

editFormElement.addEventListener("click", handleProfileFormSubmit);

function handleAddFormSubmit(evt) {
  evt.preventDefault();

  let cardTitle = titleInput.value;
  let cardImage = imageInput.value;
  cards.unshift({ name: cardTitle, link: cardImage });

  cardGenerate(cardTitle, cardImage);
  titleInput.value = "";
  imageInput.value = "";
  closePopUp();
}

const cardTemplate = document.querySelector("#card__template").content;
const cardsElements = document.querySelector(".elements");
const popupImage = document.querySelectorAll(".popup")[2];

function cardGenerate(name, link) {
  const newCard = cardTemplate.querySelector(".card").cloneNode(true);

  newCard.querySelector(".card__image").src = link;
  newCard.querySelector(".card__title").textContent = name;
  cardsElements.prepend(newCard);

  newCard
    .querySelector(".card__like-button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__like-button_active");
    });

  newCard
    .querySelector(".card__trash-icon")
    .addEventListener("click", function (evt) {
      newCard.remove();
    });

  newCard.querySelector(".card__image").addEventListener("click", function () {
    document.querySelector(".popup__image").src = link;
    document.querySelector(".popup__image").alt = name;
    document.querySelector(".popup__subtitle").textContent = name;
    let imgPopup = document.querySelectorAll(".popup")[2];
    imgPopup.classList.add("popup_opened");
  });
}

cards.forEach((item, index) => {
  cardGenerate(
    cards[cards.length - index - 1].name,
    cards[cards.length - index - 1].link
  );
});

addFormElement.addEventListener("click", handleAddFormSubmit);

let editButton = document.querySelector(".info__edit-button");
let addButton = document.querySelector(".add-button");
let editPopup = document.querySelectorAll(".popup")[0];
let addPopup = document.querySelectorAll(".popup")[1];
let popupCloseButton = document.querySelectorAll(".popup__close-button");

function openPopUp(openItem) {
  if (
    openItem.parentElement.classList[0] == "info__edit-button" ||
    openItem.classList[0] == "info__edit-button"
  ) {
    editPopup.classList.add("popup_opened");
    nameInput.value = infoName.textContent;
    jobInput.value = infoJob.textContent;
  } else if (
    openItem.parentElement.classList[0] == "add-button" ||
    openItem.classList[0] == "add-button"
  ) {
    addPopup.classList.add("popup_opened");
    nameInput.value = infoName.textContent;
    jobInput.value = infoJob.textContent;
  }
}

function closePopUp() {
  editPopup.classList.remove("popup_opened");
  nameInput.value = infoName.textContent;
  jobInput.value = infoJob.textContent;
  addPopup.classList.remove("popup_opened");
  titleInput.value = "";
  imageInput.value = "";
  popupImage.classList.remove("popup_opened");
}

editButton.addEventListener("click", function (evt) {
  let tgt = evt.target;
  openPopUp(tgt);
});

addButton.addEventListener("click", function (evt) {
  let tgt = evt.target;
  openPopUp(tgt);
});

popupCloseButton.forEach(function (item) {
  item.addEventListener("click", closePopUp);
});

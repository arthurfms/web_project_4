

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

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  if (nameInput.value != "") {
    infoName.textContent = nameInput.value;
  }

  if (jobInput.value != "") {
    infoJob.textContent = jobInput.value;
  }

  handleClosing();
}

editFormElement.addEventListener("click", handleProfileFormSubmit);

function handleAddFormSubmit(evt) {
  evt.preventDefault();

  const cardTitle = titleInput.value;

  const cardImage = imageInput.value;

  const cardToAdd = { name: cardTitle, link: cardImage };

  cards.unshift(cardToAdd);

  createCard(cardToAdd, "#card__template");

  titleInput.value = "";

  imageInput.value = "";

  handleClosing();
}

const popupImage = document.querySelector(".image-popup");

addFormElement.addEventListener("click", handleAddFormSubmit);

const editButton = document.querySelector(".info__edit-button");

const addButton = document.querySelector(".add-button");

const editPopup = document.querySelectorAll(".popup")[0];

const addPopup = document.querySelectorAll(".popup")[1];

let activatedPopup;

export function openPopup(openItem) {
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
  const parentItemClass = openItem.parentElement.classList[0];

  const itemClass = openItem.classList[0];

  if (
    parentItemClass == "info__edit-button" ||
    itemClass == "info__edit-button"
  ) {
    return "editPopup";
  } else if (parentItemClass == "add-button" || itemClass == "add-button") {
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
    closeEditPopup();
  } else if (activatedPopup == "addPopup") {
    closeAddPopup();
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

function closeEditPopup() {
  editPopup.classList.remove("popup_opened");

  editEditPopup();
}

function editEditPopup() {
  nameInput.value = infoName.textContent;

  jobInput.value = infoJob.textContent;
}

function closeAddPopup() {
  addPopup.classList.remove("popup_opened");

  cleanAddPopup();
}

function cleanAddPopup() {
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
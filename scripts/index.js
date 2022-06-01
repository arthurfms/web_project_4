// Vamos descobrir o formulário no DOM
const formElement = document.querySelector(".form__save-button");

let nameInput = document.querySelector(".form__field-name");
let jobInput = document.querySelector(".form__field-job");
const infoName = document.querySelector(".info__name");
const infoJob = document.querySelector(".info__job");
nameInput.value = infoName.textContent;
jobInput.value = infoJob.textContent;

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
  // Insira novos valores usando textContent
  // propriedade do método querySelector()
}

// Conecte o handler ao formulário:
// ele vai observar o evento de submit
formElement.addEventListener("click", handleProfileFormSubmit);

let editButton = document.querySelector(".info__edit-button");
let popup = document.querySelector(".popup");
let popupCloseButton = document.querySelector(".popup__close-button");

function openPopUp() {
  popup.classList.add("popup_opened");
  nameInput.value = infoName.textContent;
  jobInput.value = infoJob.textContent;
}

function closePopUp() {
  popup.classList.remove("popup_opened");
  nameInput.value = infoName.textContent;
  jobInput.value = infoJob.textContent;
}

editButton.addEventListener("click", openPopUp);
popupCloseButton.addEventListener("click", closePopUp);

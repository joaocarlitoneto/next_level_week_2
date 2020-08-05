// Procurar o botão -> Até o (#add-time) // Quando clica no botão desde o .addEventListener
document.querySelector("#add-time").addEventListener("click", cloneField);

// Executar uma ação
function cloneField() {
  // Duplicar os campos. Quais campos?
  const newFieldsContainer = document
    .querySelector(".schedule-item")
    .cloneNode(true);
  // Pegar os campos. Quais campos?
  const fields = newFieldsContainer.querySelectorAll("input");
  // Para cada campo, limpar
  fields.forEach(function (field) {
    // Pegar o field atual e limpa ele
    field.value = "";
  });
  // Colocar na página. Onde?
  document.querySelector("#schedule-items").appendChild(newFieldsContainer);
}

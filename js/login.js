const login = document.getElementById("formLogin");

login.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const localizacao = document.getElementById("localizacao").value;

  if (email === "" || telefone === "" || localizacao === "") {
    alert("Preencha todos os campos!");
    return;
  }

  window.location.href = "/index.html";
});

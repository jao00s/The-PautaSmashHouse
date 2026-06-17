const cadastro = document.getElementById("formCadastro");

cadastro.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;

  if (!nome || !email || !telefone || !senha || !confirmarSenha) {
    alert("Preencha todos os campos!");
    return;
  }
  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html";
});

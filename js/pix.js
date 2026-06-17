document.addEventListener("DOMContentLoaded", () => {
  const total = localStorage.getItem("totalPedido") || 0;

  document.getElementById("valorPix").textContent =
    `R$ ${parseFloat(total).toFixed(2).replace(".", ",")}`;
});

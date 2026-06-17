const total = Number(localStorage.getItem("totalPedido")) || 0;

document.getElementById("valor-pagamento").textContent =
  "R$ " + total.toFixed(2).replace(".", ",");

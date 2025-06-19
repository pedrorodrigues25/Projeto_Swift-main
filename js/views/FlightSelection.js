document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".select-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // Impede o link de ir diretamente sem guardar

      const flightData = JSON.parse(localStorage.getItem("selectedFlight"));

      if (!flightData) {
        alert("No flight data found!");
        return;
      }

      // Redirecionar para o checkout
      window.location.href = "/html/checkout.html";
    });
  });
});
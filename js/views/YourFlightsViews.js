import { getUserLogged, isLogged } from "/js/models/UserModel.js";

document.addEventListener("DOMContentLoaded", () => {
  if (!isLogged()) {
    window.location.href = "/html/login.html";
    return;
  }

  const user = getUserLogged();
  const flightsKey = `flights_${user.username}`;
  const savedFlights = JSON.parse(localStorage.getItem(flightsKey)) || [];

  const flightsContainer = document.getElementById("flights-container");

  if (savedFlights.length === 0) {
    flightsContainer.innerHTML = "<p>No flights booked yet.</p>";
    return;
  }

  savedFlights.forEach(flight => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${flight.destination}</td>
      <td>${flight.travelClass}</td>
      <td>${flight.departure}</td>
      <td>${flight.arrival}</td>
      <td>${flight.travelers} people</td>
      <td>${flight.tourismType}</td>
    `;
    flightsContainer.appendChild(row);
  });
});
import { getUserLogged } from '/js/models/UserModel.js';

document.addEventListener("DOMContentLoaded", () => {
  const user = getUserLogged();
  const container = document.getElementById("destinations-container");

  if (!user.likedDestinations || user.likedDestinations.length === 0) {
    container.innerHTML = "<p>No destinations liked yet.</p>";
    return;
  }

  user.likedDestinations.forEach(dest => {
    const card = document.createElement("div");
    card.classList.add("liked-card");

    card.innerHTML = `
      <h3>${dest.destination}</h3>
      <p><strong>Departure:</strong> ${dest.departure}</p>
      <p><strong>Arrival:</strong> ${dest.arrival}</p>
      <p><strong>Class:</strong> ${dest.travelClass}</p>
      <p><strong>Tourism:</strong> ${dest.tourismType}</p>
    `;

    container.appendChild(card);
  });
});

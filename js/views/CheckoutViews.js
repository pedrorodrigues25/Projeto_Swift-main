import { isLogged, getUserLogged } from '/js/models/UserModel.js';

document.addEventListener("DOMContentLoaded", () => {
  let data = JSON.parse(localStorage.getItem("selectedFlight"));

  const params = new URLSearchParams(window.location.search);
  if (params.has("destination")) {
    data = {
      destination: params.get("destination") || "Unknown",
      departure: params.get("departure") || "Not selected",
      arrival: params.get("arrival") || "Not selected",
      travelers: params.get("travelers") || "Not defined",
      travelClass: params.get("class") || "Economy",
      tourismType: params.get("turismo") || "Not specified",
    };
    localStorage.setItem("selectedFlight", JSON.stringify(data));
  }

  if (!data) return;

  const { destination, departure, arrival, travelers, travelClass, tourismType } = data;

  document.getElementById("checkout-destination").textContent = destination;
  document.getElementById("checkout-departure").textContent = departure;
  document.getElementById("checkout-arrival").textContent = arrival;
  document.getElementById("checkout-travelers").textContent = travelers;
  document.getElementById("checkout-class").textContent = travelClass;
  document.getElementById("checkout-tourism").textContent = tourismType;

  const destinationData = {
    Paris: {
      image: "/assets/img/paris.png",
      description: "Romantic city with famous landmarks like the Eiffel Tower and the Louvre.",
    },
    Rome: {
      image: "/assets/img/rome.png",
      description: "Historical city full of ancient monuments and delicious food.",
    },
    London: {
      image: "/assets/img/london.png",
      description: "Vibrant capital with rich history and modern attractions.",
    },
    Barcelona: {
      image: "/assets/img/barcelona.png",
      description: "Coastal city with Gaudí architecture and sunny beaches.",
    },
  };

  const d = destinationData[destination] || {
    image: "/assets/img/default.png",
    description: "No detailed information available for this destination.",
  };

  const preview = document.getElementById("checkout-preview");
  if (preview) {
    preview.innerHTML = `
      <img src="${d.image}" alt="${destination} image">
      <p>${d.description}</p>
    `;
  }

  const confirmBtn = document.querySelector(".confirm-btn");

  confirmBtn.addEventListener("click", () => {
    if (!isLogged()) {
      alert("You must be logged in to confirm your booking. Redirecting to login...");
      window.location.href = "/html/login.html";
      return;
    }

    const user = getUserLogged();
    console.log("Booking confirmed for:", user.username);

    const flightsKey = `flights_${user.username}`;
    const existingFlights = JSON.parse(localStorage.getItem(flightsKey)) || [];

    existingFlights.push(data); // `data` já contém os dados do voo atual

    localStorage.setItem(flightsKey, JSON.stringify(existingFlights));

    alert("Booking confirmed!");

    // Redireciona para a home
    window.location.href = "/html/home.html";
  });
});


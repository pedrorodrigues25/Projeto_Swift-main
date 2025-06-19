// Obter dados da URL ou localStorage
let params = new URLSearchParams(window.location.search);

let destination = params.get("destination");
let departure = params.get("departure");
let arrival = params.get("arrival");
let travelers = params.get("travelers");
let travelClass = params.get("class");
let tourismType = params.get("turismo");

// Se não houver dados na URL, usar do localStorage
if (!destination || !departure || !arrival) {
  const saved = JSON.parse(localStorage.getItem("selectedFlight"));

  if (saved) {
    destination = saved.destination || "Unknown";
    departure = saved.departure || "Not selected";
    arrival = saved.arrival || "Not selected";
    travelers = saved.travelers || "Not defined";
    travelClass = saved.travelClass || "Economy";
    tourismType = saved.tourismType || "Not specified";
  }
}

// Guardar no localStorage para usar noutras páginas
const selectedFlight = {
  destination,
  departure,
  arrival,
  travelers,
  travelClass,
  tourismType,
};
localStorage.setItem("selectedFlight", JSON.stringify(selectedFlight));

// Preencher o conteúdo da página
document.getElementById("destination-name").textContent = destination;
document.getElementById("departure-date").textContent = departure;
document.getElementById("arrival-date").textContent = arrival;
document.getElementById("travelers-count").textContent = travelers;
document.getElementById("travel-class").textContent = travelClass;
document.getElementById("tourism-type").textContent = tourismType;

document.getElementById("destination-title").textContent = `Your trip to ${destination}`;

// (Opcional) Mostrar imagem e descrição específicas
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

const card = document.getElementById("destination-card");

if (destinationData[destination]) {
  card.querySelector("img").src = destinationData[destination].image;
  card.querySelector("p").textContent = destinationData[destination].description;
} else {
  card.querySelector("img").src = "/assets/img/default.png";
  card.querySelector("p").textContent = "No additional information available for this destination.";
}

// Botão de like (guardar destino como favorito)
const likeButton = document.getElementById("likeDestinationBtn");

likeButton.addEventListener("click", () => {
  const user = JSON.parse(sessionStorage.getItem("loggedUser"));

  if (!user) {
    alert("You need to be logged in to like a destination.");
    return;
  }

  if (!user.likedDestinations) {
    user.likedDestinations = [];
  }

  // Evitar duplicados
  const alreadyLiked = user.likedDestinations.some((d) => d.destination === destination);
  if (alreadyLiked) {
    alert("You already liked this destination.");
    return;
  }

  // Adiciona o destino aos favoritos
  user.likedDestinations.push({
    destination,
    departure,
    arrival,
    travelClass,
    tourismType,
  });

  // Atualiza o sessionStorage
  sessionStorage.setItem("loggedUser", JSON.stringify(user));

  // Atualiza também no localStorage (para persistência futura)
  const allUsers = JSON.parse(localStorage.getItem("users")) || [];
  const index = allUsers.findIndex((u) => u.username === user.username);
  if (index !== -1) {
    allUsers[index] = user;
    localStorage.setItem("users", JSON.stringify(allUsers));
  }

  alert(`Destination "${destination}" added to your liked destinations!`);

  
});

const quizzes = JSON.parse(localStorage.getItem('quizzes')) || {};

if (quizzes[destination] && quizzes[destination].length > 0) {
  const btn = document.getElementById('playQuizBtn');
  btn.classList.remove('hidden');
  btn.href = `/html/playQuizz.html?country=${encodeURIComponent(destination)}`;
}




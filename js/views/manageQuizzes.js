function loadDestinationsFromMainPage() {
  // Pode vir de localStorage, de uma API ou ser hardcoded se não estiver disponível diretamente
  const container = document.createElement("div");

  // Simulamos um HTML com os botões como na homepage
  container.innerHTML = `
    <div>
      <div class="destination-option" data-destination="Paris"></div>
      <div class="destination-option" data-destination="London"></div>
      <div class="destination-option" data-destination="Rome"></div>
      <div class="destination-option" data-destination="Barcelona"></div>
      <div class="destination-option" data-destination="New York"></div>
    </div>
  `;

  const destinations = Array.from(container.querySelectorAll(".destination-option"))
    .map(el => el.getAttribute("data-destination"));

  const select = document.getElementById("destination");
  destinations.forEach(dest => {
    const option = document.createElement("option");
    option.value = dest;
    option.textContent = dest;
    select.appendChild(option);
  });
}


document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const destination = document.getElementById("destination").value.trim();
  const question = document.getElementById("question").value.trim();
  const correctAnswer = document.getElementById("correctAnswer").value.trim();
  const wrongAnswers = Array.from(document.querySelectorAll(".wrong")).map(input => input.value.trim());

  if (!destination || !question || !correctAnswer || wrongAnswers.length === 0) return;

  const quizData = JSON.parse(localStorage.getItem("quizzes")) || {};

  if (!quizData[destination]) {
    quizData[destination] = [];
  }

  quizData[destination].push({
    question,
    correctAnswer,
    wrongAnswers
  });

  localStorage.setItem("quizzes", JSON.stringify(quizData));

  alert("Quiz added successfully!");

  this.reset();
  renderQuizList();
});


document.addEventListener("DOMContentLoaded", () => {
  loadDestinationsFromMainPage(); 
  renderQuizList(); // Se já existia no teu código
});

function renderQuizList() {
  const quizList = document.getElementById("quizList");
  const quizData = JSON.parse(localStorage.getItem("quizzes")) || {};

  quizList.innerHTML = Object.entries(quizData).map(([country, quizzes]) => `
    <div class="mb-4">
      <h2 class="font-bold text-lg">${country}</h2>
      <ul class="list-disc ml-6">
        ${quizzes.map(q => `<li>${q.question}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

document.addEventListener("DOMContentLoaded", renderQuizList);
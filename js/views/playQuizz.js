import { getUserLogged, isLogged, init } from '/js/models/UserModel.js';

document.addEventListener("DOMContentLoaded", () => {
  init();

  if (!isLogged()) {
    alert("You need to be logged in to play the quiz!");
    window.location.href = "/html/login.html";
    return;
  }

  const user = getUserLogged();

  const params = new URLSearchParams(window.location.search);
  const country = params.get("country");
  const allQuizzes = JSON.parse(localStorage.getItem("quizzes")) || {};
  const quizzes = allQuizzes[country] || [];

  let current = 0;
  let score = 0;

  function renderQuestion() {
    const q = quizzes[current];
    const answers = [...q.wrongAnswers, q.correctAnswer].sort(() => Math.random() - 0.5);
    const container = document.getElementById("quizContainer");

    container.innerHTML = `
      <h2 class="text-xl font-bold mb-4">${q.question}</h2>
      <div class="space-y-2">
        ${answers
          .map(
            (ans) =>
              `<button class="answer bg-white border border-gray-400 w-full p-2 rounded hover:bg-blue-100">${ans}</button>`
          )
          .join("")}
      </div>
    `;

    

    document.querySelectorAll(".answer").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.textContent === q.correctAnswer) score++;
        current++;
        if (current < quizzes.length) {
          renderQuestion();
        } else {
          container.innerHTML = `<h2 class="text-2xl font-bold">Done! Your score: ${score} / ${quizzes.length}</h2>`;
          if (!user.quizzes) user.quizzes = [];

user.quizzes.push({
  country: country,
  score: score,
  total: quizzes.length,
  date: new Date().toLocaleDateString("pt-PT")
});

localStorage.setItem("loggedUser", JSON.stringify(user));

// atualizar também na lista geral de utilizadores
const users = JSON.parse(localStorage.getItem("users")) || [];
const idx = users.findIndex(u => u.email === user.email);
if (idx !== -1) {
  users[idx] = user;
  localStorage.setItem("users", JSON.stringify(users));
}
        }
      });
    });
  }

  if (quizzes.length > 0) {
    renderQuestion();
  } else {
    document.getElementById("quizContainer").innerHTML = `<p>No quizzes found for ${country}.</p>`;
  }
});

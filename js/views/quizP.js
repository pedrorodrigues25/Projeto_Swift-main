import { getUserLogged, isLogged } from "/js/models/UserModel.js";

document.addEventListener("DOMContentLoaded", () => {
  if (!isLogged()) {
    alert("You must be logged in to see your quiz history.");
    window.location.href = "/html/login.html";
    return;
  }

  const user = getUserLogged();
  const container = document.getElementById("quizHistory");

  if (!user.quizzes || user.quizzes.length === 0) {
    container.innerHTML = "<p>You haven't completed any quizzes yet.</p>";
    return;
  }

  user.quizzes.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "bg-white p-4 rounded shadow";
    div.innerHTML = `
      <h2 class="font-semibold">#${i + 1} – ${q.country}</h2>
      <p>Score: ${q.score} / ${q.total}</p>
      <p>Date: ${q.date}</p>
    `;
    container.appendChild(div);
  });
});

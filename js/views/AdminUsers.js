document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("tbody");
  const searchInput = document.querySelector(".search-box input");

  const users = JSON.parse(localStorage.getItem("users")) || [];

  function renderUsers(filter = "") {
    tbody.innerHTML = "";

    const filteredUsers = users.filter((user) =>
      (user.username && user.username.toLowerCase().includes(filter.toLowerCase())) ||
      (user.email && user.email.toLowerCase().includes(filter.toLowerCase())) ||
      (user.userId && user.userId.toLowerCase().includes(filter.toLowerCase()))
    );

    filteredUsers.forEach((user, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.username || '-'} ${user.suspended ? '<span style="color:red;">(Suspended)</span>' : ''}</td>
        <td>${user.userId || '-'}</td>
        <td>${user.email || '-'}</td>
        <td><a href="#" class="details-btn" data-index="${index}">Details</a></td>
      `;
      tbody.appendChild(row);
    });

    document.querySelectorAll(".details-btn").forEach((btn) =>
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const user = users[btn.dataset.index];
        openUserModal(user);
      })
    );
  }

  renderUsers();

  searchInput.addEventListener("input", () => {
    renderUsers(searchInput.value);
  });

  const modal = document.getElementById("userModal");
  const closeModal = document.querySelector(".close-modal");

  function openUserModal(user) {
  document.getElementById("modalName").textContent = user.username || "-";
  document.getElementById("modalId").textContent = user.userId || "-";
  document.getElementById("modalEmail").textContent = user.email || "-";
  document.getElementById("modalMiles").textContent = user.miles || "0";
  document.getElementById("modalQuizzes").textContent = user.quizzes?.length || "0";

  // Idade
  if (user.birthDate) {
    const [day, month, year] = user.birthDate.split("-");
    const formattedDate = `${year}-${month}-${day}`;
    const birth = new Date(formattedDate);

    if (!isNaN(birth)) {
      const today = new Date();
      let age = today.getFullYear() - birth.getFullYear();
      const m = today.getMonth() - birth.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
      }
      document.getElementById("modalAge").textContent = `${age} years old`;
    } else {
      document.getElementById("modalAge").textContent = "-";
    }
  } else {
    document.getElementById("modalAge").textContent = "-";
  }

  // Data de criação
  if (user.createdAt) {
    const date = new Date(user.createdAt);
    document.getElementById("modalJoined").textContent =
      `on ${date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })}`;
  } else {
    document.getElementById("modalJoined").textContent = "-";
  }

  // Ativar botões
  const suspendBtn = document.querySelector(".suspend-btn");
  const removeBtn = document.querySelector(".remove-btn");

  // Remover event listeners anteriores
  suspendBtn.replaceWith(suspendBtn.cloneNode(true));
  removeBtn.replaceWith(removeBtn.cloneNode(true));

  const newSuspendBtn = document.querySelector(".suspend-btn");
  const newRemoveBtn = document.querySelector(".remove-btn");

  // Suspender (exemplo simples, marca como suspenso)
  newSuspendBtn.textContent = user.suspended ? "Reactivate" : "Suspend";

newSuspendBtn.addEventListener("click", () => {
  user.suspended = !user.suspended; // inverte o estado (true → false, false → true)

  localStorage.setItem("users", JSON.stringify(users));

  alert(
    user.suspended
      ? `User "${user.username}" has been suspended.`
      : `User "${user.username}" has been reactivated.`
  );

  modal.classList.add("hidden");
  renderUsers(); // para atualizar o texto na tabela se quiseres
});

  // Remover
  newRemoveBtn.addEventListener("click", () => {
    if (confirm(`Are you sure you want to remove "${user.username}"?`)) {
      const index = users.findIndex(u => u.userId === user.userId);
      if (index !== -1) {
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
        renderUsers();
        modal.classList.add("hidden");
      }
    }
  });

  modal.classList.remove("hidden");
}

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
});

import { logout } from '/js/models/UserModel.js';

document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logoutTopBtn');

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      logout();
      window.location.href = '/html/login.html';
    });
  }
});


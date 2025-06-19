import * as userModel from '/js/models/UserModel.js';

document.addEventListener('DOMContentLoaded', () => {
  userModel.init();

  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    try {
      const success = userModel.login(username, password);
      if (success) {
        if (username === 'admin123' && password === 'admin') {
          alert('Login de administrador! Redirecionando para o painel de administração 🛠️');
          window.location.href = '/html/admin/adminDashboard.html';
        } else {
          alert('Login succeeded! Redirecting to home ✈️');
          window.location.href = '/html/home.html';
        }
      }
    } catch (error) {
      alert(error.message);
    }
  });

  document.querySelector('.close-btn').onclick = function () {
    window.location.href = '/index.html';
  };
});

let users;

// Inicializar utilizadores da LocalStorage
export function init() {
  users = JSON.parse(localStorage.getItem('users')) || [];

  // Verifica   se o admin existe; se não, adiciona-o
  const adminExists = users.some(user => user.username === 'admin123');
  if (!adminExists) {
    users.push({
      username: 'admin123',
      password: 'admin',
      role: 'admin',
      suspended: false
    });
    localStorage.setItem('users', JSON.stringify(users));
  }
}

// Adicionar novo utilizador
export function add(userId, username, password,  email, coverPhoto = '', birthDate = '', phoneNumber = '', defaultPaymentMethod = '', gender = '', quizzes = []) {
  if (users.some((user) => user.username === username)) {
    throw Error(`User with username "${username}" already exists!`);
  }
  if (users.some((user) => user.email === email)) {
  throw Error(`User with email "${email}" already exists!`);
}

  users.push(new User(userId, username, password, email, coverPhoto, birthDate, phoneNumber, defaultPaymentMethod, gender, quizzes, new Date().toISOString()));
  localStorage.setItem("users", JSON.stringify(users));
}

// Login do utilizador
export function login(usernameOrEmail, password) {
  const user = users.find(
    (user) =>
      (user.username === usernameOrEmail || user.email === usernameOrEmail) &&
      user.password === password
  );

  if (!user) {
    throw Error("Invalid login!");
  }

  if (user.suspended) {
    throw Error("This account is suspended.");
  }

  sessionStorage.setItem("loggedUser", JSON.stringify(user));
  return true;
}

// Logout
export function logout() {
  sessionStorage.removeItem("loggedUser");
}

// Verifica se alguém está autenticado
export function isLogged() {
  return sessionStorage.getItem("loggedUser") ? true : false;
}

// Devolve o utilizador autenticado
export function getUserLogged() {
  return JSON.parse(sessionStorage.getItem("loggedUser"));
}

class User {
  userId = "";
  username = "";
  password = "";
  email = "";
  coverPhoto = "";
  birthDate = "";
  phoneNumber = "";
  defaultPaymentMethod = "";
  gender = "";
  reviews = []
  createdAt = "";
  quizzes = [
  {
    idQuiz: "",
    correctAnswers: "",
    quizMiles: ""
  }
];

  constructor(userId, username, password, email, coverPhoto, birthDate, phoneNumber, defaultPaymentMethod, gender, quizzes, createdAt) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.email = email;
    this.coverPhoto = coverPhoto;
    this.birthDate = birthDate;
    this.phoneNumber = phoneNumber;
    this.defaultPaymentMethod = defaultPaymentMethod;
    this.gender = gender;
    this.quizzes = quizzes;
    this.createdAt = createdAt;
  }
}



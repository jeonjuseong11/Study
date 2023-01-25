const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const hello = document.querySelector("#hello");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintHello(username);
}
function paintHello(username) {
  hello.innerText = `안녕하세요 ${username}님`;
  hello.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintHello(savedUsername);
}

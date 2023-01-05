const clock = document.querySelector("h1#clock");

clock.innerText = "00:00:00";

function getCLock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getCLock();
setInterval(getCLock, 1000);

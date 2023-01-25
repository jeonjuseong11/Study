const bttn = document.getElementById("bttn");
const noti_box = document.querySelector("#noti-box");
bttn.addEventListener("click", () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("noti");
  newDiv.innerText = "알림 내용이 표시됩니다.";
  noti_box.appendChild(newDiv);

  setTimeout(() => {
    newDiv.remove();
  }, 3000);
});

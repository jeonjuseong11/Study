const result = document.querySelector("#result");
const button = document.querySelector("button");
const usernum = document.querySelector("#user-number");
button.addEventListener("click", () => {
  let input = usernum.value;
  try {
    result.innerHTML = `<p>${input}</p>`;
    if (input === "" || isNaN(input)) {
      throw "숫자를 입력하세요";
    } else if (input > 10) {
      throw "10보다 작은수를 입력해주세요.";
    } else {
      result.innerText = input;
    }
  } catch (error) {
    alert(error);
  } finally {
    usernum.value = "";
  }
});

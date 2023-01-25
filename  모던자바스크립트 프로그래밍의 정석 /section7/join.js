const username = document.querySelector("#username");
const major = document.querySelector("#major");
const btn = document.querySelector("form > button");

btn.addEventListener("click", (e) => {
  e.preventDefault(); //폼 안에 버튼을 클릭했을 때 서버로 보내지 않기 위해
  let tbody = document.querySelector("#attendant > tbody");
  let newTr = document.createElement("tr");

  // 첫번째 셀에 입력한 이름 넣기
  let nameTd = document.createElement("td");
  nameTd.innerText = username.value;
  username.value = "";

  // 두번째 셀에 입력한 전공 넣기
  let majorTd = document.createElement("td");
  majorTd.innerText = major.value;
  major.value = "";

  // 두 셀을 새 줄에 추가하기
  newTr.appendChild(nameTd);
  newTr.appendChild(majorTd);
  // 새 줄을 tbody에 추가하기
  tbody.appendChild(newTr);
});

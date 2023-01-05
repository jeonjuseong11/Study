function submitHandler(e) {
  //todo를 저장하는 기능
  e.preventDefault();
  const date = todoDate.value;
  const task = todoTask.value;

  todoDate.value = "";
  todoTask.value = "";
  paintTodo(task, date); //입력값을 paintTodo에 넘겨줌
}
function paintTodo(task, date) {
  //todo를 화면에 보여주는 기능
  const li = document.createElement("li");
  const delBtn = document.createElement("button"); //삭제버튼 생성
  const finBtn = document.createElement("button"); //완료버튼 생성
  const span = document.createElement("span");
  const newId = ++ID; //아이디 생성

  delBtn.innerText = "del";
  delBtn.addEventListener("click", deleteClickHandler); //삭제버튼 클릭시 작동할 것
  finBtn.innerText = "fin";
  finBtn.addEventListener("click", finishClickHandler);

  span.innerText = task;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(finBtn);
  li.id = newId;
  todayTodoUI.appendChild(li);

  const todoObj = {
    id: newId,
    task: task,
    date: date,
  };
  CURRENT_TODO_LIST.push(todoObj); //todoObj에 저장
  localStorage.setItem(CURRENT_TODO, JSON.stringify(CURRENT_TODO_LIST)); ///todoObj를 localStorage에 저장
}
function init() {
  //todo불러오기 기능
  const todos = localStorage.getItem(CURRENT_TODO);
  if (todos !== null) {
    //todo가 비어있지 않을 때 저장된 값을 불러온다
    const parsedTodos = JSON.parse(todos);
    todayTodoUI.classList.add(SHOW);

    parsedTodos.forEach((todo) => {
      paintTodo(todo.task, todo.date);
    });
  }
  todoForm.addEventListener("submit", submitHandler); //submit이 눌리면 실행될 것 지정
}
function deleteClickHandler(e) {
  const button = e.target;
  const li = button.parentNode;
  todayTodoUI.remove(li);

  const filteredTodos = CURRENT_TODO_LIST.filter((todo) => {
    return todo.id !== parseInt(li.id); //버튼을 누른 li의 id와 todo를 비교 다른 것만 남김
  });
  CURRENT_TODO_LIST = filteredTodos; //남은 값을 다시 리스트에 저장
  localStorage.setItem(CURRENT_TODO, JSON.stringify(CURRENT_TODO_LIST)); //제거된 리스트 업데이트
}

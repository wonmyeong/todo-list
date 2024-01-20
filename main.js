//유저가 값을 입력한다,
//+ 버튼을 클릭하면, 할 일이 추가된다.
//delete 버튼을 누르면 할일이 삭제된다
//check 버튼을 누르면 할일이 끝나면서 밑줄이 간다
//진행 중 끝남 탭을 누르면, 언더바가 이동한다.
//각 탭에 맞는 할일 목록을 보여준다.
//전체 탭을 누르면 다시 전체 아이템으로 돌아온다.

let taskInput = document.getElementById("task-input");
let addBUtton = document.getElementById("add-button");

let taskList = [];
addBUtton.addEventListener("click", addTask);

function addTask() {
  let taskContent = null;
  let task = {
    id: randomIdGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  console.log(taskList);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete) {
      resultHTML += `<div class="task">
        <div class="task-done">${taskList[i].taskContent}</div>
        <div>
          <button onClick="toggleComplete('${taskList[i].id}')">Check</button>
          <button onClick="deleteTask('${taskList[i].id}')">delete</button>
        </div>
      </div>`;
    } else {
      resultHTML += `<div class="task">
        <div >${taskList[i].taskContent}</div>
        <div>
          <button onClick="toggleComplete('${taskList[i].id}')">Check</button>
          <button onClick="deleteTask('${taskList[i].id}')">delete</button>
        </div>
      </div>`;
    }
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(_id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == _id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
}

function deleteTask(_id) {
  const itemToFind = taskList.find((item) => {
    return item.id == _id;
  });
  const idx = taskList.indexOf(itemToFind);
  if (idx > -1) {
    taskList.splice(idx, 1);
  }
  render();
}

function randomIdGenerate() {
  return "_" + Math.random().toString(36).substr(2, 16);
}

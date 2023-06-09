const inputBox = document.querySelector(".inputbox input");
const addBtn = document.querySelector(".inputbox button");
const todoList = document.querySelector(".todos");
const deleteAllBtn = document.querySelector(".footer button");

showTasks();

addBtn.onclick = () => {

    let userEnteredValue = inputBox.value;
    let getLocalStorageData = localStorage.getItem("New Todo");

    if (getLocalStorageData == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorageData);
    }

    listArray.push(userEnteredValue);
    localStorage.setItem("New Todo", JSON.stringify(listArray));

    showTasks();
}

function showTasks() {

    let getLocalStorageData = localStorage.getItem("New Todo");

    if (getLocalStorageData == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorageData);
    }

    let newLiTag = "";

    listArray.forEach((element, index) => {
        newLiTag += `<li>${element}<span onclick="deleteTask(${index})"><button class="button-delete">Delete</button></span></li>`;
    });

    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}

function deleteTask(index) {

    let getLocalStorageData = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorageData);

    listArray.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArray));

    showTasks(); 
}

deleteAllBtn.onclick = () => {

    listArray = []; 
    localStorage.setItem("New Todo", JSON.stringify(listArray));

    showTasks(); 
}
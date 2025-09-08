const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const button = document.getElementById('btn');

function addTask(){
    if(inputBox.value === ''){
        alert('You must add some task');
    } else{
        let li = document.createElement("li"); // <li></li>
        li.innerHTML = inputBox.value;
        listContainer.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // X
        li.appendChild(span);
        saveData(); 
    }
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

button.addEventListener('click',addTask);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML); //storing
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); //getting
}
showTask();


const addButton = document.getElementById("addbutton");
const userInput = document.getElementById("userinput");
const todoResults = document.getElementById("todoresults");

addButton.addEventListener("click",function(){

  const getInput = userInput.value.trim();

  if(!getInput) return;

  const item = document.createElement("div");
  item.classList.add("todoresults");
  item.textContent = getInput;

  todoResults.appendChild(item);
  
  userInput.value = "";
  
});
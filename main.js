const addButton = document.getElementById("addbutton");
const userInput = document.getElementById("userinput");
const todoResults = document.getElementById("todoresults");

addButton.addEventListener("click",function(){
  let getInput = userInput.value.trim();
  if(getInput){
    const newDiv = document.createElement("div");
    newDiv.classList.add("todoresults");
    newDiv.textContent = getInput;
    todoResults.appendChild(newDiv);
    userInput.value = "";
  }
});
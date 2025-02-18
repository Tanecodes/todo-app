const addButton = document.getElementById("addbutton");
const userInput = document.getElementById("userinput");
const todoResults = document.getElementById("todoresults");

function bubble(){

  const getInput = userInput.value.trim();

  if(!getInput) return;

  const item = document.createElement("div");
  item.classList.add("todoresults");
  item.textContent = getInput;

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("completebtn");
  completeBtn.textContent = "complete"

  completeBtn.addEventListener("click",function(){
    item.remove();
  });

  todoResults.appendChild(item);
  item.appendChild(completeBtn);
  
  userInput.value = "";
   
};

addButton.addEventListener("click",bubble);
userInput.addEventListener("keydown",function(enter){
  if(enter.key === "Enter"){
    bubble();
  }
});
// constant variables.
const addButton = document.getElementById("addbutton");
const userInput = document.getElementById("userinput");
const todoResults = document.getElementById("todoresults");
// saving bubble text to local storage
function saveBubbles() {
  let storageArray = [];
  document.querySelectorAll(".todoresults").forEach( value => {
    let bubbleText = value.textContent.replace("complete", "").trim();
    storageArray.push(bubbleText);
  });
  localStorage.setItem("todoItems",JSON.stringify(storageArray));
};
// loading bubble text from local storage.
function loadBubbles() {
  let savedBubbles = JSON.parse(localStorage.getItem("todoItems")) || [];
  if (savedBubbles && Array.isArray(savedBubbles)){
    savedBubbles.forEach(bubbleText => {
      bubble(bubbleText);
    });
  }
};

// function to create the todo bubbles.
function bubble(bubbleText) {
  let getInput = bubbleText || userInput.value.trim();
  if(getInput === "") return;

  const item = document.createElement("div");
  item.classList.add("todoresults");
  
  const bubbleTextElement = document.createElement("span");
  bubbleTextElement.textContent = getInput;

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("completebtn");
  completeBtn.textContent = "Done"

  completeBtn.addEventListener("click",function(){
    item.remove();
    saveBubbles();
  });

  item.appendChild(bubbleTextElement);
  item.appendChild(completeBtn);
  todoResults.appendChild(item);  

  saveBubbles();

  userInput.value = "";
   
};

document.addEventListener("DOMContentLoaded", loadBubbles);

// adds event listener to add button when clicked.
addButton.addEventListener("click",function() {
  bubble(userInput.value.trim());
});

// adds an event listener to the input bar so you can press the enter key
userInput.addEventListener("keydown",function(enter){
  if(enter.key === "Enter"){
    bubble(userInput.value.trim());
  }
});

const themesButton = document.getElementById("themes-button");
const backgroundButton = document.getElementById("background-button");

backgroundButton.addEventListener("click", function() {

});

themesButton.addEventListener("click", function(){

});
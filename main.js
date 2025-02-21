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

const fullButton = document.getElementById("fullscreen-button");
const backgroundButton = document.getElementById("background-button");

//background button logic
let currentIndex = parseInt(localStorage.getItem("backgroundIndex")) || 0;
const backgrounds = [
  "url(image/study.png)",
  "url(image/totoro-image.png)",
  "url(image/winter.png)",
  "url(image/one-piece.jpeg)",
  "url(image/cute-bunny.png)",
  "url(image/clouds.webp)"
];
document.body.style.backgroundImage = backgrounds[currentIndex];

backgroundButton.addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % backgrounds.length;
  document.body.style.backgroundImage = backgrounds[currentIndex];
  localStorage.setItem("backgroundIndex",currentIndex);
});

function toggleFullScreen() {
    if (!document.fullscreenElement &&    
      !document.mozFullScreenElement && 
      !document.webkitFullscreenElement && 
      !document.msFullscreenElement) { 
  
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { 
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { 
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  } else {
    
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { 
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { 
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { 
      document.msExitFullscreen();
    }

  }

};

fullButton.addEventListener("click",toggleFullScreen);
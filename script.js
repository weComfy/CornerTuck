const defaultFontSize = "1em";
const increaseTextBtn = document.getElementById("increase-text");
const decreaseTextBtn = document.getElementById("decrease-text");

increaseTextBtn.addEventListener("click", () => {
  document.body.style.fontSize = "1.2em";
}

decreaseTextBtn.addEventListener("click", () => {
  document.body.style.fontSize = "1em";
}

const sidebar = document.getElementById('sidebar');
const menuButton = document.querySelector('.menu-button');

function toggleSidebar() {
  const currentWidth = sidebar.style.width;
  if (currentWidth === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
}

menuButton.addEventListener('click', function(event) {
  event.stopPropagation();
  toggleSidebar();
}

document.addEventListener('click', function(event) {
  if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
    sidebar.style.width = '0';
 }
}

  sidebar.addEventListener('click', function(event) {
  event.stopPropagation();
}


function readSummary(id) {
  const text = document.getElementById(id).textContent;
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  window.speechSynthesis.speak(speech);
}


function search() {
   var searchInput = document.getElementById("searchInput").value;
   if (searchInput.trim() === ""){
     alert("Enter search term.");
   } else {
    alert("Searching for: " + searchInput);
    }
  }
  

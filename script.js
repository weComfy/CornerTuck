const defaultFontSize = parseFloat(window.getComputedStyle(document.body).fontSize);
let currentFontSize = defaultFontSize;

const increaseTextBtn = document.getElementById("increase-text");
const decreaseTextBtn = document.getElementById("decrease-text");

increaseTextBtn.addEventListener("click", () => {
  currentFontSize += 2;
  document.body.style.fontSize = `${currentFontSize}px`;
})

decreaseTextBtn.addEventListener("click", () => {
  currentFontSize -= 2;
  document.body.style.fontSize = `${currentFontSize}px`;
})

const sidebar = document.getElementById('sidebar');
const menuButton = document.querySelector('.menu-button');

function toggleSidebar() {
  sidebar.classList.toggle("open");
  /*const currentWidth = sidebar.style.width;
  if (currentWidth === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }*/
}

menuButton.addEventListener('click', function(event) {
  event.stopPropagation();
  toggleSidebar();
})

document.addEventListener('click', function(event) {
  if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
    sidebar.classList.remove("open");
    //sidebar.style.width = '0';
 }
})

 /* sidebar.addEventListener('click', function(event) {
  event.stopPropagation();
}*/


function readSummary(id) {
  const text = document.getElementById(id).textContent;
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  window.speechSynthesis.speak(speech);
}


function search() {
   const searchInput = document.getElementById("searchInput").value;
   if (searchInput.trim() === ""){
     alert("Enter search term.");
   } else {
    alert("Searching for: " + searchInput);
    }
  }
  

const defaultFontSize = parseFloat(window.getComputedStyle(document.body).fontSize);
let currentFontSize = defaultFontSize;

const increaseTextBtn = document.getElementById(`increase-text`);
const decreaseTextBtn = document.getElementById(`decrease-text`);

increaseTextBtn.addEventListener(`click`, () => {
  currentFontSize += 2;
  document.body.style.fontSize = `${currentFontSize}px`;
})

decreaseTextBtn.addEventListener(`click`, () => {
  currentFontSize -= 2;
  document.body.style.fontSize = `${currentFontSize}px`;
})

const sidebar = document.getElementById('sidebar');
const menuButton = document.querySelector('.menu-button');

function toggleSidebar() {
  sidebar.classList.toggle(`open`);
}

menuButton.addEventListener('click', function(event) {
  event.stopPropagation();
  toggleSidebar();
})

document.addEventListener('click', function(event) {
  if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
    sidebar.classList.remove(`open`);
 }
})

function readSummary(id) {
  const text = document.getElementById(id).textContent;
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  currentSpeech = speech;
  window.speechSynthesis.speak(speech);
}

function pauseSummary() {
  if (currentSpeech && window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  } else if (currentSpeech) {
    window.speechSynthesis.pause();
  }
}

function stopSummary() {
  if (currentSpeech) {
    window.speechSynthesis.cancel();
    currentSpeech = null;
  }
}

function search() {
   const searchInput = document.getElementById("searchInput").value;
   if (searchInput.trim() === ""){
     alert("Enter search term.");
   } else {
    alert("Searching for: " + searchInput);
    }
  }
  

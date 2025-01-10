const defaultFontSize = "1em";
const increaseTextBtn = document.getElementById("increase-text");
const decreaseTextBtn = document.getElementById("decrease-text");

increaseTextBtn.addEventListener("click", () => {
  document.body.style.fontSize = "1.2em";
});

decreaseTextBtn.addEventListener("click", () => {
  document.body.style.fontSize = "1em";
});

function readSummary(id) {
  const text = document.getElementById(id).textContent;
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  window.speechSynthesis.speak(speech);
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const currentWidth = sidebar.style.width;
    if (sidebar.style.width === '250px' || currentWidth === ' ') {
      sidebar.style.width = '0';
    } else {
      sidebar.style.width = '250px';
    }
  }

  function flashHeader() {
    var header = document.getElementById("flashingHeader");
    var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  
    setInterval(function() {
      var randomColor = colors[Math.floor(Math.random() * colors.length)];
      header.style.color = randomColor;
    }, 4000);
  } 

  function search() {
    var searchInput = document.getElementById("searchInput").value;
    if (searchInput.trim() === ""){
      alert("Enter search term.");
    } else {
    alert("Searching for: " + searchInput);
    }
  }
  flashHeader();

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

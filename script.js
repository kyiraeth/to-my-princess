function goContinue() {
  window.location.href = "letter.html";
}

function goNext() {
  window.location.href = "question.html";
}

function yesAnswer() {
  alert("YAAAAYYYYYYY");
}

function moveButton(button) {
  const x = Math.random() * 150 - 75;
  const y = Math.random() * 150 - 75;

  button.style.position = "relative";
  button.style.transform = `translate(${x}px, ${y}px)`;
}

/* Attach events after page loads (BEST METHOD) */
window.onload = function () {

  const noBtn = document.querySelector(".no");

  if (noBtn) {
    noBtn.addEventListener("mouseover", function () {
      moveButton(noBtn);
    });

    noBtn.addEventListener("touchstart", function () {
      moveButton(noBtn);
    });
  }

};
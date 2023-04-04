"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// Again button resetting the game
document.querySelector(".reset button").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".attempts span").textContent = score;
  document.querySelector("html").style.backgroundColor =
    "rgba(127, 255, 212, 0.514)";
  document.querySelector(".processing").textContent = `start guessing...`;
  document.querySelector(".show p").textContent = `?`;
  document.querySelector(".show p").style.fontWeight = "normal";
  document.querySelector(".input-guess").value = "";
});
// check button guessing the number
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input-guess").value);
  console.log(guess);
  if (guess < 1 || guess > 20) {
    alert(`please choose a number between 1 and 20 🔪 `);
    document.querySelector(".input-guess").value = "";
  }
  if (!guess) {
    document.querySelector(".processing").textContent = `👎 No number`;
  } else if (score > 1) {
    if (secretNumber === guess) {
      document.querySelector(".processing").textContent = `🎉 Correct Number!`;
      document.querySelector(".show p").textContent = secretNumber;
      document.querySelector("html").style.backgroundColor = "#2ecc71";
      document.querySelector(".show p").style.fontWeight = "bold";
      if (highScore > score) {
        document.querySelector(".high-score span").textContent = highScore;
      } else {
        highScore = score;
        document.querySelector(".high-score span").textContent = highScore;
      }
      document.querySelector(".high-score span").textContent = highScore;
    } else if (guess > secretNumber) {
      document.querySelector(".processing").textContent = `📈 Too High`;
      score--;
      document.querySelector(".attempts span").textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector(".processing").textContent = `📉 Too Low`;
      score--;
      document.querySelector(".attempts span").textContent = score;
    }
  } else {
    document.querySelector(
      ".processing"
    ).textContent = `😔 You are bad at guessing`;
    score = 0;
    document.querySelector(".attempts span").textContent = score;
  }
});
// clearing input on focus
document.querySelector(".input-guess").addEventListener("focus", function () {
  document.querySelector(".input-guess").value = "";
});

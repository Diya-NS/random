const button = document.getElementById("generate-btn");
const output = document.getElementById("output");
const luckyMessage = document.getElementById("lucky-message");

button.addEventListener("click", () => {
  const number = Math.floor(Math.random() * 100) + 1;
  output.textContent = number;

  if (number > 90) {
    luckyMessage.textContent = "🍀 You're Lucky Today!";
  } else {
    luckyMessage.textContent = "";
  }
});

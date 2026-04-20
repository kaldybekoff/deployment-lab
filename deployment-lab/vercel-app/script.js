const nameInput = document.getElementById("nameInput");
const greetButton = document.getElementById("greetButton");
const result = document.getElementById("result");

greetButton.addEventListener("click", function () {
  const name = nameInput.value.trim();

  if (name === "") {
    result.textContent = "Please enter your name.";
  } else {
    result.textContent = `Hello, ${name}! Welcome to my deployed app.`;
  }
});

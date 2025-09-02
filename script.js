let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = Number(document.getElementById("guess").value);
  const feedback = document.getElementById("feedback");
  const attemptsText = document.getElementById("attempts");

  // Count attempts
  attempts++;

  if (!userGuess) {
    feedback.textContent = "⚠️ Please enter a number!";
    return;
  }

  if (userGuess === randomNumber) {
    feedback.textContent = `🎉 Correct! The number was ${randomNumber}.`;
    attemptsText.textContent = `✅ You guessed it in ${attempts} attempts.`;
    document.getElementById("guess").disabled = true;
  } else if (userGuess < randomNumber) {
    feedback.textContent = "📉 Too low! Try again.";
    attemptsText.textContent = `Attempts so far: ${attempts}`;
  } else {
    feedback.textContent = "📈 Too high! Try again.";
    attemptsText.textContent = `Attempts so far: ${attempts}`;
  }
}

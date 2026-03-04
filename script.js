var level = 1;
var minNum = 1;
var maxNum = 10;
var attempts = 3;
var secret = Math.floor(Math.random() * 10) + 1;

function makeGuess() {
  var guess = parseInt(document.getElementById("guessInput").value);
  var msg = document.getElementById("message");

  if (isNaN(guess)) {
    msg.innerHTML = "Please enter a number!";
    return;
  }

  if (guess > secret) {
    attempts--;
    msg.innerHTML = guess + " is Too High! Try lower.";
  } else if (guess < secret) {
    attempts--;
    msg.innerHTML = guess + " is Too Low! Try higher.";
  } else {
    msg.innerHTML = "Correct! You got it in " + (3 - attempts + 1) + " attempt(s)!";
    levelUp();
    return;
  }

  document.getElementById("attemptsText").innerHTML = "Attempts left: " + attempts;

  if (attempts == 0) {
    msg.innerHTML = "Game Over! The number was " + secret + ". Starting again...";
    setTimeout(resetLevel, 2000);
  }

  document.getElementById("guessInput").value = "";
}

function levelUp() {
  level++;
  if (level == 2) {
    minNum = 11;
    maxNum = 25;
  }
  attempts = 3;
  secret = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  document.getElementById("levelText").innerHTML = "Level " + level + " — Guess a number between " + minNum + " and " + maxNum;
  document.getElementById("attemptsText").innerHTML = "Attempts left: 3";
  document.getElementById("message").innerHTML = "Level Up! Now guess between " + minNum + " and " + maxNum;
  document.getElementById("guessInput").value = "";
}

function resetLevel() {
  level = 1;
  minNum = 1;
  maxNum = 10;
  attempts = 3;
  secret = Math.floor(Math.random() * 10) + 1;
  document.getElementById("levelText").innerHTML = "Level 1 — Guess a number between 1 and 10";
  document.getElementById("attemptsText").innerHTML = "Attempts left: 3";
  document.getElementById("message").innerHTML = "Game reset. Good luck!";
  document.getElementById("guessInput").value = "";
}
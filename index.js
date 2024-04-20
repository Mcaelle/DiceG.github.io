// index.js

// Function to generate a random number between 1 and 6 (inclusive)
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Function to update the dice image
function updateDiceImage(player, value) {
  const imgElement = document.querySelector(`.img${player}`);
  imgElement.src = `images/dice${value}.png`;
}

// Event listener for the roll button
document.getElementById("rollButton").addEventListener("click", function () {
  // Generate random values for each player's dice
  const player1Value = rollDice();
  const player2Value = rollDice();

  // Update the dice images
  updateDiceImage(1, player1Value);
  updateDiceImage(2, player2Value);
});

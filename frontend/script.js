// DOM Elements
const cells = document.querySelectorAll(".cell");

// Variables
let currentPlayer = "X";

// Functions
function handleCellClick(event) {
  const cell = event.currentTarget;

  // Ignore clicks on already marked cells.
  if (cell.textContent !== "") {
    return;
  }

  cell.textContent = currentPlayer;
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Loop for X/O clicks on UI
cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});



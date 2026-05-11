// DOM Elements
const cells = document.querySelectorAll(".cell");
const statusEl = document.getElementById("status");

// Variables
let currentPlayer = "X";

function updateStatus() {
  statusEl.textContent = `Player ${currentPlayer}'s turn`;
}

// Functions
function handleCellClick(event) {
  const cell = event.currentTarget;

  // Ignore clicks on already marked cells.
  if (cell.textContent !== "") {
    return;
  }

  cell.textContent = currentPlayer;
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateStatus();
}

// Loop for X/O clicks on UI
cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});

updateStatus();

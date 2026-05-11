// DOM Elements
const cells = document.querySelectorAll(".cell");
const statusEl = document.getElementById("status");

// Variables
let currentPlayer = "X";
const boardState = Array(9).fill("");
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function updateStatus() {
  statusEl.textContent = `Player ${currentPlayer}'s turn`;
}

function getWinner() {
  for (const [a, b, c] of winningCombos) {
    if (
      boardState[a] !== "" &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    ) {
      return boardState[a];
    }
  }

  return null;
}

// Functions
function handleCellClick(event) {
  const cell = event.currentTarget;
  const cellIndex = Number(cell.dataset.index);

  // Ignore clicks on already marked cells.
  if (boardState[cellIndex] !== "") {
    return;
  }

  boardState[cellIndex] = currentPlayer;
  cell.textContent = currentPlayer;
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateStatus();
}

// Loop for X/O clicks on UI
cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});

updateStatus();

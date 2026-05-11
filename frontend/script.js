// DOM Elements
const cells = document.querySelectorAll(".cell");
const statusEl = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");

// Variables
let currentPlayer = "X";
const boardState = Array(9).fill("");
let gameOver = false;
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

function isDraw() {
  return boardState.every((mark) => mark !== "");
}

// Functions
function handleCellClick(event) {
  const cell = event.currentTarget;
  const cellIndex = Number(cell.dataset.index);

  // Ignore clicks on already marked cells or after game end.
  if (gameOver || boardState[cellIndex] !== "") {
    return;
  }

  boardState[cellIndex] = currentPlayer;
  cell.textContent = currentPlayer;

  const winner = getWinner();
  if (winner) {
    statusEl.textContent = `Player ${winner} wins!`;
    gameOver = true;
    return;
  }

  if (isDraw()) {
    statusEl.textContent = "It's a draw!";
    gameOver = true;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateStatus();
}

function resetGame() {
  boardState.fill("");
  currentPlayer = "X";
  gameOver = false;

  cells.forEach((cell) => {
    cell.textContent = "";
  });

  updateStatus();
}

// Loop for X/O clicks on UI
cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});
resetBtn.addEventListener("click", resetGame);

updateStatus();

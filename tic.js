
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#rg");

let turnO = true; // Player O's turn first
let count = 0; // To track the number of moves

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

function checkWin() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      boxes[a].innerText &&
      boxes[a].innerText === boxes[b].innerText &&
      boxes[a].innerText === boxes[c].innerText
    ) {
      return boxes[a].innerText; // Return the winner ('O' or 'X')
    }
  }
  return null; // No winner yet
}

function checkDraw() {
  return count === 9; // If all boxes are filled, it's a draw
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      box.innerText = turnO ? "O" : "X";
      turnO = !turnO;
      count++;
      const winner = checkWin();
      if (winner) {
        alert(`${winner} wins!`);
        resetGame();
      } else if (checkDraw()) {
        alert("It's a draw!");
        resetGame();
      }
    }
  });
});

resetBtn.addEventListener("click", resetGame);

function resetGame() {
  boxes.forEach((box) => {
    box.innerText = "";
  });
  turnO = true;
  count = 0;
}

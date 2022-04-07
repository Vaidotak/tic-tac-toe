const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// console.log(WINNING_COMBINATIONS);
let cells = document.querySelectorAll("[data-cell]");
let sign = true;
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener(
    "click",
    function () {
      this.innerHTML = sign ? "X" : "O";
      sign = !sign;
      checkWin();

    },
    { once: true }
  );
}
// function beginGame (event){

// }

function checkWin() {
  for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
    const cell1 = cells[WINNING_COMBINATIONS[i][0]];
    const cell2 = cells[WINNING_COMBINATIONS[i][1]];
    const cell3 = cells[WINNING_COMBINATIONS[i][2]];
    console.log(cell1.textContent);

    if (cell1.textContent == "X" && cell2.textContent == "X" && cell3.textContent == "X") {
      alert("X laimėjo");
    }
    if (cell1.textContent === "O" && cell2.textContent === "O" && cell3.textContent === "O") {
      alert("O laimėjo");
    }
  }
}

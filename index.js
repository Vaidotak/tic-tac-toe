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

let resultDiv = document.createElement('div')
let result = document.createElement('H2');
result.setAttribute('id', 'result')
document.body.prepend(resultDiv)
resultDiv.prepend(result)
result.textContent = `result `
result.style.textAlign = 'center';


let restart = document.createElement('button')
restart.setAttribute('id', 'restart')
resultDiv.prepend(restart)
restart.textContent = `restartas `
restart.style.alignItems = 'center'


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

function checkWin() {
  for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
    const cell1 = cells[WINNING_COMBINATIONS[i][0]];
    const cell2 = cells[WINNING_COMBINATIONS[i][1]];
    const cell3 = cells[WINNING_COMBINATIONS[i][2]];
    console.log(cell1.textContent);

    if (cell1.textContent == "X" && cell2.textContent == "X" && cell3.textContent == "X") {
      result.innerHTML = "IKSAS laimėjo";
    }
    else if (cell1.textContent === "O" && cell2.textContent === "O" && cell3.textContent === "O") {
      result.innerHTML = "NULIS laimėjo";
    }
    else (cell1.textContent !== "O" || cell2.textContent !== "O" || cell3.textContent !== "O") ;{
    result.innerHTML = "Lygiosios";
  }
  }
}
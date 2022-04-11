const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let isFirst = true
let cells = document.getElementsByClassName('cell')
let draw = []
let playerSymbol = 'X'
let playerX = 0
let playerO = 0
document.getElementsByTagName('h1')[0].textContent = playerSymbol
// einu per visus cell
for (let i = 0; i < cells.length; i++) {
  //imu kiekviena cell atskirai ir uzdedu event click
  cells[i].addEventListener('click',function () {
    fillInCell(this)
    document.getElementsByTagName('h1')[0].textContent = playerSymbol
  })
}
function fillInCell(cell) {
  // tikrinu ar tuscia cell ant kurios paspaudziau
  if(cell.innerHTML.length === 0) {
    let currentPlayer = isFirst ? 'X' : 'O'
    playerSymbol = !isFirst ? 'X' : 'O'
    cell.innerHTML = currentPlayer
    if (!checkWinner(currentPlayer)) {
      checkDraw()
    }
    isFirst = !isFirst
  }
}
function checkWinner(currentPlayer) {
  for (let combination of WINNING_COMBINATIONS) {
    // every funkcija tikrina ar uyra laimetojas
    let winner = combination.every(function (cellKey) {
      return cells[cellKey].textContent === currentPlayer
    })
    if (winner) {
      if (currentPlayer === 'X') {
        playerX++
        document.getElementById('playerX').textContent = playerX
      } else {
        playerO++
        document.getElementById('playerO').textContent = playerO
      }
      reloadPage('my winner is: ' + currentPlayer)
    }
  }
  return false
}
function checkDraw() {
  for (let cell of cells) {
    draw.push(cell.textContent.length > 0)
  }
  draw = draw.every(function (currentValue) {
    return currentValue
  })
  if (draw) {
    reloadPage('Draw')
  } else {
    draw = []
  }
}
function reloadPage(message) {
  setTimeout(function () {
    alert(message)
    for (let cell of cells) {
      cell.textContent = ''
    }
    // location.reaload padaro page refresh
    // location.reload()
  }, 1)
}
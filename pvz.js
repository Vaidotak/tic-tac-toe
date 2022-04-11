let wordsArray = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
    'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero',
    'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut',
    'orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia',
    'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis',
    'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros',
    'dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa',
    'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus',
    'quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus',
    'at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam',
    'tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in',
    'hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque',
    'fusce', 'augue', 'leo', 'eget', 'semper', 'mattis',
    'tortor', 'scelerisque', 'nulla', 'interdum', 'tellus', 'malesuada',
    'rhoncus', 'porta', 'sem', 'aliquet', 'et', 'nam',
    'suspendisse', 'potenti', 'vivamus', 'luctus', 'fringilla', 'erat',
    'donec', 'justo', 'vehicula', 'ultricies', 'varius', 'ante',
    'primis', 'faucibus', 'ultrices', 'posuere', 'cubilia', 'curae',
    'etiam', 'cursus', 'aliquam', 'quam', 'dapibus', 'nisl',
    'feugiat', 'egestas', 'class', 'aptent', 'taciti', 'sociosqu',
    'ad', 'litora', 'torquent', 'per', 'conubia', 'nostra',
    'inceptos', 'himenaeos', 'phasellus', 'nibh', 'pulvinar', 'vitae',
    'urna', 'iaculis', 'lobortis', 'nisi', 'viverra', 'arcu',
    'morbi', 'pellentesque', 'metus', 'commodo', 'ut', 'facilisis',
    'felis', 'tristique', 'ullamcorper', 'placerat', 'aenean', 'convallis',
    'sollicitudin', 'integer', 'rutrum', 'duis', 'est', 'etiam',
    'bibendum', 'donec', 'pharetra', 'vulputate', 'maecenas', 'mi',
    'fermentum', 'consequat', 'suscipit', 'aliquam', 'habitant', 'senectus',
    'netus', 'fames', 'quisque', 'euismod', 'curabitur', 'lectus',
    'elementum', 'tempor', 'risus', 'cras'
];
// isideti i CSS faila :)
// .my-custom-class {
//     margin: 5px;
//     display: inline-block;
// }
// Duomenys is didelio array
let data = wordsArray;
// sukuriu elementa i kuri desiu zodzius is didelio array
let dataWordsListDiv = document.createElement('div')
// pridedu klase, bet tik todel kad galiu :) nieko su ja nedarau
dataWordsListDiv.classList.add('sukuriau-su-js')
// idedu dataWordsListDiv i dokumento body
document.body.appendChild(dataWordsListDiv)
//nusistatau pradine spalva (tiesiog sikart tuscia), padedu prie FOR,
// kad kiekviena karta ,kai ivyksta ciklas/for galeciau ji pakeisti ir naudoti pries tai nustatyta spalva
let lastBorderColor = ''
function randomColor() {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    return '#' + randomNumber.padStart(6, 0);
}
function createColoredBox(key) {
    let randColor = randomColor()
    //susikuriu nauja div
    let newDiv = document.createElement('div')
    //susikuriu nauja h1
    let newH1 = document.createElement('h1')
    // i sukurta h1 idedu zodi is wordsArray
    newH1.textContent = wordsArray[key]
    // pakeiciu spalva i pries tai buvusia
    newH1.style.color = lastBorderColor
    // idedu h1 i newDiv
    //<div>
    //  <h1> </h1>
    //</div>
    newDiv.appendChild(newH1)
    // pakeiciu newDiv background-color
    newDiv.style.backgroundColor = randColor
    // pakeiciu borderio spalva, rasau ilgesniu budu, nes pakeisti tik
    // border-color kyla bedu, pats save kazkuriuo momentu perraso
    newDiv.style.border = '5px solid ' + lastBorderColor
    // nustatau lastBorderColor nauja spalva, kad kitame cikle/for naudotu nauja spalva ne ta pacia
    lastBorderColor = randColor
    // pridedu klase, kuria apsirasiau css
    newDiv.classList.add('my-custom-class')
    return newDiv
}
for (let key in wordsArray) {
    let randomTime = Math.floor(Math.random() * 10000)
    setTimeout(function () {
        dataWordsListDiv.appendChild(createColoredBox(key))
    }, randomTime)
}
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
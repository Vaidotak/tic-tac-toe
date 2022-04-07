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
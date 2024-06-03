//accessing the container
let container = document.querySelector(".container")
//acessing gmae board and start button
let gameBoard = document.querySelector(".gameBoard")

//accesing each squares
let squares = gameBoard.childNodes;
let allSquares = document.querySelectorAll(".cell");



//SVGs for items
var TriangleBlue = '<div class="piece triangle" group="blue" char="triangle" direction="right"><svg class="triangle" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 0; left: 0;">' +
    '<polygon points="10,10 90,10 10,90" fill="blue" stroke="black"/>' +
    '</svg></div>';
var TriangleRed = '<div class="piece triangle flipped" group="red" char="triangle" direction="left"><svg class="triangle" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 0; left: 0;">' +
    '<polygon points="10,90 90,90 10,10" fill="red" stroke="black"/>' +
    '</svg></div>';
var canonBlue = '<div class="piece tank" group="blue"><svg class="tank" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 0; left: 0;">' +
    '<rect x="10" y="10" width="80" height="80" fill="blue" /><text x="50" y="55" fill="white" font-size="20" text-anchor="middle" alignment-baseline="middle">canon</text>' +
    '</svg></div>';
var canonRed = '<div class="piece tank" group="red"><svg class="tank" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 0; left: 0;">' +
    '<rect x="10" y="10" width="80" height="80" fill="red" /><text x="50" y="55" fill="white" font-size="20" text-anchor="middle" alignment-baseline="middle">canon</text>' +
    '</svg></div>';
var LineBlue = '<div class="piece line" group="blue" char="line" direction="right"><svg class="line" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 0; left: 0;">' +
    '<line x1="10" y1="90" x2="90" y2="10" stroke="blue" stroke-width="2"/>' +
    '</svg></div>';
var LineRed = '<div class="piece line" group="red" char="line" direction="left"><svg class="line" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 0; left: 0;">' +
    '<line x1="10" y1="90" x2="90" y2="10" stroke="red" stroke-width="2"/>' +
    '</svg></div>';
var tankRed = '<div class="piece absorb" group="red" char="tank"><svg class="tank" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 0; left: 0;">' +
    '<rect x="10" y="10" width="80" height="80" fill="red" /><text x="50" y="55" fill="white" font-size="20" text-anchor="middle" alignment-baseline="middle">tank</text>' +
    '</svg></div>';
var tankBlue = '<div class="piece absorb" group="blue" char="tank"><svg class="tank" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 0; left: 0;">' +
    '<rect x="10" y="10" width="80" height="80" fill="blue" /><text x="50" y="55" fill="white" font-size="20" text-anchor="middle" alignment-baseline="middle">tank</text>' +
    '</svg></div>';
var titanRed = '<div class="piece titan" group="red" char="titan"><svg class="tank" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 0; left: 0;">' +
    '<rect x="10" y="10" width="80" height="80" fill="red" /><text x="50" y="55" fill="white" font-size="20" text-anchor="middle" alignment-baseline="middle">titan</text>' +
    '</svg></div>';
var titanBlue = '<div class="piece titan" group="blue" char="titan"><svg class="tank" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 0; left: 0;">' +
    '<rect x="10" y="10" width="80" height="80" fill="blue" /><text x="50" y="55" fill="white" font-size="20" text-anchor="middle" alignment-baseline="middle">titan</text>' +
    '</svg></div>';


//array for storing element
const cells = [];
//logic for creating 8 c 8 board
function createBoard() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', () => { onCellClick(cell) })//adding eventlistener
            gameBoard.appendChild(cell);

            cells.push(cell);
        }
    }

    gameBoard.childNodes[1].innerHTML = TriangleBlue;
    gameBoard.childNodes[6].innerHTML = LineBlue;//14
    gameBoard.childNodes[3].innerHTML = canonBlue;//3
    gameBoard.childNodes[57].innerHTML = canonRed;
    gameBoard.childNodes[59].innerHTML = TriangleRed;
    gameBoard.childNodes[55].innerHTML = LineRed;
    gameBoard.childNodes[20].innerHTML = tankBlue;
    gameBoard.childNodes[42].innerHTML = tankRed;
    gameBoard.childNodes[4].innerHTML = titanBlue;
    gameBoard.childNodes[61].innerHTML = titanRed;
}
createBoard()
function onCellClick(cell) {


    if (cell.innerHTML) {
        document.querySelectorAll('.cell').forEach(a => {
            a.classList.remove('clicked');
            a.classList.remove('highlight');
        })
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        //adding 'clicked' class to selected cell
        cell.classList.add('clicked');

        // Highlight adjacent and diagonal empty cells
        var adjacentCoords = [
            [row - 1, col],     // above
            [row + 1, col],     // below
            [row, col - 1],     // left
            [row, col + 1],     // right
            [row - 1, col - 1], // top-left
            [row - 1, col + 1], // top-right
            [row + 1, col - 1], // bottom-left
            [row + 1, col + 1]  // bottom-right
        ];
        //acccessing adjacent cells  
        adjacentCoords.forEach(([r, c]) => {
            if (r >= 0 && r < 8 && c >= 0 && c < 8) {
                const adjacentCell = document.querySelector(`.cell[data-row="${r}"][data-col="${c}"]`);
                if (adjacentCell && !adjacentCell.innerHTML) {
                    adjacentCell.classList.add('highlight')
                    adjacentCell.addEventListener('click', () => { onHighlightedCellClick(adjacentCell) })
                }
            }
        });

    }
}
function onHighlightedCellClick(b) {
    document.querySelectorAll('.highlight').forEach(a => {
        a.classList.remove('highlight')
    })
    let originalCell = document.querySelector('.clicked')
    //  originalCell.classList.remove('clicked')
    // Transfer data (textContent in this case)
    b.innerHTML = originalCell.innerHTML;
    originalCell.innerHTML = '';
}
//Bullet Movement Logic.....

let bulletPostion = 0;
let bulletStartCol;
let bulletStartRow;
let endBlue = 7;
let endRed = 0;
let endLeft = 0;
let endRight = 7;
let moveBulletRightCalled = false;
let moveBulletLeftCalled = false;
let goUpCalled = false;
let goDownCalled = false;

function createBullet(dragGrp) {
    // console.log(dragGrp)
    allSquares.forEach(square => {
        if (square.firstChild) {
            if ((square.firstChild.getAttribute("class") == "piece tank") && (square.firstChild.getAttribute("group") == dragGrp)) {
                bulletStartCol = square.dataset.col;
                bulletStartRow = square.dataset.row;

            }
        }
    })
    const bullet = document.createElement("div");
    bullet.classList.add('bullet');
    allSquares.forEach(square => {
        let r = square.dataset.row;
        let c = square.dataset.col;
        if (r == bulletStartRow && c == bulletStartCol) {
            square.appendChild(bullet);

        }
    })

    bulletPostion = bulletStartRow;
    disableDrag();
    if (dragGrp == "blue") {
        moveBulletDown();
    } else {
        moveBulletUp();
    }
    // moveBullet(dragGrp);
}

function disableDrag() {
    allSquares.forEach(square => {
        if (square.firstChild) {
            square.firstChild.setAttribute('draggable', false)
        }
    })
}
//TIMER LOGIC AND TURN CHANGE LOGIC

///Timer Logic
let turnHeading = document.querySelector(".turnHeading")
let turn = "blue";



let minTime = 1000
let timer = 0;
let pausedValue;
let intervalID = null;

function startTimer(duration, display) {
  pausedValue = 0;
  timer = duration;
  intervalID = setInterval(function () {
    display.innerText = `Time Left: ${timer}s`;

    if (--timer < 0) {
      clearInterval(intervalID);
      gameOver();
    }
  }, 1000);
}

//Game Pause Logic

let pauseBtn = document.querySelector("#pauseGame");

pauseBtn.addEventListener("click", () => {

  if (pauseBtn.innerText == "Pause") {
    pauseBtn.innerText = "Play";
    let display = document.querySelector("#timer")

    // Clear the previous interval if it exists and store the value
    pausedValue = timer;
    if (intervalID !== null) {
      clearInterval(intervalID);
    }
    display.innerText = `Time Left: ${timer}s`;

  }
  else if (pauseBtn.innerText == "Play") {

    pauseBtn.innerText = "Pause";
    let display = document.querySelector("#timer")
    let newTime = pausedValue;

    startTimer(newTime, display);

  }
})


//GameOver Logic
function gameOver() {
  alert(`TIME OVER !! ${turn} has lost the game`);
  location.reload();

}
//Reset Game Logic
let resetBtn = document.querySelector("#restartGame");
resetBtn.addEventListener("click", () => {
  resetGame();
})
function resetGame() {
  alert("Game Restarting !!!")
  clearInterval(intervalID);
  location.reload()

}


//on window load logic

window.onload = () => {
  turnHeading.innerText = `${turn.toUpperCase()}'s Turn  ||`;
  pauseBtn.innerText = "Pause";
  // console.log(turn);
  let display = document.querySelector("#timer");
  let totalTime = 60;
  startTimer(totalTime, display);

  allSquares.forEach(square => {
    if (square.firstChild && square.firstChild.getAttribute("class") != "bullet") {
      if (square.firstChild.getAttribute("group") != turn) {
        square.classList.add("disabled")
        square.firstChild.classList.add("disabled")
      } else {
        square.classList.remove("disabled")
        square.firstChild.classList.remove("disabled")
      }
    }
  })
}

function updateTurn(group) {
  // console.log(turn);
  turnHeading.innerText = `${group.toUpperCase()}'s Turn`;

  //time update
  let totalTime = 60; // 60 seconds
  let display = document.getElementById('timer');

  // Clear the previous interval if it exists
  if (intervalID !== null) {
    clearInterval(intervalID);
  }

  // Reset the display for the new timer
  display.innerText = `Time Left: ${totalTime}s`;

  // Start a new timer
  startTimer(totalTime, display);

  allSquares.forEach(square => {
    if (square.firstChild && square.firstChild.getAttribute("class") != "bullet") {
      if (square.firstChild.getAttribute("group") != turn) {
        square.classList.add("disabled")
        square.firstChild.classList.add("disabled")
      } else {
        square.classList.remove("disabled")
        square.firstChild.classList.remove("disabled")
      }
    }
  })

}


let board;
let min = 1;
let int = 10;
let max = 4;
let currentPlayer = 'X';
let number = document.getElementById("tal");
let text = document.getElementById("winner");

function init() {
    kvadrera();
    tal();

    console.log(tal());
    createBorder();
    document.addEventListener("click" , event =>{
        checkWin();
        checkTie();
    })
    let button = document.getElementById("reset");
        button.addEventListener("click" , event =>{
            reset();
        })

    }
window.onload = init();

function createBorder(){
    //skapar en 3x3 med null-värden
    board = Array.from({ length: 3 }, () => Array(3).fill(null));

    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', () => 
            {handleClick(i, j)
            });
            boardElement.appendChild(cell);
        }
    }
}

function handleClick(i, j) {
    if (!board[i][j] && !checkWin() && !checkTie()) {
        board[i][j] = currentPlayer;
        //byter spelare. spelare 1 = x spelare 2 = O
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
    updateBoard();
}

function updateBoard() {
    const boardElement = document.getElementById('board');
    const cells = Array.from(boardElement.children);
    //den kollar ifall diven är tom eller inte, är den tom så skriver den ut X eller O beroende på vems tur det är och om den inte är tom så retunerar den falskt.
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            cells[i * 3 + j].textContent = board[i][j] ? board[i][j] : '';
        }
    }
}

function checkWin() {
    // kolla rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
  
            text.innerHTML = "Vinnaren är " + board[i][0];
            console.log(board[i][0])
            return board[i][0];
        }
    }

    // kolla columns
    for (let j = 0; j < 3; j++) {
        if (board[0][j] && board[0][j] === board[1][j] && board[0][j] === board[2][j]) {
            text.innerHTML = "Vinnaren är " + board[0][j];
            console.log(board[0][j])
            return board[0][j];
        }
    }

    // kolla diagonals
    if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        text.innerHTML = "Vinnaren är " + board[0][0];
        console.log(board[0][0])
        return board[0][0];
    }

    if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        text.innerHTML = "Vinnaren är " + board[0][2];
        console.log(board[0][2])
        return board[0][2];
    }

    return false;
}

function reset() {
    location.reload();
}

function checkTie() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (!board[i][j]) {
                return false;
            }
        }
    }
    text.innerHTML = "Ingen vann!";
    return true;
}

function tal(){
    let sum;
    sum = (max - min + 1) * (min + max) / 2	
    number.innerHTML = sum;
    console.log(sum);
    return sum;
    }


function kvadrera(int){
    int = 20;
    let intmath;
    intmath = int*int;
    number.innerHTML = " " + intmath;
    console.log(intmath);
    console.log(int);
    return intmath;
}
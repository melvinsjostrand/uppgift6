        let board;
        let currentPlayer = 'X';

        function init() {
            createBorder();
            document.addEventListener("click" , event =>{
                checkWin();
            })
            let button = document.getElementById("reset");
                button.addEventListener("click" , event =>{
                    reset();
                })
            }
        window.onload = init();


        function createBorder(){
            board = Array.from({ length: 3 }, () => Array(3).fill(null));

            const boardElement = document.getElementById('board');
            boardElement.innerHTML = '';
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    const cell = document.createElement('div');
                    cell.classList.add('cell');
                    cell.addEventListener('click', () => handleClick(i, j));
                    boardElement.appendChild(cell);
                }
            }
        }

        function handleClick(i, j) {
            if (!board[i][j] && !checkWin() && !checkTie()) {
                board[i][j] = currentPlayer;
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                console.log(currentPlayer);
            }else{
                let text = document.getElementsByName("p");
                text.innerHTML = "heeej"
            }
            updateBoard();
            console.log("vinnaren " + currentPlayer);
        }

        function updateBoard() {
            const boardElement = document.getElementById('board');
            const cells = Array.from(boardElement.children);

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    cells[i * 3 + j].textContent = board[i][j] ? board[i][j] : '';
                }
            }
        }

        function checkWin() {
            // check rows
            for (let i = 0; i < 3; i++) {
                if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
                    return true;
                    console.log("vinnaren är" + currentPlayer);
                }
            }

            // check columns
            for (let j = 0; j < 3; j++) {
                if (board[0][j] && board[0][j] === board[1][j] && board[0][j] === board[2][j]) {
                    return true;
                    console.log("vinnaren är" + currentPlayer);
                }
            }

            // check diagonals
            if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
                return true;
                console.log("vinnaren är" + currentPlayer);
            }

            if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
                return true;
                console.log("vinnaren är" + currentPlayer);
            }

            return false;
            console.log("vinnaren är" + currentPlayer);
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

            return true;

        }

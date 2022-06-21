//creating additional content dynamically
const gameDiv = document.getElementById('game-container');
for(let index=0;index<9;index++){
	let childDiv = document.createElement('div');
	childDiv.classList.add('cell');
	childDiv.dataset.cellIndex = index;
	gameDiv.append(childDiv);
}

//game logics
let gameActive = true;
let currentPlayer = 'X';
let gameState = ["", "", "", "", "", "", "", "", ""];
const gameStatus = document.getElementById('game--status');
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
const winningConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];
gameStatus.innerHTML = currentPlayerTurn();
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click',handleCellClick));
document.querySelector('.game--restart').addEventListener('click',handleRestartGame);

function handleCellClick(e){
	if(!gameActive){
		alert('Game Over restart to play again');
		return;
	}
	let clickedCell = e.target;
	let clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
	if(gameState[clickedCellIndex] != '' || !gameStatus){
		return;
	}
	handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleCellPlayed(cell,cellIndex){
	cell.innerHTML = currentPlayer;
	gameState[cellIndex] = currentPlayer;
}

function handleResultValidation(){
	let roundWon =false;
	for(let i=0;i<winningConditions.length;i++){
		let winCondition = winningConditions[i];
		let clicked1st = gameState[winCondition[0]];
		let clicked2st = gameState[winCondition[1]];
		let clicked3st = gameState[winCondition[2]];
		if(clicked1st =='' || clicked2st == '' || clicked3st ==''){
			continue;
		}
		if(clicked1st == clicked2st && clicked1st == clicked3st){
			gameStatus.innerHTML = winningMessage();
			alert('win');
			roundWon = true;
			break;
		}
	}
	if (roundWon) {
        gameStatus.innerHTML = winningMessage();
        gameActive = false;
        return;
    }
	let roundDraw = !gameState.includes("");
	if(roundDraw){
		gameStatus.innerHTML = drawMessage();
		gameActive = false;
	}
	handlePlayerChange();
}

function handlePlayerChange(){
	currentPlayer = currentPlayer === "X" ? "O" : "X";
    gameStatus.innerHTML = currentPlayerTurn();
}

function handleRestartGame(){
	gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    gameStatus.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML ='');
}
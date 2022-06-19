const gameDiv = document.getElementById('game-container');
for(let index=0;index<9;index++){
	let childDiv = document.createElement('div');
	childDiv.classList.add('cell');
	gameDiv.append(childDiv);
}
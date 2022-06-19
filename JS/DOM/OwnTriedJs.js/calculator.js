let table = document.getElementsByClassName('calculatorTbl');
let screen = document.getElementById("inputCalc");
console.log(screen);
let tableRows = table[0].rows;
for(i=2;i<tableRows.length;i++){
	let cells = tableRows[i].cells;
	console.log(cells);
	for(cell of cells){
		cell.addEventListener('click',function(){
			screen.append(this.innerHTML)
			alert(this.innerHTML);
		})	
	}
}
let clearBtn = document.getElementById('clearCalcDisplay');
clearBtn.addEventListener('click',()=>{
	screen.innerHTML='';
})	
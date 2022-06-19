//getting the display
let screen = document.getElementById("inputCalc");

//function executed whern td is clicked
function display(val){
	screen.innerHTML+=val
}
let evaluate = document.getElementById('evaluate');

//execute when (=) button is clicked
evaluate.addEventListener('click',function(){
	let equation = screen.innerHTML;
	try{
		let result = eval(equation);
		screen.innerHTML = result;
	}catch(err){
		alert('invalid Argumernts');
	}	

})
//clear screen implementation
let clearBtn = document.getElementById('clearCalcDisplay');
clearBtn.addEventListener('click',()=>{
	screen.innerHTML='';
})	
//getting the display
let screen = document.getElementById("inputCalc");

//function executed whern td is clicked
function display(val){
		screen.innerHTML+=val
}
let evaluate = document.getElementById('evaluate');

//execute when (=) button is clicked
try{
	evaluate.addEventListener('click',function(){
		let equation = screen.innerHTML;
		let result = eval(equation);
		screen.innerHTML = result;

	})
}catch(err){
	alert('enter valid arguments');
}	
//clear screen implementation
let clearBtn = document.getElementById('clearCalcDisplay');
clearBtn.addEventListener('click',()=>{
	screen.innerHTML='';
})	
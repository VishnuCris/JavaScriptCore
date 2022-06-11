document.addEventListener('DOMContentLoaded',function(){
	let div = document.getElementById('divHome');
	console.log(div.style);
	setTimeout(function(){
		div.style.backgroundColor = 'grey'
		},1000
	);
})
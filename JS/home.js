document.addEventListener('DOMContentLoaded',function(){
	let div = document.getElementById('Home');
	console.log(div.style);
	setTimeout(function(){
		div.style.backgroundColor = 'grey'
		},1000
	);
})
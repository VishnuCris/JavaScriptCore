document.addEventListener('DOMContentLoaded',function(){
	// $("#includeHomePage").load("Home.html");
	// $.ajax('../DATAS/sampleAjaxData.json',{
	// 	success:function(data) {
	// 		document.getElementsByTagName('i').textContent = data.name;	
	// 	}
	// })
	//For loading data from another file we need a server we cannot achive this using file transfer protocols.Either using XML or Http request.
	
	let submitBtn = document.getElementById('button1');
	//****************Using normal button click we access the data**********//
	submitBtn.onclick = function(){
		let name = document.getElementById('name');
		let age = document.getElementById('age');
		let nameLbl = document.getElementsByTagName('i');
		nameLbl[0].textContent = name.value;
		nameLbl[1].textContent = age.value;
		console.log(name.value)
	}
	//****************using form onsubmit accessing values ************//
	
})
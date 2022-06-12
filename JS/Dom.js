$("#includeHomePage").load("../HTML/	Home.html");
// $.ajax('../DATAS/sampleAjaxData.json',{
// 	success:function(data) {
// 		document.getElementsByTagName('i').textContent = data.name;	
// 	}
// })
//For loading data from another file we need a server we cannot achive this using file transfer protocols.Either using XML or Http request.

let submitBtn = document.getElementById('button1');
let editBtn = document.getElementById('edit1');
let selectedRow = null;
console.log(submitBtn);
submitBtn.addEventListener('click',function(e){
	e.preventDefault();
	let formData = FormData(e);
	if(selectedRow == null){
		insertData(formData);	
	}else{
		updateData(formData);
	}
	Reset();	
})

function FormData(e){
	e.preventDefault();
	let name = document.getElementById('name');
	let age = document.getElementById('age');
	let nameLbl = document.getElementsByTagName('i');
	let data = {};
	data.name = name.value;
	data.age = age.value;
	return data;
}
function editData(td){
	selectedRow = td.parentElement.parentElement;
	document.getElementById('name').value = selectedRow.cells[0].innerHTML;
	document.getElementById('age').value = selectedRow.cells[1].innerHTML;
}
function insertData(data){
	let table = document.getElementById('table1').getElementsByTagName('tbody')[0];
	let newRow = table.insertRow(table.length);
	let cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.name;
	let cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.age;
	let cell3 = newRow.insertCell(2);
	cell3.innerHTML = `<button onClick = "editData(this)">Edit</button><button>Delete</button>`;
}
function updateData(Data){
	selectedRow.cells[0].textContent = Data.name;
	selectedRow.cells[1].innerHTML = Data.age;
	selectedRow = null;
}
function Reset(){
	document.getElementById('name').value = '';
	document.getElementById('age').value = '';
}

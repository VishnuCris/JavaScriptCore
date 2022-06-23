

const fetchRslt = document.querySelector('#weatherRslt');
const fetchBtn = document.getElementById('fetchBtn');
const cityElem = document.getElementById('city');
fetchBtn.addEventListener('click',function(e){
	e.preventDefault();
	getResult(cityElem.value);	
})

let myInit = {method : 'GET',header:{'content-type':'application/json','Accept': 'application/json'},mode:'cors',cache:'default'};
let myRequest = new Request("../../DATAS/sampleAjaxData.json");
function getResult(value){
	fetch(`https://jsonplaceholder.typicode.com/posts`, {myInit})
    .then((response) => response.json())
    .then(displayResult)
    .catch((err) => alert(err));	
}

function displayResult(messages){
	console.log(messages);
	let keys = Object.keys(messages[0]);
	console.log(keys);
	let tableFlag = !!document.getElementById('fetchTable');
	(!tableFlag) ? tableCreation(keys,messages) : '';
}
function tableCreation(keys,messages){
	let table = document.createElement('table');
	let thead = document.createElement('thead');
	let theadRow = document.createElement('tr');
	for(let headIndex = 0;headIndex < keys.length;headIndex++){
		let headCol = document.createElement('td');
		headCol.innerHTML = keys[headIndex];
		theadRow.appendChild(headCol);
	}
	thead.appendChild(theadRow);
	table.appendChild(thead);
	let tbody = document.createElement('tbody');
	for(let bodyRow=0;bodyRow<messages.length;bodyRow++){
		let bodyRows = document.createElement('tr');
		for(let bodyCol = 0;bodyCol<keys.length;bodyCol++){
			let bodyCols = document.createElement('td');
			let cellText = document.createTextNode(messages[bodyRow][keys[bodyCol]]);
			bodyCols.appendChild(cellText);
			bodyRows.appendChild(bodyCols);
		}
		tbody.appendChild(bodyRows);
	}
	table.appendChild(tbody);
	document.body.append(table);	
	// table.classList.add('fetchTable');
	table.setAttribute('id','fetchTable');
}

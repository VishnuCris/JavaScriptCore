

const weatherRslt = document.querySelector('#weatherRslt');
const weatherBtn = document.getElementById('weatherBtn');
const cityElem = document.getElementById('city');
const api ={
	key:"c3848c784f4cb97f18760a50e3609175",
	baseurl:"https://home.openweathermap.org/data/2.5/"
}
weatherBtn.addEventListener('click',function(e){
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
	let table = document.createElement('table');
	let thead = document.createElement('thead');
	let theadRow = document.createElement('tr');
	for(let headIndex = 0;headIndex < 2;headIndex++){
		let headCol = document.createElement('td');
		theadRow.appendChild(headCol);
	}
	thead.appendChild(theadRow);
	table.appendChild(thead);
	let tbody = document.createElement('tbody');
	for(let bodyRow=0;bodyRow<2;bodyRow++){
		let bodyRows = document.createElement('tr');
		for(let bodyCol = 0;bodyCol<2;bodyCol++){
			let bodyCols = document.createElement('td');
			let cellText = document.createTextNode("cell in row "+bodyCol+", column "+bodyRow);
			bodyCols.appendChild(cellText);
			bodyRows.appendChild(bodyCols);
		}
		tbody.appendChild(bodyRows);
	}
	table.appendChild(tbody);
	document.body.append(table);
}

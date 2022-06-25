export default function displayResult(messages){
	let keys =(messages.length>1) ? Object.keys(messages[0]) : Object.keys(messages);
	let messagesLength = (messages.length>1) ? messages.length : 1;
	let result = (messagesLength > 1) ? messages:objectArrayPushed(messages);
	let tableFlag = !!document.getElementById('fetchTable');
	(!tableFlag) ? tableCreation(keys,result,messagesLength) : '';
}

export function tableCreation(keys,messages,messagesLength){
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
	for(let bodyRow=0;bodyRow<messagesLength;bodyRow++){
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

function objectArrayPushed(obj){
	let arr = [];
	arr.push(obj);
	return arr;
}
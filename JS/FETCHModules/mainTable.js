export default function displayMainResult(data){
	console.log(data)
	// console.log(res.tezt())
	let keys = data.response2;
	let messages = data.response1;
	let messagesLength = messages.length;
	let tableFlag = !!document.getElementById('fetchTable');
	(!tableFlag) ? tableMainCreation(keys,messages,messagesLength) : '';
}

export function tableMainCreation(keys,messages,messagesLength){
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
		for(let bodyCol = 0;bodyCol<messages[bodyRow].length;bodyCol++){
			let bodyCols = document.createElement('td');
			let cellText = document.createTextNode(messages[bodyRow][bodyCol]);
			bodyCols.appendChild(cellText);
			bodyRows.appendChild(bodyCols);
		}
		tbody.appendChild(bodyRows);
	}
	table.appendChild(tbody);
	document.body.append(table);	
	table.setAttribute('id','fetchTable');
}
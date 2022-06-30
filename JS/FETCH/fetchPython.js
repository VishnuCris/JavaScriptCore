import displayMainResult from '../../JS/FETCHModules/mainTable.js'
const myInitGet = {method : 'GET',header:{'content-type':'application/json','Accept': 'application/json'},mode:'no-cors',cache:'default'};

// const myRequest = new Request('flowers.jpg');
const pythonFetchBtn = document.getElementById('pythonFetchBtn');
pythonFetchBtn.addEventListener('click',()=>{
	fetch('http://127.0.0.1:5000/',{myInitGet})
	.then((res) => res.json())
	.then(displayMainResult)
	.catch(err => console.log(err));
})

const postPyBtn = document.getElementById('pyBtn');
postPyBtn.addEventListener('click',()=>{
	const personId = document.querySelector('#PersonId').value;
	const LastName = document.querySelector('#LastName').value;
	const FirstName = document.querySelector('#FirstName').value;
	const Address = document.querySelector('#Address').value;
	const City = document.querySelector('#City').value;
	let data = {'personId':personId,'LastName':LastName,'FirstName':FirstName,'Address':Address,'City':City};
	postPyData(data);
})

const displayRsltInSpan = (responses,id="getPyData")=>{
	let getPyData = document.querySelector('#'+id);
	console.log(responses)
	for(response of responses){	
		console.log(response);
		getPyData.innerHTML = response;
	}
}

const postPyData = (data) => {
	console.log(data);
	const myInit = {
		method:'POST',
		headers : {
			'content-type':'application/json',
		},
		body:JSON.stringify({'data':data})
	}
	fetch('http://127.0.0.1:5000/postPrsn',myInit)
	.then(response => response.json())
	.then(displayRsltInSpan)
	.catch(err => alert(err));
}
const pythonFetchBtn = document.getElementById('pythonFetchBtn');
const myInitGet = {method : 'GET',header:{'content-type':'application/json','Accept': 'application/json'},mode:'no-cors',cache:'default'};
const myInitPost = {method : 'POST',header:{'content-type':'application/json','Accept': 'application/json'},mode:'no-cors',cache:'default'};
pythonFetchBtn.addEventListener('click',()=>{
	fetch('http://127.0.0.1:5000/',{myInitGet})
	.then((res) => res.json())
	.then(displayRsltInSpan)
	.catch(err => console.log(err));
})

const displayRsltInSpan = (res,id="getPyData")=>{
	console.log(res)
	let getPyData = document.querySelector('#'+id);
	getPyData.innerHTML = res.message;
}

const postPyBtn = document.getElementById('pyBtn');
postPyBtn.addEventListener('click',()=>{
	const textPy = document.querySelector('#textPy');
	let data = textPy.value;
	postPyData(data);
})

function postPyData(data){
	fetch('http://127.0.0.1:5000/post',{myInitPost})
	.then((res) => res.json())
	.then(displayRsltInSpan)
	.catch((err)=>console.log(err));
}
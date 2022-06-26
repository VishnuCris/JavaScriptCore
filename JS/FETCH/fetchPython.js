let pythonFetchBtn = document.getElementById('pythonFetchBtn');
let myInit = {method : 'GET',header:{'content-type':'application/json','Accept': 'application/json'},mode:'cors',cache:'default'};
pythonFetchBtn.addEventListener('click',()=>{
	fetch('https://127.0.0.1:5000',{myInit})
	.then((res) => res.json())
	.then((resp) => console.log(resp))
	.catch(err => console.log(err));
})
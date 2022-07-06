import displayMainResult from '../../JS/FETCHModules/mainTable.js'
// const myInit = {method:'GET',header:{'content-type':'application/json','Accept':'application/json'},mode:'no-cors'}
/*#######or########*/
let myInit = new Headers();
myInit.append('method','GET')
myInit.append('content-type','application/json')
myInit.append('Accept','application/json')
myInit.append('mode','no-cors')
myInit.append('credentials','include')
// console.log(myInit.get('mode'))
// const myArray = new Uint8Array(10);
const request = new Request('http://localhost:5000/	',{credentials:'include',redirect:'follow'})

const headerBtn = document.querySelector('#headerBtn');
console.log(request.bodyUsed)
console.log(request.redirect)
headerBtn.addEventListener('click',function(){
	fetch(request)
	.then((res) =>{
		console.log(...res.headers);
		console.log(res.redirect);
		console.log(res.statusText);
		console.log(res.status);
		console.log(res.type);
		console.log(res.url);
		// console.log(Response.text());
		Response.redirect('https://javascript.info/');
		return res.json()})
	.then(displayMainResult)
})
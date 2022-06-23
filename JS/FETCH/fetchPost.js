// import {displayResult} from '../../JS/FETCh/fetch.js'
const title = document.getElementById('titlePost');
const id = document.getElementById('idPost');
const body = document.getElementById('bodyPost');
const postBtn = document.getElementById('postBtn');
console.log('sdsadad');
postBtn.addEventListener('click',() => {
	alert('*****');
	(title.value && id.value && body.value) ? postData(title,id) : alert('please fill all mandatory fields');
})

function postData(title,id){
	alert('*****');
	const myInit = {
		method:'POST',
		headers : {
			'content-type':'application/json',
		},
		body:JSON.stringify({
			title:title.value,
			body:body.value,
			id:id.value,
		})
	}
	fetch('https://jsonplaceholder.typicode.com/posts',myInit)
	.then(response => response.json())
	.then(displayResult)
	.catch(err => alert(err));
}

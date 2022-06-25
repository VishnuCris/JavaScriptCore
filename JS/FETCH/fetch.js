
import displayResult from '../../JS/FETCHModules/displayResultTableFormat.js'
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


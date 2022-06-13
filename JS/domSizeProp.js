$("#includeHomePage").load("../HTML/Home.html");
let div = document.getElementById('example');
console.log(div);
let windProp = `OffSet Width   : ${div.offsetWidth}(outer width of the property)<br/> 
				OffSet Height  : ${div.offsetHeight}(outer height of the property)<br/>
				Offset Parent  : ${JSON.stringify(div.offsetParent)}<br/>
				OffSet Left    : ${div.offsetLeft}(left margin with respective to parent element i,e. position:fixed/relative)<br/>
				OffSet Top     : ${div.offsetTop}<br/>`;
let statement = document.getElementById('content');
statement.innerHTML = windProp;
console.log(div.offsetWidth);//consoles the value
// div.remove();
// console.log(div.offsetWidth);//console zero because the element is removed

//Border properties 
let clientProp = `Client Top    : ${div.clientTop}(length of border tp/bottom)<br/>
				  Client Left   : <i>${div.clientLeft}(length of left margin with respective to parent element)</i><br/>
				  Client Width  : ${div.clientWidth}((gives the content width include padding but not scroll bar))<br/>
				  Client Height : ${div.clientHeight}(gives the content height include padding but not scroll bar)<br/>
				  These properties are like clientWidth/clientHeight, but they also include the scrolled out (hidden) parts:<br/>
				  Scroll lWidth : ${div.scrollWidth}<br/>
				  Scroll Height : ${div.scrollHeight}<br/>
				  Properties scrollLeft/scrollTop are the width/height of the hidden, scrolled out part of the element:<br/>
				  Scroll Left   : ${div.scrollLeft}<br/>
				  Scroll Top    : ${div.scrollTop}
				  `;
statement.innerHTML += clientProp;
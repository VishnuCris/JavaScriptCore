// $("#includeHomePage").load("../HTML/Home.html" );
let field = document.getElementById('field');
field.addEventListener('click',function(){
	let windowCordinates = this.getBoundingClientRect();
	console.log(windowCordinates);
	let ballCoords = {
        top: event.clientY - windowCordinates.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - windowCordinates.left - field.clientLeft - ball.clientWidth / 2
      };

      // prevent crossing the top field boundary
      if (ballCoords.top < 0) ballCoords.top = 0;

      // prevent crossing the left field boundary
      if (ballCoords.left < 0) ballCoords.left = 0;


      // // prevent crossing the right field boundary
      if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
      }

      // prevent crossing the bottom field boundary
      if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
      }

      ball.style.left = ballCoords.left + 'px';
      ball.style.top = ballCoords.top + 'px';
})
//listen for click on button

var btn = document.querySelector("input");
console.log(btn);
btn.addEventListener("click", counter);
var clickCounter = 0;
var counter = function(click){
	clickCounter = clickCounter + 1;
	 console.log(clickCounter);
};
counter();
console.log(clickCounter);

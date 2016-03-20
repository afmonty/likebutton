//listen for click on button

var btn = document.querySelector(".buttonHolder");
var clickCounter = 0;


btn.addEventListener("click", function(){
	clickCounter = clickCounter + 1;
	 console.log(clickCounter);
	 document.querySelector(".buttonHolder").innerHTML = clickCounter + " likes";
});


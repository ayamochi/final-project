var button = document.querySelector('button');
var title = document.querySelector('h6');

button.addEventListener("click", doSomething);

function doSomething() {
  console.log("you clicked the button!");
  title.innerText = "button";
}

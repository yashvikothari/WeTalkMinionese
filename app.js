var usersentences = document.querySelector("#txt-userinput");
var translator = document.querySelector("#btn-translate");

translator.addEventListener("click", func4click);

function func4click() {
  console.log("clicked!");
  console.log("input", usersentences.value);
}

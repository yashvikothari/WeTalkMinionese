var usersentences = document.querySelector("#txt-userinput");
var translator = document.querySelector("#btn-translate");
var finalOutput = document.querySelector("#output");

function func4click() {
  console.log("clicked!");
  console.log("input", usersentences.value);

  finalOutput.innerHTML = "kukde koo " + usersentences.value;
  console.log("output",finalOutput.innerHTML)
}

translator.addEventListener("click", func4click);

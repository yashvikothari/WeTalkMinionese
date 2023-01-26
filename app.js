// var usersentences = document.querySelector("#txt-userinput");
// var translator = document.querySelector("#btn-translate");
// var finalOutput = document.querySelector("#output");

// var APIURL = "https://api.funtranslations.com/translate/minion.json";

// function func4click() {
//   console.log("clicked!");
//   console.log("input", usersentences.value);

//   //finalOutput.innerHTML = "kukde koo " + usersentences.value;
//   var finalsentences = usersentences.value ,//took input then call server to process
//   fetch(getTranslationURL(finalsentences))
//   .then(response => response.json())
//   .then(json => {
//    var translatedText = json.contents.translated;
//    finalOutput.innerHTML = translatedText;
//   })
//   //console.log("output",finalOutput.innerHTML)

// }

// function getTranslationURL(finalsentences){
//     return APIURL+"?"+"text="+text
// }
// translator.addEventListener("click", func4click);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again after some time");
}

function clickHandler() {
  var inputText = txtInput.value; // taking input

  // calling server for processing
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText; // output
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
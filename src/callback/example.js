let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://rickandmortyapi.com/api/character/1");
oReq.send();
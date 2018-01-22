document.addEventListener('DOMContentLoaded', function(event) {
    console.log('DOM loaded');

var idNum = -1
    var button = document.createElement("button");
    button.innerHTML = "Add Square";
    button.className = "button";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener("click", function() {
    let square = document.createElement("div");
    document.body.appendChild(square);
    square.className = "box";
    square.id = idNum +=1;
    let text = document.createElement("p");
    square.appendChild(text);
    text.innerHTML = idNum;
    test.className = "numbers";
})})
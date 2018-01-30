document.addEventListener('DOMContentLoaded', function(event) {
    console.log('DOM loaded');
let idNum = -1
    let button = document.createElement("button");
    button.innerHTML = "Add Square";
    button.className = "button";
let body = document.getElementsByTagName("body")[0];
body.appendChild(button);
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  let right = 1;
  let left = 1;
button.addEventListener("click", function() {
    let square = document.createElement("div");
    document.body.appendChild(square);
    square.className = "box";
    square.id = idNum +=1;
    let text = document.createElement("p");
    square.appendChild(text);
    text.innerText = `${idNum}`;
    text.className = "numbers";
    square.addEventListener('click', () => {
        square.style.backgroundColor = `${getRandomColor()}`;
    });
    square.addEventListener('dblclick', () => {
        console.log(idNum);
        if (idNum % 2 === 0) {
            if (document.getElementById(`${idNum + right}` == null)) {
                alert('No more squares');
            } else {
                document.getElementById(`${idNum + right}`).remove();
                right = right + 1;
            }
        } else {
            if (document.getElementById(`${idNum - left}`) < 1) {
                alert('Stop it')
            } else {
                document.getElementById(`${idNum - left}`).remove();
                left = left + 1;
            }
        }
    })
})})
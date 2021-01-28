// var a = document.getElementsByTagName("button")[0];

// a.addEventListener("click", function(){
//     console.log("CLICKED");
// })

var addBtn = document.getElementById("addBtn");
var userinput = document.getElementById("userInput");
var ul = document.querySelector("ul");

function getInputLength(){
    return userInput.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value = "";
}

function addListAfterClick(){
    if(getInputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(event){
    if(getInputLength() > 0 &&  event.keyCode === 13){
        createListElement();
    }
}

addBtn.addEventListener("click", addListAfterClick);

userInput.addEventListener("keypress", addListAfterKeypress);


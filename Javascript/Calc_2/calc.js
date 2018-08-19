window.addEventListener("load", initEvents);

var exp;
function initEvents(){
    exp = document.getElementById("box");
    buttons = document.getElementsByClassName("btn");
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", buildExp);
    }
    document.getElementById("calculate").addEventListener("click", calc);
}

function buildExp() {
    exp.value += event.srcElement.innerHTML;
    console.log(exp.value);
}

function calc() {
    var result = eval(exp.value);
    exp.value = result;
}
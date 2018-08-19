window.addEventListener("load", initEvents);

var fnum;
var snum;

function initEvents(){
    fnum = document.getElementById("box_1");
    snum = document.getElementById("box_2");

    buttons = document.getElementsByTagName("button");
    
    for(var i = 0; i<buttons.length; i++){
        buttons[i].addEventListener("click", calc);
    }
}

function calc(){
    // console.log(event);
    // var elem = event.srcElement;
    // console.log(elem);
    var opr = event.srcElement.innerHTML;
    // console.log(opr);

    var expression = fnum.value + opr + snum.value;
    // console.log(expression);
    var result = eval(expression);
    document.getElementById("result").innerHTML = result;
}

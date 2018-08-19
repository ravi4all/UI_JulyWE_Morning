window.addEventListener("load", initEvents);

var fnum;
var snum;

function initEvents(){
    fnum = document.getElementById("box_1");
    snum = document.getElementById("box_2");

    document.getElementById("add").addEventListener("click",add);
    document.getElementById("sub").addEventListener("click",sub);
    // document.getElementById("div").addEventListener("click",div);
    // document.getElementById("mul").addEventListener("click",mul);
}

function add(){
    var result = parseInt(fnum.value) + parseInt(snum.value);
    console.log("Result is",result);
    document.getElementById("result").innerHTML = result;
}

function sub(){
    var result = parseInt(fnum.value) - parseInt(snum.value);
    console.log("Result is",result);
    document.getElementById("result").innerHTML = result;
}
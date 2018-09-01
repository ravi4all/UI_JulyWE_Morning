window.addEventListener("load", initEvents);

var username;
var emailId;
var pwd;
var c_pwd;
var span;
function initEvents(){
    username = document.querySelector("#box_1");
    emailId = document.querySelector("#box_2")
    pwd = document.querySelector("#box_3");
    c_pwd = document.querySelector("#box_4");

    span = document.querySelectorAll("span");

    username.addEventListener("blur", checkUsername);
    emailId.addEventListener("keyup", validateEmail);
}

function checkUsername(){
    var str = username.value;
    checkBlank(str,0);
}

function validateEmail() {
    var str = emailId.value;
    checkBlank(str,1);
    var pattern = /([a-z | 0-9])\w+[@]\w+[.]\w{2,3}/;
    if(pattern.test(str)) {
        span[1].innerHTML = "valid";
        span[1].style.color = "green";
    }
    else {
        span[1].innerHTML = "invalid";
        span[1].style.color = "red";
    }
}

function checkBlank(text, index){
    // if(str == "" || str.length <= 0) {
    //     span[0].innerHTML = "Please fill this";
    // }
    // else {
    //     span[0].innerHTML = "";
    // }
    
    if(isEmpty(text)) {
        span[index].innerHTML = "Please fill this";
    }
    else {
        span[index].innerHTML = "";
    }
}

function isEmpty(str) {
    return (str == undefined || str == 0 || str == "") ? true : false;
}
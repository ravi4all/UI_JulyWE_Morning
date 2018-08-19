// window.addEventListener("load", function(){
//     // Event Binding
//     document.getElementById("btn").addEventListener("click", function(){
//         username = document.getElementById("box");
//         document.getElementById("output").innerHTML = username.value;
//     });
// });

window.addEventListener("load", initEvents);

function initEvents(){
    console.log("init events...");
    document.getElementById("btn").addEventListener("click",showName);
}

function showName(){
    console.log("showname executed...");
    username = document.getElementById("box");
    document.getElementById("output").innerHTML = username.value;
}
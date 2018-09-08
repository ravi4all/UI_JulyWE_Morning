window.addEventListener("load", initEvent);

var content;
function initEvent(){
    content = document.getElementById("content");
    document.getElementById("btn").addEventListener("click", loadData);
}

function loadData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        
        data = this.responseText;
        // console.log(data);
        data = JSON.parse(data);
        var arr = data.data;
        arr.forEach(function(obj){
            var li = document.createElement("li");
            li.innerHTML = obj.name + " - " + obj.date;
            content.appendChild(li);
        })
        }
    }
    // xhttp.open('GET', 'data.json');
    xhttp.open('GET', 'https://raw.githubusercontent.com/ravi4all/UI_JulyWE_Morning/master/data.json');
    xhttp.send();
}
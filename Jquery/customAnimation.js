$(document).ready(function(){
    var img = $("img");
    $("#btn").click(function(){
        img.animate(
            {width:'800px',
            height : '500px',
            opacity : 0.5
            },1000);
        img.animate(
            {width:'500px',
            height : '400px',
            opacity : 1
            },1000);
        img.animate(
            {width:'1000px',
            height : '900px',
            opacity : 0.3
            },1000);
        img.animate(
            {width:'500px',
            height : '400px',
            opacity : 1
            },1000);
    })
})
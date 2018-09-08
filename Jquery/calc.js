$(document).ready(function(){

    var fnum = $("#fnum");
    var snum = $("#snum");

    $("button").click(function(){
        var opr = $(this).html();
        var expression = fnum.val() + opr + snum.val();
        var result = eval(expression);
        $("span").html(result);
    })

})
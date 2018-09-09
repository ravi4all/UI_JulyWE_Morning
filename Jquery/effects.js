$(document).ready(function(){
    // $("#hide").click(function(){
    //     $("#parent").hide(1000);
    // });
    // $("#show").click(function(){
    //     $("#parent").show(1000);
    // });
    // $("#toggle").click(function(){
    //     $("#parent").toggle(1000);
    // });

    // $("#hide").click(function(){
    //     $("#parent").fadeOut(1000);
    // });
    // $("#show").click(function(){
    //     $("#parent").fadeIn(1000);
    // });
    // $("#toggle").click(function(){
    //     $("#parent").fadeToggle(1000);
    // });

    $("#hide").click(function(){
        $("#parent").slideUp(1000);
    });
    $("#show").click(function(){
        $("#parent").slideDown(1000);
    });
    $("#toggle").click(function(){
        $("#parent").slideToggle(1000);
    });
})
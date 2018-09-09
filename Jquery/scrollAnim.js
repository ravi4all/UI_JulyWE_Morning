$(window).scroll(function(){
    var s = $(this).scrollTop();
    // console.log(s);
    if(s >= 400) {
        $("#content").addClass("active");
    }
    else {
        $("#content").removeClass("active");
    }
})
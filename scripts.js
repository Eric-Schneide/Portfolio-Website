$(document).ready(function(){
    $(".OpenButton1").click(function(){
        $(".Project1").slideDown("slow");
    });
    $(".CloseButton1").click(function(){
        $(".Project1").slideUp();
    });

    $(".OpenButton2").click(function(){
        $(".Project2").slideDown();
    });
    $(".CloseButton2").click(function(){
        $(".Project2").slideUp();
    });

    $(".OpenButton3").click(function(){
        $(".Project3").slideDown();
    });
    $(".CloseButton3").click(function(){
        $(".Project3").slideUp();
    });

    $(".OpenButton4").click(function(){
        $(".Project4").slideDown();
    });
    $(".CloseButton4").click(function(){
        $(".Project4").slideUp();
    });


});
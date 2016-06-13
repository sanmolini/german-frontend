$(document).ready(function() {
   //Aquí van todas las acciones del documento.
    
    /*
            Test 1
    */    
    $('#test1').click(function(){
        $('.containerTest').show();
    });
    /*
            Test 2
    */  
    $('#closeModal').click(function(){
        $('.containerTest').hide();
    });
    /*
            Test 3
    */    
    $('.containerTest').click(function(){
        $(this).css("background","brown");
    });
    /*
            Test 4
    */
    $('.containerTest h2 , .containerTest p').click(function(){
        $(this).css("color","red");
    });
    /*
            Test 5
    */    
    $('#test5').hover(function(){
        $('.testing a span').toggle();
    });
    /*
            Test 6
    */    
    $('#test6').click(function(){
        $('body').animate({ scrollTop: 0 }, "slow");
            return false;
    });
    /*
            Test 7
    */    
    $('#test7').click(function(){
        $('body').toggleClass("bgRed");
    });
    /*
            Test 8
    */  
    var basicA = function(){
        $('a').removeClass("active");
    };
    $('a').click(function(){
        basicA();
        $(this).toggleClass("active");
    });
    /*
            Test 9
    */    
    $('#test9').click(function(){
        $('.containerTest').slideDown();
    });
    /*
            Test 10
    */    
    $('#test10').click(function(){
        $('.containerTest').slideUp();
    });
    /*
            Test 11
    */    
    $('#test11').click(function(){
        $('.containerTest').show();
        $('.containerTest').addClass("bounce");
    });
    /*
            Test 12
    */  
    $('#test12').click(function(){
        $(this).toggleClass("rotate45");
    });
    /*
            Test 13
    */  
    $('#test13').click(function(){
        $(this).animate({height: "200px"}, 500);
    });
    /*
            Test 14
    */
    $('#test14').click(function(){
        $(this).css({
            "background" : "white",
            "color" : "black"
                    });
    });
    /*
            Test 15
    */    
    /*
            Test 16
    */
}); 
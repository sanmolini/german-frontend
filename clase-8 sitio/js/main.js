jQuery(document).ready(function ($) {

    // site preloader -- also uncomment the div in the header and the css style for #preloader
    /*$(window).load(function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });
    */
    $("#showModal").click(function(){
        $('#preloader').show().addClass('tada');
    });
    
    $('.close').click(function(){
        $('#preloader').removeClass('tada pulse');
        $('#preloader').addClass('fadeOutRight');
        $('#preloader').css('display','none');
    })
});
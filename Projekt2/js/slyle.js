$(document).ready(function()
{
    $('.openButton').click(function() {
        if(!$('.openButton').hasClass('openDone'))
        {
            $('.openButton').addClass('openDone');
            $('nav').css("left", "0px");
        }
        else
        {
            $('.openButton').removeClass('openDone');
            $('nav').css("left", "-999px");
        }
    });
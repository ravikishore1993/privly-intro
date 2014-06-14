$(document).ready(function(){
    $('#showcaseInputSubmit').click(function(event){
          event.preventDefault();
          $('#showcaseOutputElement').html($('#showcaseInputText').val());
    });   
    $('#landing').css('min-height', $(window).height() + 'px'); 
    $('#showcaseMain').css('width', (parseInt($(window).width()) - 400) + 'px'); 
});